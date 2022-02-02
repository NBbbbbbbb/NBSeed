<template>
  <div class="rank">
    <div class="HOT">
      <div class="hot">
        <li>
          <div></div>
          <a href="###">热卖排行</a>
        </li>
        <li>
          <div></div>
          <a href="###">特价排行</a>
        </li>
        <li>
          <div></div>
          <a href="###">新品排行</a>
        </li>
      </div>
    </div>
    <div class="iphone8">
      <div class="iphone">
        <img src="./img/1.jpg" alt="" />
        <p>
          【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机
        </p>
        <div>定金：¥100.00</div>
      </div>
      <div class="iphone">
        <img src="./img/1.jpg" alt="" />
        <p>
          【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机
        </p>
        <div>定金：¥100.00</div>
      </div>
      <div class="iphone">
        <img src="./img/1.jpg" alt="" />
        <p>
          【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机
        </p>
        <div>定金：¥100.00</div>
      </div>
      <div class="iphone">
        <img src="./img/1.jpg" alt="" />
        <p>
          【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机
        </p>
        <div>定金：¥100.00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRank",
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
.rank {
  &:extend(.layout);

  .HOT {
    &:extend(.CH);

    .hot {
      &:extend(.alignBothSides);
      margin: 10px 0;
      width: 312px;
      text-align: center;

      a {
        font-size: 16px;
      }
    }

    li:first-child {
      div {
        width: 35px;
        height: 35px;
        background-image: url("./img/bg0.png");
        background-position: -35px 0;
        margin: 0 0 10px 13.5px;
      }
    }

    li:nth-child(n + 2) {
      div {
        width: 35px;
        height: 35px;
        background-image: url("./img/bg0.png");
        background-position: 0 0;
        margin: 0 0 10px 13.5px;
      }
    }
  }

  .iphone8 {
    &:extend(.alignBothSides);

    .iphone {
      width: 260px;
      height: 330px;
      line-height: 30px;
      border: 1px solid #e1251b;
      padding: 0 10px;
      // box-sizing: border-box;

      img {
        width: 200px;
        height: 200px;
        margin: 5px 0 18px 0;
        margin-left: 30px;
      }

      p {
        width: 260px;
      }

      div {
        font-size: 20px;
        color: #e1251b;
        // padding: 0 10px;
      }
    }
  }
}
</style>
