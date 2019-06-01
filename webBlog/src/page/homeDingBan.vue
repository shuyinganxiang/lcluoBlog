<template>
  <div class="home" >
    <!-- header -->
    <div class="header">
      <div class='header-in clearfix'>
        <!-- <h1>LCluo</h1> -->
        <h1>h1</h1>
        <ul class="header-right">
          <li class="right-item"><a href="#">
            <img src="../static/img/phone-icon.png" alt="">
          </a></li>
          <li class="right-item"><a href="#">
            <img src="../static/img/phone-icon.png" alt="">
          </a></li>
          <li class="right-item"><a href="#">
            <img src="../static/img/phone-icon.png" alt="">
          </a></li>
        </ul>
      </div>
    </div>
    <!-- swiper -->
    <div class="swiper-box">
      <!--  clearfix -->
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
      <div class="swiper-content">
        <l-swiper></l-swiper>
      </div>

    </div>
  </div>
</template>

<script>
// import swiper from '@/components/common/swiper/swiper'
export default {
  name: 'home',
  components: {
    // swiper
  },
  data () {
    return {
      childData: '',
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
.home
  height: 1200px;
  min-width: 1260px;
  .header
    // padding-top: 58px;
    background: url('../static/img/fairies.gif') repeat-x top center;
    // background-color: pink;

    .header-in
      padding-top: 58px;
      width: 80%;
      margin: 0 auto;

      h1
        float: left;
        height: 100px;
        line-height: 120px;
        font-size: 26px;
        font-family: Microsoft YaHei;

      .header-right
        float: right;
        margin-top: 36px;

        li
          float: left;
          width: 44px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          margin-right: 12px;

          &:last-child
            margin-right: 0;

          a
            display: inline-block;
            width: 64%;
            height: 64%;
            margin: 18%;

            img
              width: 100%
              height: 100%

  .swiper-box
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
            // margin-top: 16px;
            margin-left: 44px;

    .swiper-content
      width: 100%;
      height: 380px;
      // background-color: #bfa;
      position: relative;

</style>
