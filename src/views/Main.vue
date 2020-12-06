<template>
  <div class="Main">
    <div class="home">
      <!-- 侧边导航 -->
      <div class="side">
        <router-link to="/User">用户列表</router-link>
        <router-link to="/Data">数据获取</router-link>
      </div>
      <!-- 右边主体内容 -->
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.home {
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
}
.side {
  width: 200px;
  height: 100%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  margin-top: 25px;
}
.side a:link {
  color: black;
}
// .side a:visited {
//   color: #125da3;
// }
.side a:hover {
  color: #125da3;
}


.main {
  margin-left: 30px;
  width: 800px;
  height: 100%;
  background-color: #ffff;
}
</style>