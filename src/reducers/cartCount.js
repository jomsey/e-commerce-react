function cartItemsCount(state = { count: 0 }, action) {
  if (action.type === "CART_NUMBER_INCREASE") return state.count + 1;
  if (action.type === "CART_NUMBER_DECREASE") return state.count + 1;
  return state;
}

export default cartItemsCount;
