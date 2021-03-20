
export function setToken(state, data){
  console.log("set token called");
  state.token = data; // data: response.data.token
}

export function signin(state, data) {
  console.log(data);
  state.token = data.token // data: response.data
}