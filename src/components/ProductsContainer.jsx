import ProductCard from "../components/ProductCard";

const ProductsContainer = ({products}) => {
    return ( 
        <div className="products-list-container">
        {
        products.map((product) => (
          <ProductCard
             product={product}
             key={product.id}
             onItemAddToCart={()=>HandleAddIconToCart(product)}
          />
        ))
      }
      </div>
    );
}

export default ProductsContainer;