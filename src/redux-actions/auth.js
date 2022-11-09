export default function userAuthenticated() {
  return {
    type: "USER_AUTHENTICATED",
    payload:{
      user:{},
      authenticated:false
    }
  };
}
