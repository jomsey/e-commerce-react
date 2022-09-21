import React from "react";
import "./CategoryList.css";
import { categories } from "./../utils/product_categories";
import ListItem from "./../ui/ListItem";

function HandleItemClick(item) {
  // redirect to category page
  console.log(item);
}

function HandleItemMouseHover(item) {
  console.log(item);
}

function CategoryList() {
  return (
    <div className="categories">
      {categories.map((category) => (
        <ListItem
          key={category.name}
          icon={category.icon}
          itemStyle={"category-item"}
          text={category.name}
          onItemClick={() => HandleItemClick(category)}
          onItemMouseOver={() => HandleItemMouseHover(category)}
        />
      ))}
    </div>
  );
}

export default CategoryList;
