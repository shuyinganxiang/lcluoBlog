<template>

  <div class="swiper">
    <ul class="swiper-list" ref="swiper" :style="'top: '+swiperTop+'px;'">
      <li :style="'background: '+swiperList[swiperList.length-1]"></li>
      <li
        v-for="(item, index) in swiperList"
        :key="index"
        :style="'background: '+item"
          @mouseenter="swiperEnter()"
          @mouseleave="swiperLeave()"></li>
      <li :style="'background: '+swiperList[0]">{{0}}</li>
    </ul>
    <ul class="indicators">
      <li v-for="(item, index) in swiperList" :key="index" :class="index==swiperIndex?'active':''"></li>
    </ul>
    <div class="change pre"  @click="move(380, 1, speed)">pre</div>
    <div class="change next"  @click="move(380, -1, speed)">next</div>
  </div>

</template>

<script>
export default {
  name: 'LSwiper',
  data () {
    return {
      swiperTop: -380, // 轮播的控制
      swiperIndex: 0, // 轮播 当前位置
      transitionEnd: true,
      speed: 15,
      swiperList: ['orange', 'lightblue', 'pink', 'yellow'], // 轮播 当前位置
      temp: '',
      autoPlay: ''
    }
  },
  mounted () {
    console.log('swiper')
  },
  methods: {

    move (offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.swiperIndex += 1 : this.swiperIndex -= 1
      if (this.swiperIndex > this.swiperList.length - 1) {
        this.swiperIndex = 0
      }
      if (this.swiperIndex < 0) {
        this.swiperIndex = this.swiperList.length - 1
      }

      const destination = this.swiperTop + offset * direction
      this.animate(destination, direction, speed)
    },

    /**
     * swiper 动画
     */
    animate (des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp)
        this.temp = null
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.swiperTop) || (direc === 1 && des > this.swiperTop)) {
          this.swiperTop += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.swiperTop = des
          if (des < -380 * this.swiperList.length) this.swiperTop = -380
          if (des > -380) this.swiperTop = -380 * this.swiperList.length
        }
      }, 20)
    },

    /**
     * swiper 自动播放
     */
    swiperAutoPlay () {
      // 自动播放
      if (this.autoPlay) {
        window.clearInterval(this.autoPlay)
        this.autoPlay = null
      }
      this.autoPlay = window.setInterval(() => {
        this.move(380, -1, this.speed)
      }, 3000)
    },

    /**
     * top box 的显示和隐藏
     */
    swiperEnter (index) {
      window.clearInterval(this.autoPlay)
    },
    swiperLeave (index) {
      this.swiperAutoPlay()
    }

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .swiper
    width: 100%;
    height: 100%;
    // background: #fba;
    border: 1px solid #fbada3;
    overflow: hidden;
    position: absolute;
    top: 0;

    .swiper-list
      width: 100%;
      // transform: translateY(200px)
      position: absolute;
      left: 0;

      li
        width: 100%;
        height: 380px;

    .indicators
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%)

      li
        width 8px;
        height: 8px;
        border-radius: 50%;
        margin: 12px 0;
        background: #fff;

      .active
        background: green;

    .change
      width: 88px;
      height: 88px;
      border-radius: 50%
      position: absolute;
      left: 50%;
      background: rgba(0,0,0,.5);
      box-sizing: border-box;
      color: #fff;
      line-height: 38px;
      text-align: center;
      cursor: pointer;

    .pre
      top: 0;
      transform: translate(-50%, -50%);
      padding-top: 42px;

      &:hover
        padding-top: 38px;

    .next
      bottom: 0;
      transform: translate(-50%, 50%);
      padding-bottom: 38px;

      &:hover
        padding-bottom: 42px;

</style>
