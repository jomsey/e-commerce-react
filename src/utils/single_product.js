import { products } from "./sample_products";
import axios from "axios"


const getProduct = async (product_name)=>{
    try {
      const  response=await axios.get(`${apiEndPoint}/products/`);
      const {results} =response.data
      return  results.filter(item=>item.name===product_name)
    
    } catch (error) {
       console.log(error)
    }

  }


export default getProduct