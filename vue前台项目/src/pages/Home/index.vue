<template>
  <div>
    <NevType />
    <List />
    <Recommend />
    <Rank />
    <Like />
    <Floor  v-for="item in floor" :key="item.id"  :floor="item"/>
    <Brand />
  </div>
</template>

<script>
import List from "@/pages/Home/List";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Recommend from "@/pages/Home/Recommend";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: { List, Rank, Like, Recommend, Floor, Brand },
  mounted() {
    this.getFloor();
  },
  methods: {
    ...mapActions(["getFloor"]),
  },
  computed: {
    ...mapState({
      floor: (state) => state.Mock.floor,
    }),
  },
};
</script>

<style>
</style>