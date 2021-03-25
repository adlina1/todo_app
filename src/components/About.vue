<template>
  <div>

    <div class="about">
    <h1>About</h1>
  </div>

  <div class="description">
    <p>
      This project dealed with the creation of a web application of ToDo List as
      part of the last year of Computer Science Bachelor's Degree. There is a
      register part as well as a login part in order to access to the main
      funcionalities of this application, e.g.
      <u>create</u>-<u>delete</u>-<u>modify</u>-<u>display</u> ToDo lists and
      ToDos. Call to an external API have been made.
      <a
        href="https://documenter.getpostman.com/view/570147/TVRrU4GY#44246617-db27-4910-82d5-bbcd598ced4d"
        target="_blank"
        >Documentation there.</a
      >
    </p>
  </div>

  <div class="Us">
    <h3><b>Team</b></h3>
    <ul class="list">
      <li>Amayes MEZINE</li>
      <li>Mohamed CAMARA</li>
      <li>Adrien LINARES</li>
      <li>Amadou KEITA</li>
      <li>Aboubacar CAMARA</li>
    </ul>
       <p>token : {{ myToken }}</p>
        <p>user : {{ getUser }} </p>
  </div>

  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {

  computed:{
     ...mapGetters("compte", ["myToken","getUser"]),
  }
};

</script>

<style scoped>
.description {
  margin-top: 5%;
  font-size: 17px;
  align-content: center;
  padding-left: 60px;
  padding-right: 60px;
}

.Us {
  margin-top: 3%;
  font-size: 19px;
}
.list {
  color: rgb(27, 44, 71);
}
li {
  margin-bottom: 15px;
}
</style>
