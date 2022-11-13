import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import "./ProductCategoryContainer.css";

export default function ProductCategories() {
  return (
    <div className="categories-container">
      <CategoryList />
      <SubCategoryList />
    </div>
  );
}
