import "./Collection.css";
import ProductCard from "./ProductCard";
import { ShopContext} from "../shop-context/ShopState"
import {useContext} from "react"

 


function Collection({ title, productsList }) {
   const {cartProducts,setCartProducts} = useContext(ShopContext);

   function HandleAddIconToCart(product){
    setCartProducts([...new Set([...cartProducts,product])])
}

  return (
    <div className="collection">
      <div className="collection-top">
        <h3 className="title">{title}</h3>
        <h4>SEE ALL</h4>
      </div>
      <div className="collection-container">
        {productsList.slice(0, 5).map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            discount={product.discount}
            image={product.image}
            key={product.id}
            onItemAddToCart={()=>HandleAddIconToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Collection;
