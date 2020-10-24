<!--  -->

<template>
  <tab-bar>
        <tab-bar-item path='/home'>
          <template v-slot:item-icon>
            <i class="fas fa-home"></i>
          </template>
          <template v-slot:item-text>
            <div>首页</div>
          </template>
        </tab-bar-item>
      
    
      <tab-bar-item path='/categories'>
        <template v-slot:item-icon>
          <i class="fas fa-tasks"></i>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path='/cart'>
        <template v-slot:item-icon>
          <i class="fas fa-shopping-cart"></i>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path='/profile'>
        <template v-slot:item-icon>
          <i class="fas fa-snowman"></i>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/Tabbar";
import TabBarItem from "components/common/tabbar/TabBarItem";
require("assets/css/fa/css/all.css");

export default {
  name: '',
  data () {
    return {
    };
  },

  components: {
      TabBar,
      TabBarItem
  },

  computed: {},

 //mounted: {},

  methods: {}
}

</script>

<style scoped>
</style>