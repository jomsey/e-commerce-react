function cartItemsCount(state = { count: 1 }, action) {
  switch (action.type) {
    case "CART_NUMBER_INCREASE":
      return state.count + 1;

    case "CART_NUMBER_DECREASE":
      return state.count - 1;

    default:
      return state;
  }
}

export default cartItemsCount;
