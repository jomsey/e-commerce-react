import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import Pagination from "../components/Pagination";
import Collection from "./../components/Collection";
import { useContext,useEffect,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import ProductsContainer from "../components/ProductsContainer";
import ComponentIsLoading from "../components/ComponentIsLoading";


function ProductsList() {
  const [productsLoading,setProductsLoading]=useState(true)
  
useEffect(() => {
  const getSiteProducts = async() => {
    try {
        const  response = await productsService.getProducts()
        const{results,count}=response.data
        setProductsLoading(false)
        setProducts(results)
        setProductsResultsName("all")
        setProductsCount(prev=>prev=count)
  } catch (error) {}
  
   }
   getSiteProducts()
}, []);
 
  const {products,productsCount,
        setProducts,productsResultsName,
        priceRange,setPriceRange,searchQuery}
         = useContext(ShopContext);
  const [currentPage,setCurrentPage] = useState(1)
        
  const handlePageChange=async(page)=>{
    setProducts([]) //Simulate products loading page
    const responseObject = productsResultsName === "bySearch"?productsService.getPageSearchResults(page,searchQuery):
                           productsResultsName==="byPrice"?productsService.getPageProductsFilteredByPrice(priceRange.max, priceRange.min,page):
                           productsService.getPageProducts(page);

    const response = await  responseObject
    const{results}=response.data
    setProducts(results)
    setCurrentPage(page)
   
  }
 

  return (
    <>
      <TopBar showToggler={true} />
      <div className="group products">
        
        <Filters />

        {productsLoading
              ?<ComponentIsLoading/>
              :products.length>0
              ?<ProductsContainer products={products}/>
              :<h1>No products to show</h1>

        }
      </div>

      <div className="product-pagination">
              <Pagination 
                      currentPage={currentPage}
                      pageSize={30} 
                      itemsCount={productsCount}
                      onPageChange={handlePageChange}/>
      </div>
          
      {products.length>0 && <Collection title={"Recently Viewed"} productsList={products}/>}
    </>
  );
}

export default ProductsList;
