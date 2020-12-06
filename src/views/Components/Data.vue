<template>
  <div class="data">
    <h3>我是数据获取界面</h3>
  </div>
  <!-- <ul>
    <li
      :class="[index == status ? 'bechoice' : '']"
      v-for="(item, index) in list"
      :key="index"
      @click="choice(index)"
    >
      {{ item.text }}
    </li>
  </ul> -->
</template>
<script>
export default {
  name: "Recharge",
  data() {
    return {
      status: 0,
      list: [
        { text: "热点" },
        { text: "政治" },
        { text: "娱乐" },
        { text: "新闻" },
        { text: "军事" },
        { text: "体育" },
      ],
    };
  },
  methods: {
    choice(index) {
      this.status = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.data {
  margin-left: 50px;
  margin-top: 20px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
li {
  width: 200px;
  height: 30px;
  background: #eeeeee;
  color: #000;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
}
.bechoice {
  background: red;
  color: #eeeeee;
}
</style>