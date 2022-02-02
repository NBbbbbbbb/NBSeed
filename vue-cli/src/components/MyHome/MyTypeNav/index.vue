<template>
  <div class="type_nav">
    <div class="type_middle">
      <div class="type_middle_nav">
        <h3>全部商品分类</h3>
        <nav>
          <a href="###">服装城</a>
          <a href="###">美妆馆 </a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
      <div class="type_nav_list">
        <ul>
          <li>
            <a href="###">图书</a>、<a href="###">音像</a>、<a href="###"
              >数字商品</a
            >
          </li>
          <li><a href="###">家用电器</a></li>
          <li>
            <a href="###">手机</a>、<a href="###">数码</a>、<a href="###"
              >充值</a
            >
          </li>
          <li><a href="###">电脑</a>、<a href="###">办公</a></li>
          <li>
            <a href="###">家居</a>、<a href="###">家具</a>、<a href="###"
              >家装</a
            >、<a href="###">厨具</a>
          </li>
          <li><a href="###">服饰内衣</a></li>
          <li><a href="###">个护化妆</a></li>
          <li><a href="###">运动健康</a></li>
          <li><a href="###">汽车用品</a></li>
          <li><a href="###">彩票</a>、<a href="###">旅行</a></li>
          <li><a href="###">理财</a>、<a href="###">众筹</a></li>
          <li><a href="###">母婴</a>、<a href="###">玩具</a></li>
          <li><a href="###">箱包</a></li>
          <li><a href="###">运动户外</a></li>
          <li><a href="###">箱包</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTypeNav",
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
.type_nav {
  border-bottom: 2px solid #e1251b;

  .type_middle {
    position: relative;
    &:extend(.layout);

    .type_middle_nav {
      &:extend(.VC);
      display: flex;
      height: 45px;

      h3 {
        .textCentered(45px);
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        color: #fff;
      }

      nav {
        a {
          margin: 0 20px;
        }

        font-size: 16px;
      }
    }

    .type_nav_list {
      position: absolute;
      width: 210px;
      background-color: #fafafa;
      top: 47px;

      li {
        &:extend(.VC);
        height: 30px;
        margin-left: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
