<template>
  <div class="center">
    <!--banner轮播-->
    <div class="swiper-container" id="mySwiper">
      <div class="swiper-wrapper a" >
        <div class="swiper-slide" v-for="item in banner"  :key="item.id">
          <img :src="item.imgUrl" />
        </div>
                       <!-- <div class="swiper-slide">
                                <img src="./img/banner2.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./img/banner3.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./img/banner4.jpg" />
                            </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Slideshow",
  computed: {
    ...mapState({
      banner: (state) => state.Mock.banner,
    }),
  },
};
</script>

<style lang="less"  scoped>
.center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;
}
</style>