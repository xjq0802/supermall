<!--  -->
<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:left> </template>
      <template v-slot:center> 购物街 </template>
      <template v-slot:right> </template>
    </nav-bar>
    <!-- 回到顶部导航图标 -->
    <back-top class="back-top-nav" @click.native="backtop" v-show="backflag"></back-top>
    <!-- better-scroll滚动区域 -->
    <scroll 
      class="content" ref="scroll" 
      :probe-type="3" 
      @scroll="ishowbacknav"
      :pullUpLoad="true"
      @pullingUp="loadMore">

      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabControlClick"
      ></tab-control>
      <goods-list :goodslist="tabCurrentType" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop.vue";

import RecommendView from "views/home/childComps/RecommendView";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import FeatureView from "views/home/childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      backflag: false
    };
  },
  props: {},

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  computed: {
    tabCurrentType() {
      return this.goods[this.currentType].list;
    },
  },

  //mounted: {},
  created() {
    this.getHomeMultidata(), this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
  },

  methods: {
    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = ++this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
    //事件监听
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

     backtop(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
},

    ishowbacknav(position){
      this.backflag = (position.y < -1000);
      // console.log(position);
    }
  },
   
};
</script>
<style scoped>
/* 整个父组件 */
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
/* 顶部导航条 */
.home-nav {
  background-color: #ff8198;
  color: white;
}
/* 回到顶部导航图标 */
/* .back-top-nav{
  position: absolute;
  bottom: 44px;
  right: 10px;
  z-index: 999;
} */
</style>