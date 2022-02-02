<template>
  <div class="footer">
    <div class="footer_middle">
      <div class="footer_serve">
        <ul>
          <li class="first">购物指南</li>
          <li>购物流程</li>
          <li>会员介绍</li>
          <li>生活旅行/团购</li>
          <li>常见问题</li>
          <li>购物指南</li>
        </ul>
        <ul>
          <li class="first">配送方式</li>
          <li>上门自提</li>
          <li>211限时达</li>
          <li>配送服务查询</li>
          <li>配送费收取标准</li>
          <li>海外配送</li>
        </ul>
        <ul>
          <li class="first">支付方式</li>
          <li>货到付款</li>
          <li>在线支付</li>
          <li>分期付款</li>
          <li>邮局汇款</li>
          <li>公司转账</li>
        </ul>
        <ul>
          <li class="first">售后服务</li>
          <li>售后政策</li>
          <li>价格保护</li>
          <li>退款说明</li>
          <li>返修/退换货</li>
          <li>取消订单</li>
        </ul>
        <ul>
          <li class="first">特色服务</li>
          <li>夺宝岛</li>
          <li>DIY装机</li>
          <li>延保服务</li>
          <li>尚品汇E卡</li>
          <li>尚品汇通信</li>
        </ul>
        <ul>
          <li class="first">帮助中心</li>
          <li><img src="./img/wx_cz.jpg" alt="" /></li>
        </ul>
      </div>
      <div class="footer_item">
        <li>
          <a href="###">关于我们</a><a href="###">联系我们</a
          ><a href="###">关于我们</a><a href="###">商家入驻</a
          ><a href="###">营销中心</a><a href="###">友情链接</a
          ><a href="###">关于我们</a><a href="###">营销中心</a
          ><a href="###">友情链接</a><a href="###">关于我们</a>
        </li>
        <li>地址：北京市昌平区宏福科技园综合楼6层</li>
        <li>京ICP备19006430号</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
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
.footer {
  width: 100%;
  height: 322px;
  background-color: #eaeaea;

  .footer_middle {
    &:extend(.layout);
    padding: 20px 40px;
    box-sizing: border-box;

    .footer_serve {
      &:extend(.alignBothSides);
      line-height: 20px;

      .first {
        font-size: 14px;
        font-weight: bolder;
      }
    }

    .footer_item {
      line-height: 30px;
      text-align: center;

      a {
        border-right: 1px solid #333;
        padding: 0 10px;
      }

      a:last-child {
        border: transparent;
      }
    }
  }
}
</style>
