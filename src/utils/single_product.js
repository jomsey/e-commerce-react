import { products } from "./sample_products";

function getProduct(product_name){
 return  products.filter(item=>item.name===product_name)
}

export default getProduct