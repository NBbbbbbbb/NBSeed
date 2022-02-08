<template>
  <div>
    <NavType />
    <List />
    <Recomment />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import List from "@/pages/Home/List/index.vue";
import Recomment from "@/pages/Home/Recomment/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";

export default {
  name: "Home",
  components: {
    List,
    Recomment,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style lang="less" scoped>
</style>