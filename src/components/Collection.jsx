import "./Collection.css";
import ProductCard from "./ProductCard";

 
function Collection({ title, productsList,showLink=true }) {
    return (
        <div className="collection">
            <div className="collection-top">
                <h3 className="title">{title}</h3>
                 {showLink &&  <h5>SEE ALL</h5>}
            </div>

            <div className="collection-container">
                {productsList.slice(0,10).map((product) => (
                    <ProductCard 
                        product={product}
                        key={product.id}/>
                ))}
            </div>
        </div>
    );
}

export default Collection;
