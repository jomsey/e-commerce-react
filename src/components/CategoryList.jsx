import React from "react";
import "./CategoryList.css";
import { categories } from "./../utils/product_categories";
import ListItem from "./../ui/ListItem";
import productsService from "../services/productsService";
import { ShopContext } from "../shop-context/ShopState";
import { useNavigate} from "react-router-dom";


function CategoryList() {
  const {setProducts,setProductsCount,setProductsResultsName,products} = React.useContext(ShopContext)
  const navigate = useNavigate()
  
  const HandleItemClick=async({name})=> {
    navigate("/products")

    const response  = name==="All products"?await productsService.getProducts():
                                            await productsService.getCategoryProducts(name);
    const{results,count}=response.data
    setProducts(results)
    setProductsResultsName("category")
    setProductsCount(count)
  }
  
  function HandleItemMouseHover(item) {
   
  }
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
