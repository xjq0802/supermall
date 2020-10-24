<!--  -->
<template>
  <div class="tab-control">
      <div  :class="['tab-control-item',{active: currentIndex == index}]" v-for="(item, index) in titles" :key="index" @click='clickitem(index)'>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        currentIndex:0
    };
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },

  components: {},

  computed: {},

 //mounted: {},

  methods: {
      clickitem(index){
          this.currentIndex = index;
          this.$emit('tabClick',index);
      }
  }
}

</script>
<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
        position: sticky;
        left: 0;
        right: 0;
        top: 44px;
        background-color: white;
    }
    .tab-control-item{
        flex: 1;
    }
    .active span{
        border-bottom: 3px solid  red;
        padding: 6px;
    }
</style>