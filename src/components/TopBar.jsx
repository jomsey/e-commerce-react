import "./TopBar.css";
import logo from "../assets/logo.jpg";
import TopBarIcons from "./TopBarIcons";
import { useState, useContext,useEffect} from "react";
import { Link} from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";
import PropTypes from "prop-types";
import ProductCategories from "./ProductCategoryContainer";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import { useNavigate } from "react-router-dom";
import SearchItemForm from "./SearchItemForm";
import AlertUsable from './AlertUsable';


function TopBar({ showToggler,useMobileSideNav,onTogglerIconClick=null}) {
          const [autoCompleteList,setAutoCompleteList] = useState([])
          const {setProducts,setProductsCount,setAlertMessage,
                setProductsResultsName,searchQuery,alertMessage,isMobilePhone,
                setSearchQuery,mobileOffCanvasOpen,setMobileOffCanvasOpen} = useContext(ShopContext)
          const [offCanvasVisible, setOffCanvasVisibility] = useState(false);
          const navigate = useNavigate()
        
          const HandleMenuIconClick=() => {
                // display default menu items off-canvas:else side off-canvas for small screens
                if(useMobileSideNav && isMobilePhone)mobileOffCanvasOpen ?setMobileOffCanvasOpen(false):setMobileOffCanvasOpen(true);
                else offCanvasVisible ?setOffCanvasVisibility(false):setOffCanvasVisibility(true);
                
          }

          const handleSearchInputChange=async (e)=>{
                setSearchQuery(()=>e.target.value)
                try {
                    const response = await productsService.searchProducts(searchQuery)
                    const{results}=response.data
                    setAutoCompleteList(results)
              } catch (error) {}
          }
      
          const handleSearchProducts= async (e)=>{
                e.preventDefault()
                navigate("/products")
                try {
                    const response = await productsService.searchProducts(searchQuery)
                    const{results,count}=response.data
                    setProductsResultsName("bySearch")
                    setProducts(results)                
                    setSearchQuery("")
                    setProductsCount(count)
                } catch (error) {}
          }
          
          useEffect(()=>{
                  setTimeout(()=>{
                  setAlertMessage(null)//remove message after display
                  },7000); 
          },[alertMessage])

          return (
            <div className="top-bar-container"> 
              {alertMessage && <AlertUsable message={alertMessage.message} type={alertMessage.type}/>}
              <div className="top-bar">
                <div className="left">
                      <MenuIcon
                          visible={showToggler || isMobilePhone }
                          onMenuIconClick={onTogglerIconClick?onTogglerIconClick:HandleMenuIconClick}
                      />
 
                      {showToggler && 
                        <div className={offCanvasVisible?"category-off-canvas show-off-canvas":"category-off-canvas"}>
                            <ProductCategories />
                        </div>
                      }

                      <Link to="/">
                          <div className="logo">
                            <img src={logo} alt="logo" />
                          </div>
                      </Link>
                </div>

                 <SearchItemForm
                            onSearchItemSubmit={handleSearchProducts}
                            searchQuery={searchQuery}
                            placeholder="search product , category and promotions"
                            onChange={handleSearchInputChange}
                   /> 

                  {
                    autoCompleteList.length>0 &&
                    <div className="auto-complete-container">
                          <ul>
                          {autoCompleteList.slice(0,5).map(({name})=><li key={name} onClick={()=>{setSearchQuery(name);setAutoCompleteList([])}}>{name}</li>)}
                          </ul>                     
                    </div>
                  }

                <div className="top-bar-icons">
                      <TopBarIcons />
                </div>
              
              </div>
              
            </div>
          );
}

TopBar.propTypes = {
  showToggler: PropTypes.bool,
};

// function debounce(fn, delay) {
//   let timerId;
//   return function (...args) {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

export default TopBar;
