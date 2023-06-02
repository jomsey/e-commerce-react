import "./CategoryList.css";
import Icon from "../ui/Icon";
import React, { useState } from "react";
import ListItem from "./../ui/ListItem";
import { useNavigate} from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";
import { categories } from "./../utils/product_categories";
import productsService from "../services/productsService";


function CategoryList() {
      const [subCategoryList,setSubCategoryList] = useState([])
      const [subListVisible,setSubListVisible] = React.useState(true)
      const {setProducts,setProductsCount,isMobilePhone,
            setProductsResultsName,setCategoryName,setSubCategory,
            setProductsLoading,setCurrentPage,setMobileOffCanvasOpen,setCategory} = React.useContext(ShopContext)
      const navigate = useNavigate()
      let subListClasses =  subListVisible?"sub-list-container":"sub-list-container sub-list-container-hidden"
      

      const HandleItemClick=async(name)=> {
            setCurrentPage(1)//reset pagination to initial page
            setCategory(name)
            navigate("/products")
            setMobileOffCanvasOpen(false) //close sidebar nav if open
            setProductsLoading(true) // display loader 
            // window.document.title=`${siteName} | ${name}` //set the page title
            
            //get products for specific category name , else return full products lis
            const response  = name === "All products"?
                              await productsService.getProducts():
                              await productsService.getCategoryProducts(name);
            
            const{results,count}=response.data
        
            
            if (response.status === 200){
                setCategoryName(name)
                setProducts(results)
                setProductsResultsName("category")
                setProductsCount(count)
              }
             setProductsLoading(false)
      }
      
      function HandleItemMouseHover(item) {
           setSubListVisible(true) 
           setSubCategoryList([]) //empty previous content
           item.subCategories  && setSubCategoryList(item.subCategories)
      }

      const handleSubCategoriesItemClick = item =>{
        setSubCategory(item)
      }

    

      return (
        <div className="categories  main-categories">
          
          {categories.map((category) => (
              <div className={isMobilePhone?"category-item-container mobile-dropdown-expand":"category-item-container"}>
                <ListItem
                    key={category.id}
                    icon={category.icon}
                    itemStyle={category.subCategories?"category-item drop-down":"category-item"}
                    text={category.name}
                    onItemClick={() => HandleItemClick(category.name)}
                    handleMouseOver={() => HandleItemMouseHover(category)}
                    handleMouseOut={()=>setSubListVisible(false)}
                  />
                  <div className="mobile-drop-down"></div>
              </div>   
          ))}

          {subCategoryList.length>0 &&
          <div className={subListClasses}>
             <Icon 
                   iconName="chevron-down" 
                   extra="category-chevron"
                   onIconClick={()=>setSubListVisible(false)}/>
          {
            subCategoryList.map(({title,categories})=>
              <div className="sub-list-group">
                {title && <h5 className="sub-list-title">{title}</h5>}
                <div className="sub-list">
                     {categories.map(category => (
                        <ListItem
                             key={category}
                             itemStyle={"category-item"}
                             text={category}
                             onItemClick={() => handleSubCategoriesItemClick(category)}
                             handleMouseOver={() => null}

                         />
                       ))}
                 </div>
           </div>

          )}
      </div>} 

        </div>
      );
}

export default CategoryList;
