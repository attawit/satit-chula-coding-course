<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ocean-comp v-if="false"> </ocean-comp>
    <v-for-comp v-if="true"> </v-for-comp>
    <profile-comp></profile-comp>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import OceanComp from "./components/OceanComp.vue";
import VForComp from "./components/VForComp.vue";
import ProfileComp from "./components/ProfileComp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    OceanComp,
    VForComp,
    ProfileComp,
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
