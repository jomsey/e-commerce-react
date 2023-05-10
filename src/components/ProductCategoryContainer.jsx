import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import "./ProductCategoryContainer.css";
import React from "react"


export default function ProductCategories() {
  
  return (
    <div className="categories-container">
      <CategoryList />
      <SubCategoryList />
    </div>
  );
}
