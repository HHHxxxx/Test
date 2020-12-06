<template>
  <v-app>
    <div class="container">
      <!--顶栏导航+搜索-->
      <div class="nav">
        <Header></Header>
      </div>
      <!--导航栏-->
      <div class="navbar">
        <Navbar></Navbar>
      </div>
      <!--导航栏-->
      <!-- <div class="Main-body">
        <div class="main">
          <router-view></router-view>
        </div>
      </div> -->
      <div class="Home">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
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
/* 主体内容 */
/* .Main-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main{
  margin-top: 20px;
  width: 1000px;
  height: 800px;
  background-color: #ffff;
} */
</style>