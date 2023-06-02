import "./OrderProducts.css";
import Icon from './../ui/Icon';
import OrderedProduct from './OrderedProduct';
import { useState, useEffect ,useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";


export default function OrderProducts({ showItems, productsList }) {
        const [canvasClass, setCanvasClass] = useState("");
        const {setShowOrderProducts} = useContext(ShopContext)

        useEffect(() => {
            showItems ? setCanvasClass("orders-off-canvas-visible"):setCanvasClass("orders-off-canvas-hidden");

        }, [canvasClass, showItems]);

        return(
             <div className={`canvas ${canvasClass}`}>
                   <Icon iconName={"times"} extra={"close-icon"} onIconClick={()=>setShowOrderProducts(false)}/>
                   {productsList.map(({product,product_uuid})=><OrderedProduct key={product_uuid} product={product}/>)}
            </div>
        );
}
