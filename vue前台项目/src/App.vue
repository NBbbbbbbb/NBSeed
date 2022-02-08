<template>
  <div id="app">
    <Header />
    <br />
    <router-view></router-view>
    <br />
    <Footer v-show="!$route.meta.isShow" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.getNevValue();
  },
  methods: {
    getNevValue() {
      this.$store.dispatch("getNevValue");
    },
  },
};
</script>

<style>
</style>
