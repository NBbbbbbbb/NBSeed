<template>
  <div>
    <List />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(item,index) in floor" :floor="item" :key="index" />
    <Brand />
  </div>
</template>

<script>
import List from "./List/index";
import Recommend from "./Recommend/index";
import Rank from "./Rank/index";
import Like from "./Like/index";
import Floor from "./Floor/index";
import Brand from "./Brand/index";

export default {
  name: "Home",
  components: {
    List,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
};
</script>

<style lang="less" scoped>
</style>