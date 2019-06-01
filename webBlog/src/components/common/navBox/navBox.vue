<template>
  <div class="swiper-top">
    <ul>
      <li @mouseenter="navEnter(0)" @mouseleave="navLeave()">HOME
        <span class="point-icon" v-if="topBoxFlag&&navIndex==0"></span>
      </li>
      <li @mouseenter="navEnter(1)" @mouseleave="navLeave()">FE
        <span class="point-icon" v-if="topBoxFlag&&navIndex==1"></span>
      </li>
      <li @mouseenter="navEnter(2)" @mouseleave="navLeave()">STUDY
        <span class="point-icon" v-if="topBoxFlag&&navIndex==2"></span>
      </li>
      <li @mouseenter="navEnter(3)" @mouseleave="navLeave()">LIFE
        <span class="point-icon" v-if="topBoxFlag&&navIndex==3"></span>
      </li>
      <li @mouseenter="navEnter(4)" @mouseleave="navLeave()">ABOUT
        <span class="point-icon" v-if="topBoxFlag&&navIndex==4"></span>
      </li>
    </ul>
    <div class="top-box" v-if="topBoxFlag"  @mouseenter="navEnter(-1)" @mouseleave="navLeave()">
      <div class="box-left">
        <div class="left-item" v-for="(item, index) in swiperList" :key="index">{{item}}</div>
      </div>
      <div class="box-right">
        <div class="s-title">LATEST LIFE</div>
        <img src="https://www.zoella.co.uk/wp-content/uploads/2017/12/benefit-edited-7-of-9-470x250.jpg" alt="">
        <img src="https://www.zoella.co.uk/wp-content/uploads/2017/12/benefit-edited-7-of-9-470x250.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// import swiper from '@/components/common/swiper/swiper'
export default {
  name: 'navBox',
  components: {
    // swiper
  },
  data () {
    return {
      topBoxFlag: false, // nav 下拉框
      swiperList: ['orange', 'lightblue', 'pink', 'yellow'], // 轮播 当前位置
      navIndex: '' // nav 下拉的显示

    }
  },
  mounted () {
    console.log('首页')
  },
  methods: {
    /**
     * top box 的显示和隐藏
     */
    navEnter (index) {
      if (index > -1) {
        this.navIndex = index
      } else {

      }
      this.topBoxFlag = true
    },
    navLeave (index) {
      this.topBoxFlag = false
    }

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .swiper-top
    width: 100%;
    height: 60px
    border-top: 1px solid transparent;
    background: #fbada3;
    position: relative;

    ul
      width: 80%;
      margin: 0 auto;

      li
        float: left;
        min-width: 68px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        padding: 0 12px;
        margin-right: 20px;
        cursor: pointer;
        position: relative;

        &:hover
          color: #fff;
          font-weight: 700;
          // &::after

        .point-icon
          content: '';
          display inline-block
          position absolute
          width 0px
          height 0px
          bottom 0
          left: 50%
          transform: translateX(-50%);
          border-bottom: 12px solid #fff5f1;
          border-left: 24px solid transparent;
          border-right: 24px solid transparent;
          border-top: 0px solid transparent;

    .top-box
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10%;
      min-height: 280px;
      background: #fff5f1;
      z-index: 2;

      .box-left
        float: left;
        width: 200px;
        height: 280px;
        padding: 12px;
        box-sizing: border-box;

        .left-item
          height: 32px;
          line-height: 32px;

      .box-right
        height: 280px;
        box-size: border-box;
        display: inline-block;

        .s-title
          height: 56px;
          line-height: 56px;
          margin-left: 44px;

        img
          width: 320px;
          height: 200px;
          margin-left: 44px;

</style>
