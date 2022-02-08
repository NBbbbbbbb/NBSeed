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

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    console.log(this);
  }
};
</script>

<style lang="less" scoped>

</style>
