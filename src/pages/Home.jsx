import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import ProductCategories from "../components/ProductCategoryContainer";
import "./Home.css";
import Billboard from "./../components/Billboard";
import {posters} from "../utils/posters";
import TopBar from './../components/TopBar';
import {useContext} from "react";
import {ShopContext} from "../shop-context/ShopState";
import CollectionsPlaceholder from "../components/CollectionsPlaceholder";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import OffCanvas from "../components/OffCanvas";
import CategoryList from "../components/CategoryList";
  

function Home() {
  const {collections} = useContext(ShopContext);
  
  return (
    <>
      <OffCanvas>
            <CategoryList/>
      </OffCanvas>
      <TopBar showToggler={false} useMobileSideNav={true} />
      
      <div className="landing">
          <ProductCategories />
          <Carousel />
      </div>

      <Billboard items={posters} />
     
      {collections.length>0
                         ?collections.map(({title,products,id})=> 
                                          <Collection title={title}
                                                      productsList={products}
                                                      key={id}/>)
                        :
                        <div>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                      </div>
       }

       <RecentlyViewedProducts/>
      
    </> 
  );
}

export default Home;
