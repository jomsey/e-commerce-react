import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import loaderImage from "../assets/loader.gif"
import Pagination from "../components/Pagination";
import Collection from "./../components/Collection";
import { useContext,useEffect,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import ProductsContainer from "../components/ProductsContainer";


function ProductsList() {
  
useEffect(() => {
  const getSiteProducts = async() => {
    try {
      const  response = await productsService.getProducts()
      const{results,count}=response.data
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

        {products.length>0?<ProductsContainer products={products}/>:
        <div className="placeholder-filler">
           <img src={loaderImage}/>
            <h3>Loading ...</h3>
        </div>
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
