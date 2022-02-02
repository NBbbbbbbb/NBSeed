<template>
  <div class="brand">
    <div>
      <img src="./img/brand_03.png" alt="" />
      <img src="./img/brand_05.png" alt="" />
      <img src="./img/brand_07.png" alt="" />
      <img src="./img/brand_09.png" alt="" />
      <img src="./img/brand_11.png" alt="" />
      <img src="./img/brand_13.png" alt="" />
      <img src="./img/brand_15.png" alt="" />
      <img src="./img/brand_17.png" alt="" />
      <img src="./img/brand_19.png" alt="" />
      <img src="./img/brand_21.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBrand",
};
</script>

<style lang="less" scoped>
// 文字居中
//.textCentered(36px);
.textCentered(@h) {
  line-height: @h;
  text-align: center;
}

// 两边靠边，中间的平分主轴上的剩余空间
//&:extend(.alignBothSides);
.alignBothSides {
  display: flex;
  justify-content: space-between;
}

// 设置居中布局
//&:extend(.layout);
.layout {
  width: 1200px;
  margin: 0 auto;
}

// 垂直居中
//&:extend(.VC);
.VC {
  display: flex;
  align-items: center;
}

// 水平居中
//&:extend(.CH);
.CH {
  display: flex;
  justify-content: center;
}
.brand {
  margin: 30px 0;

  div {
    &:extend(.alignBothSides);
    &:extend(.layout);
    background-color: #f7f7f7;

    img {
      border-right: 1px solid #e4e4e4;
      padding-right: 12px;
    }

    img:last-child {
      border-right: transparent;
      padding-right: 0px;
    }
  }
}
</style>
