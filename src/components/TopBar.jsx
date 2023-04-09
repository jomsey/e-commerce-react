import "./TopBar.css";
import logo from "../assets/logo.jpg";
import TopBarIcons from "./TopBarIcons";
import { useState, useContext,useEffect, la} from "react";
import { Link} from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";
import PropTypes from "prop-types";
import ProductCategories from "./ProductCategoryContainer";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import { useNavigate } from "react-router-dom";
import SearchItemForm from "./SearchItemForm";
import Alert from './Alert';


function TopBar({ showToggler,useMobileSideNav}) {
          const [autoCompleteList,setAutoCompleteList] = useState([])
          const {setProducts,setProductsCount,
                setProductsResultsName,searchQuery,alertMessage,setAlertMessage,
                setSearchQuery,mobileOffCanvasOpen,setMobileOffCanvasOpen} = useContext(ShopContext)
          const [offCanvasVisible, setOffCanvasVisibility] = useState(false);
          const [isMobilePhone,setIsMobilePhone] = useState(false)
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
          
          useEffect(()=>window.screen.width<=480?setIsMobilePhone(true):setIsMobilePhone(false))//always show toggler button on mobile screens
          
          return (
            <div className="top-bar-container"> 
  
              {alertMessage && <Alert  message={alertMessage.message} isError={alertMessage.isError}/>}
              <div className="top-bar">
                <div className="left">
                      <MenuIcon
                          visible={showToggler || isMobilePhone }
                          onMenuIconClick={HandleMenuIconClick}
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

export default TopBar;
