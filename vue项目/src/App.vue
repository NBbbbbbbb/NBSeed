<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <br />
    <Footer v-show="!$route.meta.FooterIsShow" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    console.log(this);
    this.getCategoryList();
  },
  methods: {
    ...mapActions(["getCategoryList"]),
  },
};
</script>

<style lang="less" scoped>
</style>
