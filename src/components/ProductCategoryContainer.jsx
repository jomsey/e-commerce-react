import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import "./ProductCategoryContainer.css";
import React from "react"


export default function ProductCategories() {
  const [canvasOpen,setCanvasOpen] = React.useState(true)

  const HandleCloseCanvas=()=>{
    canvasOpen?setCanvasOpen(false):setCanvasOpen(true)
 }
  return (
    <div className={canvasOpen?"categories-container":"categories-container close-categories-canvas"}>
      <span className="close-btn" onClick={HandleCloseCanvas}></span>
      <CategoryList />
      <SubCategoryList />
    </div>
  );
}
