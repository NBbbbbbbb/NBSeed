<template>
  <div class="recommend">
    <li>
      <img src="./img/clock.png" alt="" />
      <h1>今日推荐</h1>
    </li>
    <li><img src="./img/today01.png" alt="" /></li>
    <li><img src="./img/today02.png" alt="" /></li>
    <li><img src="./img/today03.png" alt="" /></li>
    <li><img src="./img/today04.png" alt="" /></li>
  </div>
</template>

<script>
export default {
  name: "MyRecommend",
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
.recommend {
  &:extend(.layout);
  margin-top: 10px;
  &:extend(.alignBothSides);

  li:first-child {
    background-color: #5c5251;
    width: 210px;
    height: 165px;
    text-align: center;

    img {
      margin: 35px 0px 15px 0px;
    }

    h1 {
      color: #fff;
    }
  }

  li:nth-child(n + 2) {
    img {
      height: 165px;
    }
  }
}
</style>
