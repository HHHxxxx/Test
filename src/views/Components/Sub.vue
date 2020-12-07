<template>
  <div class="sub">
    <div class="submen">
      <span>子菜单名:  </span>
      <span v-for="(item, index) in breadList" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
.sub {
  width: 240px;
  height: 40px;
  background-color: #125da3;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffff;
  font-size: 18px;
  text-align: center;
  margin-left: 120px;
}
.submen{
    margin-left: 45px;
}
</style>

<script>
export default {
  // 初始化数据对象
  data() {
    return {
      breadList: [],
    };
  },
  // 监听属性
  watch: {
    // 监听路由
    $route(val) {
      console.log(val, "valvalvalvalvalvalval");
      // 调用获取路由数组方法
      this.getBreadList(val);
    },
  },
  // 自定义事件
  methods: {
    /**
     * @description 获取路由数组
     * @params val 路由参数
     * @author tw
     */
    getBreadList(val) {
      this.breadList = [];
      // 过滤路由matched对象
      if (val.matched) {
        let matched = val.matched.filter(
          (item) => item.meta && item.meta.title
        );
        console.log(matched, "面包屑导航");
        // 拿到过滤好的路由v-for遍历出来
        //this.breadList = matched;
        for (var i = 0; i < matched.length; i++) {
          if (matched[i].meta.parentTitle) {
            this.breadList.push(matched[i].meta.parentTitle);
          }
          this.breadList.push(matched[i].meta.title);
        }
      }
    },
  },
};
</script>