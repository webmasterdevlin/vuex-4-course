<template #default>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="my-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./shared/components/Navbar";
export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
/* @import "../node_modules/bootstrap-icons"; */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
