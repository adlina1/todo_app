import axios from "axios";

export function signup({ commit }, data) {
  var username = data.user;
  var password = data.password;
  var mail = data.email;

  console.log("action signup() appelée");
  axios
    .post(
      "http://138.68.74.39/api/register?name=" +
        username +
        "&email=" +
        mail +
        "&password=" +
        password
    )
    .then(function(response) {
      // handle success
      console.log(response);
      commit("setToken", response.data.token);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

/**
 * se connecté
 * @param {} param0 
 * @param {*} data 
 */
export function login({ commit }, data) {
  axios
  .post('http://138.68.74.39/api/login?email='+data['email']+'&password='+data['password'])
  .then(response => {commit("setToken", response.data["token"]);
    axios
    .get('http://138.68.74.39/api/user', {headers: {'Authorization': 'Bearer '+response.data["token"]}})
    .then(response => {commit("set_info_user", response.data);}
  )})
}

