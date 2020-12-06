<template>
  <div class="navbar">
    <div class="Skip">
      <div class="home">
        <router-link to="/Home">网站首页</router-link>
      </div>
      <div class="dropdown">
        <button class="dropbtn">关于协会</button>
        <div class="dropdown-content">
          <router-link to="/Home">协会简介</router-link>
          <router-link to="/Main">协会章程</router-link>
          <router-link to="/Home">协会动态</router-link>
          <router-link to="/Main">专家智库</router-link>
        </div>
      </div>
      <div class="home">
        <router-link to="/Home">会议动态</router-link>
      </div>
      <div class="home">
        <router-link to="/Home">会员服务</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background-color: #125da3;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.Skip {
  width: 1000px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-content: center;
}
/*导航*/

.home {
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home a {
  text-decoration: none;
  color: #ffff;
  font-size: 18px;
}

/* 覆盖效果 */
.home:visited {
  background-color: #0081c2;
}

.home:hover {
  background-color: #0081c2;
  width: 120px;
  height: 60px;
}

/* 下拉菜单 */
.dropbtn {
  outline: none;
  background-color: #125da3;
  width: 120px;
  height: 60px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: #ffff;
}

/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
  position: relative;
  display: inline-block;
}

/* 下拉内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #125da3;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

/* 下拉菜单的链接 */
.dropdown-content a {
  color: #ffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 18px;
  text-align: center;
}

/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {
  background-color: #0081c2;
}

/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #0081c2;
}
</style>