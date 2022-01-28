<template>
  <!-- 头部导航栏 -->
  <div class="header">
    <div class="headernav">
      <div class="w">
        <ul class="left">
          <li>尚品汇欢迎您！</li>
          <li>
            请
            <router-link to="/login">登录</router-link> |
          </li>
          <li>
            <router-link to="/register">免费注册</router-link>
          </li>
        </ul>
        <ul class="right">
          <li>
            <a href="#">我的订单</a> |
          </li>
          <li>
            <a href="#">我的购物车</a> |
          </li>
          <li>
            <a href="#">我的尚品汇</a> |
          </li>
          <li>
            <a href="#">尚品汇会员</a> |
          </li>
          <li>
            <a href="#">企业采购</a> |
          </li>
          <li>
            <a href="#">关注尚品汇</a> |
          </li>
          <li>
            <a href="#">合作招聘</a> |
          </li>
          <li>
            <a href="#">商家后台</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <div class="w">
        <div class="left">
          <div @click="toHome">
            <img src="./logo.png" alt />
          </div>
        </div>
        <div class="right">
          <input type="text" class="input" />
          <router-link to="/search" class="search" >搜索</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Header",
  methods:{
    toHome(){
      this.$router.push("/home")
    }
  }
};
</script>

<style lang="less" scoped>
.w {
  width: 1200px;
  margin: 0px auto;
}
.headernav {
  background-color: #eaeaea;
  height: 20px;
  padding: 5px 0;
  overflow: hidden;
  .left {
    float: left;
    li {
      float: left;
    }
  }
  .right {
    float: right;
    li {
      float: right;
    }
  }
}
.logo {
  overflow: hidden;
  height: 106px;
  .left {
    float: left;
    div {
      margin-top: 25px;
    }
  }
  .right {
    float: right;
    .input {
      border: 1px solid red;
      width: 490px;
      height: 30px;
    }
    .search {
      display: inline-block;
      line-height: 32px;
      text-align: center;
      width: 68px;
      height: 32px;
      background-color: red;
      color: white;
      margin-top: 37px;
    }
  }
}
</style>