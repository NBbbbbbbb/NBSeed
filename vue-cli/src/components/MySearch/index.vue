<template>
  <div class="outer">
    <MyHeader />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
export default {
  name: "MyHome",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style></style>
