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
import UserAuthenticated from "./tools/UserAuthenticated";
import OrderSuccess from "./pages/OrderSuccess";
import About from "./pages/About";
import collectionsService from "./services/collectionsService";




function App() {
  const {token,setToken}=useToken()
  const [username,setUsername] = useState(null)
  const [category,setCategory] = useState("")
  const [subCategory,setSubCategory] = useState("")
  const [products,setProducts] = useState([])
  const cartId = localStorage.getItem("cartId")
  const [priceRange,setPriceRange]= useState({})
  const [cartNumber,setCartNumber] =  useState(0)
  const [orderItems,setOrderItems] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [searchQuery,setSearchQuery] = useState("")
  const [collections,setCollections] = useState([])
  const [cartProducts,setCartProducts] = useState([])
  const [productsCount,setProductsCount] = useState(0)
  const [alertMessage,setAlertMessage] = useState(null)
  const [categoryName,setCategoryName] = useState(null)
  const [cartTotalPrice,setCartPriceTotal] = useState(0)
  const [isMobilePhone,setIsMobilePhone] = useState(false)
  const [productsLoading,setProductsLoading]=useState(true)
  const [cartItemsLoading,setCartItemsLoading] = useState(true)
  const [showOrderProducts,setShowOrderProducts] = useState(false)
  const [productsResultsName,setProductsResultsName] = useState("")
  const [mobileOffCanvasOpen,setMobileOffCanvasOpen]=useState(false)
  const [user,setUser]=useState({username:null,is_authenticated:false})
  const [productCardContainerWidth,setProductCardContainerWidth]=useState(null);

  
useEffect(()=>window.screen.width<=480?setIsMobilePhone(true):setIsMobilePhone(false))//always show toggler button on mobile screens

 
useEffect(()=>{
   const getProductCollections = async()=>{
          try {
              const  response = await collectionsService.getCollections()
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
            } catch (error) {
              setCartItemsLoading(false)
            }
            
          }
          setCartItemsLoading(false)

    }
    getCartProducts()
    setCartNumber(cartProducts.length,cartTotalPrice)
    

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
                                     cartItemsLoading,setCartItemsLoading,subCategory,setSubCategory,
                                     productsCount,cartNumber,setCartNumber,username,setUsername,
                                     setCollections,products,setProducts,cartId,productCardContainerWidth,setProductCardContainerWidth,
                                     productsResultsName,setProductsResultsName,isMobilePhone,setIsMobilePhone,
                                     categoryName,setCategoryName,orderItems,setOrderItems,alertMessage,setAlertMessage,
                                     productsLoading,setProductsLoading,mobileOffCanvasOpen,setMobileOffCanvasOpen,category,setCategory
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
                             </PrivateRoute>} 
                             />
                             
          <Route path="/auth/register"
                 element ={<UserAuthenticated user={user}>
                            <CreateAccount/>
                        </UserAuthenticated>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    
      </ShopContext.Provider>
    
    </div>
  );
}


function getCartItemsTotalNumber(cart){
         if(cart.length>0){
              let productsCounts = []
              cart.forEach(({product_count} )=>productsCounts.push(product_count));
              return productsCounts.reduce((m,n)=>m+n,0)
         }
         return 0;
}
      
 export default App;


