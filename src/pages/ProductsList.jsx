import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import NoContent from "./../components/NoContent"
import Pagination from "../components/Pagination";
import { useContext, useEffect} from "react";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import ProductsContainer from "../components/ProductsContainer";
import ComponentIsLoading from "../components/ComponentIsLoading";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import OffCanvas from "../components/OffCanvas";
import CategoryList from "../components/CategoryList";


function ProductsList() {

  const {products,productsCount,
         setProducts,productsResultsName,
         productsLoading,setProductsLoading,categoryName,
         currentPage,setCurrentPage,setAlertMessage,setProductsCount} = useContext(ShopContext);
  
 
  const handlePageChange=async(page)=>{
        setProductsLoading(true)

        const responseObject = productsResultsName === "bySearch"?productsService.getPageSearchResults(page,searchQuery):
                               productsResultsName === "byPrice"?productsService.getPageProductsFilteredByPrice(priceRange.max, priceRange.min,page):
                               productsResultsName === "category" && categoryName !== "All products"?productsService.getCategoryPageProducts(categoryName,page):
                               productsService.getPageProducts(page);

        const response = await  responseObject
        const{results}=response.data
        setProducts(results)
        setCurrentPage(page)
        setProductsLoading(false)
  }


  useEffect(()=>{
            const getProducts = async()=>{
                  try {
                      const  response = await productsService.getProducts()
                      const{results,count}=response.data
                      setProducts(results)
                      setProductsCount(count)
                      setProductsLoading(false)
                      
                  } catch (error) {
                        setAlertMessage({message:"Oops Something Is Wrong !",isError:true})
                  }
            }
           !productsResultsName && getProducts() //display default results list if no filters applied
            
   },[])
      


  return (
    <>
      <OffCanvas>
            <CategoryList/>
            <Filters/>
      </OffCanvas>
      <TopBar showToggler={true} useMobileSideNav={true} />
      <div className="products-list-header">
            <div className="bread-crumb">
            </div>
      </div>
      <div className="group products">
            <Filters />

            <div className="group-right">
                  {productsLoading?<ComponentIsLoading/>:<ProductsContainer products={products}/>}
                  {products.length<1 && <NoContent message="No Products To Show"/>}

            </div>
      </div>

     {
        !productsLoading && 
        <div className="product-pagination">
        <Pagination 
                currentPage={currentPage}
                pageSize={30} 
                itemsCount={productsCount}
                onPageChange={handlePageChange}/>
         </div>
      } 
      <RecentlyViewedProducts/>
    </>
  );
}

export default ProductsList;
