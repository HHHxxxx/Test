<template>
  <div class="top">
    <div class="navtext">
      <a href="">会员登录(旧版入口)</a>
      <a href="">入会申请</a>
      <a href="">会员登录</a>
    </div>
    <div class="search">
      <div>
        <Sub></Sub>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="请输入关键字搜索" />
        <button><i class="iconfont icon-search"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
import Sub from "../views/Components/Sub.vue";
export default {
  components: {
    Sub,
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 1000px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.navtext a {
  text-decoration: none;
  color: #0069d6;
  margin-left: 20px;
  float: right;
  font-size: 14px;
}

/* 搜索栏 */
.search {
  margin-top: 20px;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search button {
  width: 60px;
  height: 40px;
  border: 1px solid #125da3;
  background-color: #125da3;
}

.search input {
  outline: none;
  height: 40px;
  width: 300px;
  border: 1px solid #125da3;
  background-color: #eaf4fd;
  font-size: 14px;
}
.iconfont {
  color: #ffff;
}
</style>