import Home from "./pages/Home";
import Login from "./pages/Login";
import jwtDecode from "jwt-decode"
import CheckOut from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import {useState,useEffect} from"react"
import Footer from "./components/Footer";
import CartDetails from "./pages/CartDetails";
import useToken from "./customHooks/useToken";
import UserProfile from "./pages/UserProfile";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./tools/PrivateRoute";
import {ToastContainer } from 'react-toastify';
import ProductsList from "./pages/ProductsList";
import { Routes, Route } from "react-router-dom";
import cartService from "./services/cartService";
import CreateAccount from "./pages/CreateAccount";
import ProductDetails from "./pages/ProductDetails";
import { ShopContext} from "./shop-context/ShopState"
import productsService from './services/productsService';
import getCollections from "./services/collectionsService";
import UserAuthenticated from "./tools/UserAuthenticated";


function App() {
  const {token,setToken}=useToken()
  const [products,setProducts] = useState([])
  const cartId = localStorage.getItem("cartId")
  const [priceRange,setPriceRange]= useState({})
  const [cartNumber,setCartNumber] =  useState(0)
  const [searchQuery,setSearchQuery] = useState("")
  const [collections,setCollections] = useState([])
  const [cartProducts,setCartProducts] = useState([])
  const [productsCount,setProductsCount] = useState(0)
  const [showOrderProducts,setShowOrderProducts] = useState(false)
  const [productsResultsName,setProductsResultsName] = useState("")
  const [user,setUser]=useState({username:null,is_authenticated:false})
 


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
      const{results,count}=response.data
      setProducts(results)
      setProductsResultsName("all")
      setProductsCount(prev=>prev=count)
  } catch (error) {}
  
   }
 useEffect(()=>{
   try {
     const {user_id,exp:tokenExpiryDate} = jwtDecode(token)
     if(tokenExpiryDate<Date.now()){
       setUser(prev=>({...prev,username:user_id,is_authenticated:true}))
     }
     else{
      setToken(null)
      setUser(prev=>({...prev,username:null,is_authenticated:false}))
     }
   
  
   } catch (error) {
    setUser(prev=>({...prev,username:null,is_authenticated:false}))
   }

 },[])
  
  useEffect(() => {
    getCartProducts()
    setCartNumber(prev=>(prev=cartProducts.length))
    getProductCollections()
    getSiteProducts()

  },[cartProducts.length]);
 

  return (
    <div className="App">
      <ShopContext.Provider value={{
                                     setProductsCount,
                                     priceRange,setPriceRange,
                                     user,setUser,cartProducts,
                                     searchQuery,setSearchQuery,
                                     setShowOrderProducts,collections,
                                     setCartProducts,showOrderProducts,
                                     productsCount,cartNumber,setCartNumber,
                                     setCollections,products,setProducts,cartId,
                                     productsResultsName,setProductsResultsName,
                                    }}>
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/auth/login" 
                 element={<UserAuthenticated user={user}>
                             <Login />
                          </UserAuthenticated>} />
          <Route path="/checkout" 
                 element={<PrivateRoute user={user}>
                             <CheckOut/>
                         </PrivateRoute>} /> 

          <Route path="/profile"
                 element={<PrivateRoute user={user}>
                                <UserProfile/>
                             </PrivateRoute>} />
          <Route path="/auth/register"
                 element ={<UserAuthenticated user={user}>
                            <CreateAccount/>
                        </UserAuthenticated>}/>
      </Routes>
      
      <Footer />
      </ShopContext.Provider>
    {/* <ToastContainer /> */}
    
    </div>
  );
}

export default App;