<template>
  <div class="like">
    <div class="like_title">
      <h1>猜你喜欢</h1>
      <a href="###">换一换</a>
    </div>
    <div class="like_goods">
      <li>
        <img src="./img/like_01.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
      <li>
        <img src="./img/like_02.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
      <li>
        <img src="./img/like_03.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
      <li>
        <img src="./img/like_01.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
      <li>
        <img src="./img/like_02.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
      <li>
        <img src="./img/like_03.png" alt="" />
        <div>
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <span>¥116.00</span>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLike",
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
.like {
  &:extend(.layout);

  .like_title {
    &:extend(.VC);
    &:extend(.alignBothSides);
    margin: 30px 0 5px 0;

    a {
      width: 66px;
      height: 25px;
      background-image: url(./img/icons.png);
      background-position: 182px -104px;
      line-height: 25px;
    }
  }

  .like_goods {
    &:extend(.alignBothSides);
    width: 1198px;
    height: 250px;
    border: 1px solid #e4e4e4;
    // padding: 0 30px;

    li {
      width: 200px;
      height: 250px;
      padding-left: 20px;

      // box-sizing: border-box;

      img {
        width: 142px;
        height: 142px;
        margin-left: 10px;
      }

      p {
        margin: 8px 0;
        line-height: 20px;
      }

      span {
        font-size: 20px;
        font-weight: bolder;
        color: #df3033;
      }

      div {
        padding-right: 20px;
        border-right: 1px solid #e4e4e4;
      }
    }

    li:last-child {
      div {
        border: transparent;
      }
    }
  }
}
</style>
