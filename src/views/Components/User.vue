<template>
  <v-row class="user">
    <v-col cols="12">
      <h3>张三 33</h3>
    </v-col>
    <v-col>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <ul>
            <li>今天吃了啥</li>
            <li>明天吃啥？</li>
            <li>后天吃啥？</li>
          </ul>
        </v-tab-item>
        <v-tab-item>
          <ul>
            <li>张三</li>
            <li>李四</li>
            <li>刘武</li>
          </ul>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: ["博客列表", "朋友列表"],
    };
  },
};
</script>
<style lang="scss" scoped>
.user {
  margin-left: 50px;
  margin-top: 20px;
}
li{
    list-style-type: none;
    margin-top: 15px;
}
</style>