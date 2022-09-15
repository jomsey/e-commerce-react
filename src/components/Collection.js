import "./Collection.css";
import ProductCard from "./ProductCard";

function showAllProducts(collection) {
  console.log(collection, " clicked");
}

function Collection({ title, productsList }) {
  return (
    <div className="collection">
      <div className="collection-top">
        <h3 className="title">{title}</h3>
        <h4 onClick={() => showAllProducts(title)}>SEE ALL</h4>
      </div>
      <div className="collection-container">
        {productsList.slice(0, 5).map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            discount={product.discount}
            image={product.image}
            key={product.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Collection;
