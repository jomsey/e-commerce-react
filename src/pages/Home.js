import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import ProductCategories from "../components/ProductCategoryContainer";
import { products } from "./../utils/sample_products";
import "./Home.css";
import Billboard from "./../components/Billboard";
import { posters } from "../utils/posters";
function Home() {
  return (
    <>
      <ProductCategories />
      <Carousel />
      <Billboard items={posters} />
      <Collection title={"New This Year"} productsList={products} />
      <Collection title={"Editor's choice"} productsList={products} />
      <Collection title={"Brand New Day"} productsList={products} />
    </>
  );
}

export default Home;
