<template>
  <div class="footer">
    <div class="footlist">
      <ul class="item" v-for="item in 5" :key="item">
        <h4>购物指南</h4>
        <li>购物流程</li>
        <li>会员介绍</li>
        <li>生活旅行</li>
        <li>常见问题</li>
        <li>购物指南</li>
      </ul>
      <ul class="item">
        <h4>帮助中心</h4>
        <img src="./img/wx_cz.jpg" />
      </ul>
    </div>
    <div class="footaaa">
      <ul>
        <li v-for="i in 9" :key="i + 2">关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</li>
        <li>关于我们</li>
      </ul>
      <p>地址：北京市昌平区宏福科技园综合楼6层</p>
      <p>京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
  padding: 10px 0px 60px;
  .footlist {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 20px 40px 20px;
    display: flex;
    justify-content: space-between;
    .item {
      width: 16.666%;
    }
  }
  .footaaa {
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0px 20px;
    ul {
      display: flex;
      justify-content: center;
      padding-bottom: 7px;
    }
    p {
      display: flex;
      justify-content: center;
      padding-bottom: 7px;
    }
  }
}
</style>