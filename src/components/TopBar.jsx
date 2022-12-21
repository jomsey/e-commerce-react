import "./TopBar.css";
import logo from "../assets/logo.jpg";
import TopBarIcons from "./TopBarIcons";
import Icon from "../ui/Icon";
import { useState, useEffect,useContext } from "react";
import { Link} from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";
import PropTypes from "prop-types";
import ProductCategories from "./ProductCategoryContainer";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import { useNavigate } from "react-router-dom";





function TopBar({ showToggler }) {
  const {setProducts,setProductsCount,setProductsResultsName,searchQuery,setSearchQuery} = useContext(ShopContext)
  const [displace, setDisplace] = useState(false);
  const [offCanvasVisible, setOffCanvasVisibility] = useState(false);
  const [query,setQuery] = useState("")
  const navigate = useNavigate()

  const handleScroll = () => {
    window.scrollY < 200 ? setDisplace(true) : setDisplace(false);
  };
 
  const handleSearchPoducts= async (e)=>{
    e.preventDefault()
    try {
      const response = await productsService. searchProducts(searchQuery)
      const{results,count}=response.data
      setProducts(results)
      setProductsResultsName("bySearch")
      setProductsCount(count)
      navigate("/products")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let topBarClasses = displace ? "top-bar displace-bar" : "top-bar";

  let offCanvasClasses = offCanvasVisible
    ? "category-off-canvas show-off-canvas"
    : " category-off-canvas";

    
    
  return (
    <>
      <div className="top-bar">
        <div className="left">
          <MenuIcon
            visible={showToggler}
            HandleMenuIconClick={() => {
              offCanvasVisible === false
                ? setOffCanvasVisibility(true)
                : setOffCanvasVisibility(false);
            }}
          />
          {showToggler && (
            <div className={offCanvasClasses}>
              <ProductCategories />
            </div>
          )}

          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <form  onSubmit={handleSearchPoducts}>
          <input
            type="search"
            placeholder="search product , category and promotions"
            maxLength={50}
            name="q"
            value={searchQuery}
            onChange={e=>setSearchQuery(()=>e.target.value)}
          />
          <Icon iconName={"magnifying-glass"} extra="search-icon" />
          <button type="submit">SEARCH</button>
        </form>
        <div className="top-bar-icons">
          <TopBarIcons />
        
        </div>
       
      </div>
      
    </>
  );
}

TopBar.propTypes = {
  showToggler: PropTypes.bool,
};

export default TopBar;
