<!--  -->
<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>


import { Swiper, SwiperItem } from 'components/common/swiper/index.js' 


export default {
  name: '',
  data () {
    return {
    };
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },

  components: {
      SwiperItem,
      Swiper
  },

  computed: {},

 //mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>