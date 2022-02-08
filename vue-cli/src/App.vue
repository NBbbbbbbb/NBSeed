<template>
  <div>
    <Header />
    <Navtype/>
    <router-view></router-view>
    <br />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Headers/index.vue";
import Footer from "./components/Footer/index.vue";
import Navtype from "./components/Navtype/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Navtype
  }
};
</script>

<style>
</style>
