<!--  -->
<template>
  <div class="good-list">
      <goods-list-item :good='item' v-for="(item, index) in goodslist" :key="index" class="good-list-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  name: '',
  data () {
    return {
    };
  },
  props:{
      goodslist:{
          type: Array,
          default(){
              return []
          }
      }
  },

  components: {
      GoodsListItem
  },

  computed: {},

 //mounted: {},

  methods: {}
}

</script>
<style scoped>
    .good-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
    }
    .good-list-item {
        width: 48%;
    }
    
</style>