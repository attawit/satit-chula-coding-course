<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link>
    </div>
    <router-view ></router-view>
    <!-- <hello-world msg="Welcome to Your Vue.js App" />
    <v-for-comp v-if="true"></v-for-comp> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import VForComp from "./components/VForComp.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // VForComp,
  },
  created() {
    this.$router.push("/list");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
