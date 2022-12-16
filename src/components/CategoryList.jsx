import React from "react";
import "./CategoryList.css";
import { categories } from "./../utils/product_categories";
import ListItem from "./../ui/ListItem";
import { Link } from "react-router-dom";


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
        <Link to="/products">
          <ListItem
              key={category.name}
              icon={category.icon}
              itemStyle={"category-item"}
              text={category.name}
              onItemClick={() => HandleItemClick(category)}
              onItemMouseOver={() => HandleItemMouseHover(category)}
            />
          </Link>
      ))}
    </div>
  );
}

export default CategoryList;
