<template>
  <v-app>
    <div class="container">
      <!-- <Header></Header> -->
      
      <div class="nav">
        <Header></Header>
      </div>

      <div class="navbar">
        <Navbar></Navbar>
      </div>

      <div class="Home">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
// import Header from "./views/Header";
import Header from "./views/Nav";
import Navbar from "./views/Navbar";
export default {
  components: {
    Header,
    Navbar,
  },
};
</script>container

<style scoped>
.container {
  background-color: #f4f4f4;
  min-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 顶栏布局 */
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>