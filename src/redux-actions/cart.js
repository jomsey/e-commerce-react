export function increaseCartItemsNumber() {
  return {
    type: "CART_NUMBER_INCREASE",
  };
}

export function decreaseCartItemsNumber(){
    return{
        type:"CART_NUMBER_DECREASE",
    }
}
