<!--  -->
<template>
  <div class="item">
      <a :href="good.link">
          <img :src="good.show.img" alt="">
      </a>
      <div>
          ￥：<span>{{good.price}}</span>
          收藏：<span>{{good.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },
  props:{
      good:{
          type:Object,
          default(){
              return {}
          }
      }
  },

  components: {},

  computed: {},

 //mounted: {},

  methods: {}
}

</script>
<style scoped>
.item img{
    width:100%;
    border-radius: 10px;
}
.item{
    font-size: 14px;
}

</style>