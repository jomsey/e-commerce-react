import "./ProductsList.css";
import { useContext} from "react";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import Collection from "./../components/Collection";
import { ShopContext } from "../shop-context/ShopState";
import ProductsContainer from "../components/ProductsContainer";
import loaderImage from "../assets/loader.gif"



function ProductsList() {
  const {products} = useContext(ShopContext);
 
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
      {products.length>0 && <Collection title={"Recently Viewed"} productsList={products}/>}
    </>
  );
}

export default ProductsList;
