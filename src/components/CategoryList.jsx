import React from "react";
import "./CategoryList.css";
import ListItem from "./../ui/ListItem";
import { useNavigate} from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";
import { categories } from "./../utils/product_categories";
import productsService from "../services/productsService";


function CategoryList() {
      const {setProducts,setProductsCount,setProductsResultsName,setCategoryName,productsLoading,setProductsLoading} = React.useContext(ShopContext)
      const navigate = useNavigate()
      
      const HandleItemClick=async(name)=> {
            navigate("/products")
            setProductsLoading(true)
        
            //get products for specific category name , else return full products list
            const response  = name === "All products"?
                              await productsService.getProducts():
                              await productsService.getCategoryProducts(name);
            
            const{results,count,status}=response.data
            
            if (status === 200){
                setCategoryName(name)
                setProducts(results)
                setProductsResultsName("category")
                setProductsCount(count)
              }
             setProductsLoading(false)
      }
      
      function HandleItemMouseHover(item) {
           //TO-DO
      }

      return (
        <div className="categories">
          {categories.map(({id,name,icon}) => (
          
              <ListItem
                  key={id}
                  icon={icon}
                  itemStyle={"category-item"}
                  text={name}
                  onItemClick={() => HandleItemClick(name)}
                  onItemMouseOver={() => HandleItemMouseHover(name)}
                />
            
          ))}
        </div>
      );
}

export default CategoryList;
