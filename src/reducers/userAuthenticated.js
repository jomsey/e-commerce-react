function userAuthenticated(state = { authenticated: false }, action) {
  switch (action.type) {
    case "USER_AUTHENTICATED":
      return (state.authenticated = true);
    default:
      return state;
  }
}

export default userAuthenticated;
