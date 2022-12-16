import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import ProductsList from "./pages/ProductsList";
import { ShopContext} from "./shop-context/ShopState"
import cartService from "./services/cartService";
import CheckOut from "./pages/Checkout";
import { toast, ToastContainer } from 'react-toastify';
import jwtDecode from "jwt-decode"
import {useState,useEffect} from"react"
import "react-toastify/dist/ReactToastify.css";
import getCollections from "./services/collectionsService";
import productsService from './services/productsService';



function App() {
  const [collections,setCollections] = useState([])
  const [cartNumber,setCartNumber] =  useState(0)
  const [products,setProducts] = useState([])
  const [cartProducts,setCartProducts] = useState([])
  const [showOrderProducts,setShowOrderProducts] = useState(false)
  const [user,setUser]=useState({username:"",authenticated:false})
  const jwt = localStorage.getItem("token")
  const cartId = localStorage.getItem("cartId")

  const getCartProducts = async ()=>{
    try {
     if (cartId !== null) {
       const response = await cartService.getCartProducts(cartId)
       const{results}=response.data
       setCartProducts(results)
     }
    } catch (error) {}
   }

   const getProductCollections = async()=>{
    try {
        const  response = await getCollections()
        const{results}=response.data
        setCollections(results)
    } catch (error) {}
    
   }
   

   const getSiteProducts = async() => {
    try {
      const  response = await productsService.getProducts()
      const{results}=response.data
      setProducts(results)
  } catch (error) {}
  
   }
  
  useEffect(() => {
    try {
      const {user_id} = jwtDecode(jwt)
      setUser({username:user_id,authenticated:true})
    } catch (error) {}
  
    getCartProducts()
    setCartNumber(cartProducts.length)
    getProductCollections()
    getSiteProducts()

  },[cartProducts.length]);
 
  return (
    <div className="App">
      <ShopContext.Provider value={{cartNumber,setCartNumber,
                                    user,setUser,cartProducts,
                                     setCartProducts,showOrderProducts,
                                     setShowOrderProducts,collections,
                                     setCollections,products,setProducts,cartId}}>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/checkout"  element={<CheckOut/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </ShopContext.Provider>
      <ToastContainer />
    
    </div>
  );
}

export default App;
