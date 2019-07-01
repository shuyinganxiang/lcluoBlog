<template>
  <div class="className" >5555555555
    <header></header>
    <!-- <div class="carousel-wrap" id="carousel">11111111 -->
      <!-- // 轮播图列表 -->
      <!-- <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" rel="external nofollow" >
        <img :src="list.image" :alt="list.desc">
        </a>
      </li>
      </transition-group> -->
      <!-- // 轮播图位置指示 -->
      <!-- <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
    </div>

    <li v-for="(list,index) in slideList" :key="index">
      <a :href="list.clickUrl" rel="external nofollow" >
      <img :src="list.image" :alt="list.desc">
      </a>
    </li>

    <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
      <a :href="list.clickUrl" rel="external nofollow" >
      <img :src="list.image" :alt="list.desc">
      </a>
    </li>

    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div> -->
  </div>
</template>

<script>
export default {
  // name:'luobo',
  // mixins:[ ],
  // props:{
  //   fromFatherData: {
  //     type: String,
  //     default: ''
  //   }
  // },
  // data: {
  //   slideList: [
  //     {
  //       "clickUrl": "#",
  //       "desc": "nhwc",
  //       "image": "http://dummyimage.com/1745x492/f1d65b"
  //     },
  //     {
  //       "clickUrl": "#",
  //       "desc": "hxrj",
  //       "image": "http://dummyimage.com/1745x492/40b7ea"
  //     },
  //     {
  //       "clickUrl": "#",
  //       "desc": "rsdh",
  //       "image": "http://dummyimage.com/1745x492/e3c933"
  //     }
  //   ],
  //   currentIndex: 0,
  //   timer: ''
  // },
  // computed: {
  //   comData: function() {
  //     let styles = {}
  //     styles.width = styles.height
  //     return styles
  //   },
  // },
  // mounted() {
  //   //在下个tick执行等待图片加载完成后再
  //   this.$nextTick(() => {
  //     this.timer = setInterval(() => {
  //       this.autoPlay()
  //     },4000)
  //   })
  // },
  // watch: {
  //   /** 注释 **/
  //   fromFatherData:{
  //     deep: true,
  //     handler: function(oldVal, newVal) {
  //     },
  //   },
  //   childData: function(oldVal, newVal) {
  //   },
  // },
  // methods: {
  //   /** 注释 **/
  //   functionName() {
  //   },

  //   go(){
  //     this.timer = setInterval(() => {
  //       this.autoPlay()
  //     },4000)
  //   },
  //   stop() {
  //   clearInterval(this.timer)
  //     this.timer = null
  //   },
  //   change(index) {
  //     this.currentIndex = index
  //   },
  //   autoPlay() {
  //     this.currentIndex++
  //     if (this.currentIndex > this.slideList.length - 1) {
  //       this.currentIndex = 0
  //     }
  //   }
  // },
  // components: {

  // },
  // activated() {
  // }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  // .carousel-wrap
  //   position: relative;
  //   height: 453px;
  //   width: 100%;
  //   overflow: hidden;
  //   background-color: #fff;

  // .slide-ul
  //   width: 100%;
  //   height: 100%;

  // li
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   img
  //   width: 100%;
  //   height: 100%;

  // .carousel-items
  //   position: absolute;
  //   z-index: 10;
  //   top: 380px;
  //   width: 100%;
  //   margin: 0 auto;
  //   text-align: center;
  //   font-size: 0;
  //   span
  //     display: inline-block;
  //     height: 6px;
  //     width: 30px;
  //     margin: 0 3px;
  //     background-color: #b2b2b2;
  //     cursor: pointer;

  // .active
  //   background-color: #ccc;
</style>
