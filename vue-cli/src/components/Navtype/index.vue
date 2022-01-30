<template>
  <div class="nav-type">
    <ul class="outnav">
      <li class="first">
        <h2>全部商品分类</h2>
        <ul class="innerli">
          <li v-for="i in 15" :key="i+90">分类详情{{i}}</li>
        </ul>
      </li>
      <li>服装城</li>
      <li>美妆馆</li>
      <li>尚品汇超市</li>
      <li>全球购</li>
      <li>闪购</li>
      <li>团购</li>
      <li>有趣</li>
      <li>秒杀</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navtype"
};
</script>

<style lang="less" scoped>
.nav-type {
  border-bottom: 3px solid #e1251b;
  .outnav {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    li {
      height: 45px;
      margin: 0 22px;
      line-height: 45px;
      text-align: center;
      font-size: 16px;
      h2 {
        width: 210px;
        margin: 0;
        background-color: #e1251b;
        color: white;
      }
    }
  }
  .innerli {
    background-color: white;
    li {
      height: 30px;
      margin: 0px 20px;
      line-height: 30px;
      text-align: start;
      font-weight: 400;
      font-size: 14px;
    }
  }
}
</style>