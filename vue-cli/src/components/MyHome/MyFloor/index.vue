<template>
  <div class="floor">
    <div class="floor_title">
      <h1>家用电器</h1>
      <div>
        <a href="###">热门</a><a href="###">大家电</a><a href="###">生活电器</a
        ><a href="###">厨房电器</a><a href="###">应季电器</a
        ><a href="###">空气/净水</a><a href="###">高端电器</a>
      </div>
    </div>
    <div class="floor_goods">
      <li class="floor_goods_1">
        <div class="floor_goods_1_titel">
          <ul>
            <li>节能补贴</li>
            <li>空气净化器</li>
            <li>滚筒洗衣机</li>
          </ul>
          <ul>
            <li>4K电视</li>
            <li>IH电饭煲</li>
            <li>电热水器</li>
          </ul>
        </div>

        <img src="./img/floor-1-1.png" alt="" />
      </li>
      <li class="floor_goods_2">
        <img src="./img/floor-1-b01.png" alt="" />
      </li>
      <li class="floor_goods_3">
        <div><img src="./img/floor-1-2.png" alt="" /></div>
        <div><img src="./img/floor-1-3.png" alt="" /></div>
      </li>
      <li class="floor_goods_4">
        <div><img src="./img/floor-1-4.png" alt="" /></div>
      </li>
      <li class="floor_goods_5">
        <div><img src="./img/floor-1-5.png" alt="" /></div>
        <div><img src="./img/floor-1-6.png" alt="" /></div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFloor",
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
.floor {
  &:extend(.layout);

  .floor_title {
    &:extend(.alignBothSides);
    &:extend(.VC);
    margin: 30px 0 10px 0;

    h1 {
      color: #c81623;
    }

    a {
      border-right: 1px solid #4e4e4e;
      padding: 0 10px;
    }

    a:last-child {
      border: transparent;
    }
  }

  .floor_goods {
    &:extend(.alignBothSides);
    border-top: 2px solid #c81623;

    .floor_goods_1 {
      .floor_goods_1_titel {
        &:extend(.alignBothSides);
        width: 210px;
        padding: 15px 20px;
        box-sizing: border-box;
        background-color: #f7f7f7;

        ul {
          li {
            height: 27px;
            .textCentered(27px);
            border-bottom: 1px solid #e4e4e4;
          }
        }
      }

      img {
        width: 210px;
        height: 255px;
      }
    }

    .floor_goods_2 {
      img {
        height: 369px;
        width: 329px;
      }
    }

    .floor_goods_3,
    .floor_goods_5 {
      img {
        height: 182px;
        width: 219px;
        border-bottom: 1px solid #e4e4e4;
      }
    }

    .floor_goods_3 {
      img {
        border-right: 1px solid #e4e4e4;
      }
    }

    .floor_goods_5 {
      img {
        border-left: 1px solid #e4e4e4;
      }
    }

    .floor_goods_4 {
      img {
        width: 219px;
        border-bottom: 1px solid #e4e4e4;
        height: 369px;
      }
    }
  }
}
</style>
