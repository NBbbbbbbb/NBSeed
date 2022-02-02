<template>
  <div class="outer">
    <MyHeader />
    <MyTypeNav />
    <MyList />
    <MyRecommend />
    <MyRank />
    <MyLike />
    <MyFloor />
    <MyFloor />
    <MyBrand />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import MyTypeNav from "./MyTypeNav";
import MyList from "./MyList";
import MyRecommend from "./MyRecommend";
import MyRank from "./MyRank";
import MyLike from "./MyLike";
import MyFloor from "./MyFloor";
import MyBrand from "./MyBrand";
import MyFooter from "./MyFooter";
export default {
  name: "MyHome",
  components: {
    MyHeader,
    MyTypeNav,
    MyList,
    MyRecommend,
    MyRank,
    MyLike,
    MyFloor,
    MyBrand,
    MyFooter,
  },
};
</script>

<style></style>
