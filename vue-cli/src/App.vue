<template>
  <div>
    <Header />
    <hr />
    122
    <router-view></router-view>
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Headers/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
