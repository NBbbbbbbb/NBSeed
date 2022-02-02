<template>
  <div id="app">
    <MyHome />
    <MySearch />
  </div>
</template>

<script>
import MyHome from "./components/MyHome";
import MySearch from "./components/MySearch";

export default {
  name: "App",
  components: {
    MyHome,
    MySearch,
  },
};
</script>

<style></style>
