<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    
    };
  },
  props: {
    path: String,
    activedColor: {
        type: String ,
        default: 'red'
    }
  },

  components: {},

  computed: {
      activeStyle(){
          return this.isActive? {color: this.activedColor}:{}
      },
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1;
      }
  },

  //mounted: {},

  methods: {
    itemClick: function () {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  text-align: center;
  height: 49px;
  flex: 1;
}
/* .tab-bar-item:hover{
    color: red;
} */
</style>