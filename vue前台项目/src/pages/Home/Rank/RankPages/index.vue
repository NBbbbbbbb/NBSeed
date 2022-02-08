<template>
  <div class="img-item">
    <p class="tab-pic">
      <a href="#">
        <img src="../img/1.jpg" />
      </a>
    </p>
    <div class="tab-info">
      <div class="info-title">
        <a href="#"
          >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
          移动联通电信4G手机</a
        >
      </div>
      <p class="info-price">定金：¥100.00</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"RankPages"
};
</script>

<style lang="less" scoped>
.img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
</style>