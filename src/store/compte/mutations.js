export function setToken(state, data) {
  console.log("set token called");
  state.token = data; // data: response.data.token
  // localStorage.setItem("token", data);
}


export function set_info_user(state,data){
  state.user["email"]=data["email"]
  state.user["name"]= data["name"]
  state.user["ident"]=data["id"]
}

export function logOutUser(state){
  state.token = null,
  state.user =null
}
