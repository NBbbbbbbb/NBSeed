<template>
  <div class="list">
    <div class="banner"><img src="./img/banner1.jpg" alt="" /></div>
    <div class="nav_right">
      <div class="express">
        <h3>尚品汇快报</h3>
        <div><a href="###">更多></a></div>
      </div>
      <ul class="nows">
        <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
        <li><b>[公告]</b>备战开学季 全民半价购数码</li>
        <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
        <li><b>[公告]</b>备战开学季 全民半价购数码</li>
        <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
      </ul>
      <ul class="sprite_map">
        <li>
          <i class="a"></i>
          <div>话费</div>
        </li>
        <li>
          <i class="b"></i>
          <div>机票</div>
        </li>
        <li>
          <i class="c"></i>
          <div>电影票</div>
        </li>
        <li>
          <i class="d"></i>
          <div>游戏</div>
        </li>
        <li>
          <i class="e"></i>
          <div>彩票</div>
        </li>
        <li>
          <i class="f"></i>
          <div>加油站</div>
        </li>
        <li>
          <i class="g"></i>
          <div>酒店</div>
        </li>
        <li>
          <i class="h"></i>
          <div>火车票</div>
        </li>
        <li>
          <i class="i"></i>
          <div>众筹</div>
        </li>
        <li>
          <i class="j"></i>
          <div>理财</div>
        </li>
        <li>
          <i class="k"></i>
          <div>礼品卡</div>
        </li>
        <li>
          <i class="l"></i>
          <div>白条</div>
        </li>
      </ul>
      <div class="new_autumn">
        <img src="./img/ad1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
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
.list {
  &:extend(.layout);
  &:extend(.alignBothSides);

  .banner {
    margin: 4px 0px 0px 233px;
    width: 706px;

    img {
      height: 446px;
      width: 706px;
    }
  }

  .nav_right {
    width: 240px;
    height: 446px;
    margin-top: 4px;
    border: 1px solid #ccc;
  }

  .nav_right {
    box-sizing: border-box;

    .express {
      &:extend(.VC);
      &:extend(.alignBothSides);
      padding: 0 15px;
      height: 36px;
      border-bottom: 1px solid #ccc;
    }

    .new_autumn {
      img {
        width: 238px;
        margin-top: 8px;
      }
    }

    .nows li {
      padding: 6px 15px;
    }

    .sprite_map {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;

      li {
        &:nth-child(4n) {
          border-right: transparent;
        }

        &:nth-child(n + 9) {
          border-bottom: transparent;
        }

        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        // margin: 3.2px;
        padding: 0px 3.3px;
        box-sizing: border-box;

        i {
          display: block;
          width: 52px;
          height: 40px;
          background-image: url(./img/icons.png);
        }

        .a {
          background-position: -4px -4px;
        }

        .b {
          background-position: -70px -4px;
        }

        .c {
          background-position: -134px -4px;
        }

        .d {
          background-position: -195px -4px;
        }

        .e {
          background-position: -7px -74px;
        }

        .f {
          background-position: -70px -74px;
        }

        .g {
          background-position: -133px -71px;
        }

        .h {
          background-position: -196px -71px;
        }

        .i {
          background-position: -7px -143px;
        }

        .j {
          background-position: -70px -145px;
        }

        .k {
          background-position: -133px -142px;
        }

        .l {
          background-position: -199px -142px;
        }

        div {
          width: 52px;
          height: 22px;
          .textCentered(22px);
        }
      }
    }
  }
}
</style>
