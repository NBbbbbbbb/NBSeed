<template>
  <div>
    <Header />
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
