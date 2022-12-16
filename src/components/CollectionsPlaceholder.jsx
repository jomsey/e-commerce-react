import "./CollectionsPlaceholder.css";
import ProductPlaceholderCard from "./ProductPlaceholderCard";


const CollectionsPlaceholder = () => {
    return (
        <div className="collection collection-placeholder">
        <div className="collection-top">
          <span className="title block bg-place"></span>
          <span className="collection-link block bg-place"></span>
        </div>
        <div className="collection-container">
         <ProductPlaceholderCard/>
         <ProductPlaceholderCard/>
         <ProductPlaceholderCard/>
         <ProductPlaceholderCard/>
         <ProductPlaceholderCard/>
        </div>
      </div>
    );
}

export default CollectionsPlaceholder;
