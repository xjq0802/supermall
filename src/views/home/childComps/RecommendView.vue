<!--  -->
<template>
  <div class="outer">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </a>
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
      recommends:{
          type:Array,
          default(){
              return []
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
.outer{
    display: flex;
    text-align: center;
    padding: 10px 0 0 0;
    border-bottom: 8px solid #F3F3F3;
}
.recommend-item{
    /* text-align: center; */
    flex: 1;
     /* background-color: red; */
    
}
.outer div img{
    width: 80%;
    margin-bottom: 10px;
}
</style>