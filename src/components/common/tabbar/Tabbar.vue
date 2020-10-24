<!--  -->
<template>
  
  <div id="tabbar">
     <slot></slot>
  </div>
</template>

<script>
// require("assets/css/fa/css/all.css");
import TabBarItem from './TabBarItem'
export default {
  name: "",
  data() {
    return {};
  },

  components: {
      TabBarItem
  },

  computed: {},

  //mounted: {},

  methods: {},
};
</script>
<style scoped>
#tabbar {
  display: flex;
  /* text-align: center; */
  background-color: #f4f4f4;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 5px black;
}


</style>