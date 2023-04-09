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
import PrivateRoute from "./tools/PrivateRoute";
import ProductsList from "./pages/ProductsList";
import { Routes, Route } from "react-router-dom";
import cartService from "./services/cartService";
import CreateAccount from "./pages/CreateAccount";
import ProductDetails from "./pages/ProductDetails";
import { ShopContext} from "./shop-context/ShopState"
import getCollections from "./services/collectionsService";
import UserAuthenticated from "./tools/UserAuthenticated";
import OrderSuccess from "./pages/OrderSuccess";



function App() {
  const [cartItemsLoading,setCartItemsLoading] = useState(true)
  const {token,setToken}=useToken()
  const [orderItems,setOrderItems] = useState([])
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
  const [categoryName,setCategoryName] = useState(null)
  const [cartTotalPrice,setCartPriceTotal] = useState(0)
  const [productsLoading,setProductsLoading]=useState(true)
  const [mobileOffCanvasOpen,setMobileOffCanvasOpen]=useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [alertMessage,setAlertMessage] = useState(null)

  
 
useEffect(()=>{
   const getProductCollections = async()=>{
          try {
              const  response = await getCollections()
              const{results}=response.data
              setCollections(results)
          } catch (error) {}
   }
       getProductCollections()

},[])



useEffect(()=>{

  //logout  user when the auth token is expired
   try {
        const {user_id,exp:tokenExpiryDate} = jwtDecode(token)
        if(tokenExpiryDate<Date.now())setUser(prev=>({...prev,username:user_id,is_authenticated:true}));

        else{
              setToken(null)
              setUser(prev=>({...prev,username:null,is_authenticated:false}))
        }
      
   } catch (error) {
           setUser(prev=>({...prev,username:null,is_authenticated:false}))
   }

 },[])
  
  useEffect(() => {
    //create new cart else get cart products
     const getCartProducts = async ()=>{
        
          if (cartId === null){
             try {
                  const response = await cartService.createCart();
                  localStorage.setItem("cartId",response.data.cart_uuid);
              } catch (error) {}
          }
      

        if (cartId !== null) {
            try {
              const {status,data} = await cartService.getCartProducts(cartId);
              setCartProducts(data.results);
              if(status === 200)setCartItemsLoading(false);
            } catch (error) {}
        }

    }
    getCartProducts()
    setCartNumber(prev=>(prev=cartProducts.length))

  },[cartProducts.length]);
 
 

  return (
    <div className="App">
      <ShopContext.Provider value={{
                                     setProductsCount,
                                     priceRange,setPriceRange,
                                     user,setUser,cartProducts,
                                     searchQuery,setSearchQuery,
                                     currentPage,setCurrentPage,
                                     cartTotalPrice,setCartPriceTotal,
                                     setShowOrderProducts,collections,
                                     setCartProducts,showOrderProducts,
                                     cartItemsLoading,setCartItemsLoading,
                                     productsCount,cartNumber,setCartNumber,
                                     setCollections,products,setProducts,cartId,
                                     productsResultsName,setProductsResultsName,
                                     categoryName,setCategoryName,orderItems,setOrderItems,alertMessage,setAlertMessage,
                                     productsLoading,setProductsLoading,mobileOffCanvasOpen,setMobileOffCanvasOpen
                                    }}>
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-success" element={<OrderSuccess/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="*" element={<NotFound />} />

          <Route path="/auth/login" 
                 element={<UserAuthenticated user={user}>
                             <Login />
                          </UserAuthenticated>} />

          <Route path="/checkout" 
                 element={
                      <PrivateRoute user={user}>
                        <CheckOut/>
                      </PrivateRoute>}/>
                        
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
    
    </div>
  );
}

export default App;