import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import ProductCategories from "../components/ProductCategoryContainer";
import "./Home.css";
import Billboard from "./../components/Billboard";
import { posters } from "../utils/posters";
import TopBar from './../components/TopBar';
import {useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";
import CollectionsPlaceholder from "../components/CollectionsPlaceholder";


function Home() {
  const {collections} = useContext(ShopContext);
  
  return (
    <>
      <TopBar showToggler={false}/>
      <div className="landing">
      <ProductCategories />
      <Carousel />
      </div>

      <Billboard items={posters} />
     
      {collections.length>0?collections.map(({title,products,id})=> 
                                          <Collection title={title}
                                              productsList={products}
                                              key={id}/>
                                          ):
                        <div>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                      </div>
            }
      
    </> 
  );
}

export default Home;
