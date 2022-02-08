<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="Show(true)" @mouseleave="Show(false)">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="toSearch" v-show="isShow">
            <div class="all-sort-list2">
              <div
                v-for="(one, index) in val"
                :key="one.categoryId"
                class="item bo"
                :class="{ item_on: index === initIndex }"
                @mouseenter="ItemMouseenter(index)"
                @mouseleave="initIndex = -1"
              >
                <h3>
                  <a
                    href="javascript:;"
                    :data-categoryName="one.categoryName"
                    :data-category1Id="one.categoryId"
                    >{{ one.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="two in one.categoryChild"
                      :key="two.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:;"
                          :data-categoryName="two.categoryName"
                          :data-category2Id="two.categoryId"
                          >{{ two.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="three in two.categoryChild"
                          :key="three.categoryId"
                        >
                          <a
                            href="javascript:;"
                            :data-categoryName="three.categoryName"
                            :data-category3Id="three.categoryId"
                            >{{ three.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "NevType",
  data() {
    return {
      initIndex: -1,
      isShow: true,
    };
  },
  //生命周期  初始化时调用getNevValue函数
  mounted() {
    /* this.getNevValue(); */

    if (this.$route.path!= "/home") {
      this.isShow = false;
    }
  },
  methods: {
    //调用store中actions的函数，可传值
    /* getNevValue() {
      this.$store.dispatch("getNevValue");
    }, */
    //节流触发显示隐藏
    ItemMouseenter: _.throttle(
      function (index) {
        this.initIndex = index;
      },
      30,
      { trailing: true }
    ),
    //编程式路由导航  事件代理
    toSearch(e) {
      //得到精确的元素
      const target = e.target;
      const { categoryname, category1id, category2id, category3id } =
        target.dataset;
      if (categoryname) {
        const location = {
          name: "Search",
          query: {
            categoryName: categoryname,
          },
        };
        //判断是哪一个级别的点击
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          location.query.category2Id = category2id;
        } else {
          location.query.category3Id = category3id;
        }
        //编程式路由导航
        this.$router.push(location).catch(() => {});
      }
    },
    Show(Bool) {
      if (this.$route.path != "/home") {
        this.isShow = Bool;
      }
    },
  },
  watch:{
       $route() {
      this.isShow = false;
    },
  },
  computed: {
    val() {
      return this.$store.state.Nav.NevTypeValue;
    },
  },
};
</script>

<style lang="less"  scoped>
@keyframes sort {
  from {
    //透明度
    opacity: 1;
    //高度
    height: 461px;
  }
  to {
    //透明度
    opacity: 0;
    //高度
    height: 0;
  }
}
.sort-leave-active{
animation: sort  0.3s linear;
}
.sort-enter-active{
animation: sort  0.3s linear  reverse;
}
/* .sort-enter,.sort-leave-to {
  opacity: 1;
  height: 461px;
} */

/* .sort-leave,.sort-enter-to {
  opacity: 0;
  height: 0px;
} */
/* .sort{
    transition: 0.5s linear
}
 */

.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>