import "./Home.css";
import {useContext} from "react";
import {posters} from "../utils/posters";
import TopBar from './../components/TopBar';
import OffCanvas from "../components/OffCanvas";
import Billboard from "./../components/Billboard";
import Collection from "../components/Collection";
import {ShopContext} from "../shop-context/ShopState";
import CategoryList from "../components/CategoryList";
import CollectionsPlaceholder from "../components/CollectionsPlaceholder";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import Landing from "./Landing";
  

function Home() {
  const {collections} = useContext(ShopContext);
  
  return (
    <>
      <OffCanvas><CategoryList/></OffCanvas>
      <TopBar showToggler={false} useMobileSideNav={true} />
      <Landing/>
      <Billboard items={posters} />
     
      {collections.length>0
                         ?collections.map(({title,products,id})=> 
                                          <Collection title={title}
                                                      productsList={products}
                                                      key={id}
                                                      id={id}
                                          />)
                        :
                        <>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                      </>
       }

       <RecentlyViewedProducts/>
      
    </> 
  );
}

export default Home;
