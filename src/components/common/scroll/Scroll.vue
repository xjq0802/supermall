<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import Pullup from "@better-scroll/pull-up";
// BScroll.use(Pullup);

export default {
  name: "",
  data() {
    return {
      scroll: null,
    };
  },
  props:{
    probeType: {
      type: Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },

  components: {},

  computed: {},

  mounted() {
    // 创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
    click: true,
    // 实时监听
    probeType:this.probeType,
    // 上拉到底部
    pullUpLoad: this.pullUpLoad
    });

    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    });

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
})

  },

  methods: {
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  },
};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>