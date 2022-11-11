import { useState, useEffect ,useContext} from "react";
import "./OrderProducts.css";
import Icon from './../ui/Icon';
import { ShopContext } from "../shop-context/ShopState";
import OrderedProduct from './OrderedProduct';


export default function OrderProducts({ showItems, productsList }) {
  const [canvasClass, setCanvasClass] = useState("");
  const {setShowOrderProducts} = useContext(ShopContext)
  useEffect(() => {
    showItems
      ? setCanvasClass("orders-off-canvas-visible")
      : setCanvasClass("orders-off-canvas-hidden");
  }, [canvasClass, showItems]);
 
  return <div className={`canvas ${canvasClass}`}>
    <Icon iconName={"times"} extra={"close-icon"} onIconClick={()=>setShowOrderProducts(false)}/>

    <OrderedProduct/>
    <OrderedProduct/>
    <OrderedProduct/>
  </div>;
}
