import "./Collection.css";
import ProductCard from "./ProductCard";

 
function Collection({ title, productsList }) {
    return (
        <div className="collection">
            <div className="collection-top">
                <h3 className="title">{title}</h3>
                <h4>SEE ALL</h4>
            </div>

            <div className="collection-container">
                {productsList.map((product) => (
                    <ProductCard 
                        product={product}
                        key={product.id}/>
                ))}
            </div>
        </div>
    );
}

export default Collection;
