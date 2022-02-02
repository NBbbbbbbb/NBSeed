<template>
  <div class="header">
    <div class="header_middle">
      <div class="header_middle_title">
        <div class="left_header">
          尚品汇欢迎您!&emsp;请 <a href="###">登录</a><a href="###">免费注册</a>
        </div>
        <div class="right_header">
          <li><a href="###">我的订单</a></li>
          <li><a href="###">我的购物车</a></li>
          <li><a href="###">我的尚品汇</a></li>
          <li><a href="###">尚品汇会员</a></li>
          <li><a href="###">企业采购</a></li>
          <li><a href="###">关注尚品汇</a></li>
          <li><a href="###">合作招商</a></li>
          <li><a href="###">商家后台</a></li>
        </div>
      </div>
    </div>
    <div class="header_logo_search_box">
      <div class="header_logo"><img src="./img/logo.png" alt="" /></div>
      <div class="header_search_box">
        <input type="text" /><button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
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
.header {
  .header_middle {
    height: 30px;
    background-color: #eaeaea;
    &:extend(.VC);

    .header_middle_title {
      &:extend(.alignBothSides);
      &:extend(.layout);

      .left_header {
        a:first-child {
          border-right: 0.5px solid #ccc;
          padding-right: 5px;
        }

        a:last-child {
          padding-left: 5px;
        }
      }

      .right_header {
        &:extend(.alignBothSides);

        li {
          border-right: 0.5px solid #ccc;
          padding: 0 10px;
        }

        li:last-child {
          border-right: transparent;
        }
      }
    }
  }

  .header_logo_search_box {
    &:extend(.layout);
    &:extend(.VC);
    &:extend(.alignBothSides);
    height: 106px;

    .header_logo {
      margin: 25px 45px;
    }

    .header_search_box {
      input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        border: 2px solid #ea4a36;
      }

      button {
        width: 68px;
        height: 32px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
      }
    }
  }
}
</style>
