<template>
  <div class="data">
    <span>
      id+姓名 :33，{{name}}
    </span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    getlist() {
      axios.get("/api/orion/webflux/test/33").then(this.getlistInfo);
    },
    getlistInfo(res) {
      console.log("axios数据请求结果", res);
      this.name = res.data.result.name;
      console.log("lists数据", this.lists);
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>
<style lang="scss" scoped>
.data {
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
}
</style>