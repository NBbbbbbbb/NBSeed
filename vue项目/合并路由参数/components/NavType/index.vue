<template>
  <div class="type-nav">
    <div
      class="container"
      @mouseenter="showSort('enter')"
      @mouseleave="showSort('leave')"
    >
      <h2 class="all">全部商品分类</h2>
      <transition
        name="sort"
        enter-active-class="animate__zoomInDown"
        leave-active-class="animate__zoomOutDown"
      >
        <div class="sort animate__animated" @click="toSearch" v-show="isShow">
          <div
            class="all-sort-list2"
            v-for="(one, index) in categoryList"
            :key="one.categoryID"
          >
            <div
              class="item bo"
              :class="{ item_on: index === currentIndex }"
              @mouseenter="itemMouseEnter(index)"
              @mouseleave="currentIndex = -1"
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
import "animate.css";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    if (this.$route.path === "/search") {
      this.isShow = false;
    }
  },
  methods: {
    itemMouseEnter: _.throttle(
      function (index) {
        this.currentIndex = index;
      },
      30,
      { trailing: true }
    ),

    toSearch(e) {
      const target = e.target;
      const { categoryname, category1id, category2id, category3id } = target.dataset;
      if (categoryname) {
        const location = {
          name: "search",
          query: {
            categoryName: categoryname,
          },
          params: this.$route.params,
        };
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          location.query.category2Id = category2id;
        } else if (category3id) {
          location.query.category3Id = category3id;
        }
        this.$router.push(location);
      }
    },
    showSort(type) {
      if (this.$route.path !== "/home") {
        if (type === "enter") {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    },
  },
  computed: {
    ...mapState({ categoryList: (state) => state.home.categoryList }),
  },
  watch: {
    $route() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
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
            background: pink;
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