import axios from 'axios'


export function signup({commit},data) {

    var username = data.user
    var password = data.password
    var mail = data.email

    console.log("action signup() appelée");
    axios.post("http://138.68.74.39/api/register?name="+username+"&email="+mail+"&password="+password)
      .then(function (response) {
        // handle success
        console.log(response)
        commit("setToken", response.data.token);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

  export function login({commit}, data) {
      var password = data.password;
      var mail = data.email;

      axios.post('http://138.68.74.39/api/login?email='+mail+'&password='+password).then(function (response){
        commit('setToken', response.data.token);
        commit('signin', response.data);
        commit('userConnected', mail);
        console.log("ok");
      }).catch(function(error){
        console.log(error);
      });
  }

  export function showUser({commit}) {

    axios.get("http://138.68.74.39/api/user").then(function (response) {
      commit('getUser', response.data)
    })
    .catch(function(error){
      console.log(error);
    });
  }