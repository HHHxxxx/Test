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
  width: 320px;
  height: 138px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
}
.side a {
  text-decoration: none;
  color: black;
  font-size: 18px;
  margin-top: 30px;
  margin-left: 30px;
}
.side a:link {
  color: #000000;
}
// .side a:visited {
//   color: #125da3;
// }
.side a:hover {
  color: #125da3;
}


.main {
  margin-left: 30px;
  width: 740px;
  height: 100%;
  background-color: #ffff;
}
</style>