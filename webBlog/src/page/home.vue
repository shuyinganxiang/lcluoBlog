<template>
  <div class="home" >
    <!-- header -->
    <div class="header">
      <div class='header-in clearfix'>
        <h1>LCluo</h1>
        <!-- <h1>h1</h1> -->
        <ul class="header-right">
          <li class="right-item" id="home">Js</li>
          <li class="right-item">Life</li>
          <li class="right-item">AboutMe</li>
          <!-- <i class="iconfont iconfenlei" style="color: #5949B0;" ></i> -->
        </ul>
      </div>
    </div>
    <div class="content-box clearfix">
      <div class="img-box float-left">
        <p class="img-title">WELCOME TO MY BLOG...</p>
        <img src="../static/img/homePage.jpg" alt="">
        <p class="img-txt">lc罗blog,记录记住的，掠过不重要的，剩下的，都珍贵。。。</p>
      </div>
      <div class="info float-right">
        <div class="top-box">
          <p class="avatar-title">Avatar</p>
          <img class="avatar" src="../static/img/userIcon.jpg" alt="">
        </div>
        <div class="hot-list">
          <ul>
            <li>vue 的生命周期</li>
            <li>c3动画的特效</li>
            <li>小程序的过滤器</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    // swiper
  },
  data () {
    return {
      childData: ''

    }
  },
  mounted () {
    console.log('首页')
    // console.log($('#home'))
  },
  methods: {
    /**
     * top box 的显示和隐藏
     */
    navEnter () {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /* 按需引入变量和方法 */
  @import '../static/style/variable.styl'
  body
    .home
      background-color: #cacaca;
      height: 1200px;
      .header
        background: url('../static/img/fairies.gif') repeat-x top center;
        background-color: #fff;

        .header-in
          padding: 96px 0 36px;
          width: 80%;
          margin: 0 auto;

          h1
            float: left;
            height: 44px;
            line-height: 44px;
            font-size: 32px;
            font-family: Microsoft YaHei;

          .header-right
            float: right;
            padding-top: 16px;

            li
              float: left;
              line-height: 28px;
              text-align: center;
              font-weight: 700;
              color: #21718D;
              margin-right: 36px;

              &:last-child
                margin-right: 0;

      .content-box
        width 80%
        margin 44px auto
        min-height: 400px;
        // background: #edf9fb;
        .img-box
          width 60%
          paddimg-top 44px;
          // background #bfa
          text-align center
          // flex 上下左右居中
          // display: flex;
          // align-items: center;
          // justify-content: center;
          img
            border-radius 10px
          .img-txt
            text-align left
            margin 0 auto
            padding 0 8px
            box-sizing border-box

      .info
        width 40%
        // background pink
        .top-box
          position relative
          width 300px
          height 350px
          padding 82px 40px 20px
          box-sizing border-box
          text-align center
          .avatar-title
            position absolute
            left 50%
            transform translate(-50%, -50%)
            width 50%
            height 44px
            line-height 44px
            color #f0f0f0
            font-weight 700
            background rgba(0,0,0,.75)
          .avatar
            width 218px
            height 218px
            border 1px solid #000
            border-radius 50%

        .hot-list
          padding 12px 40px
          ul
            background #f0f0f0
            li
              padding 10px 0
              line-height 24px
              font-size 16px
              font-weight 700

    &.col-lg
      .home
        .content-box
          margin 44px auto
          .img-box
            .img-title
              font-size 32px
              line-height 96px
            img
              width 560px
              height 420px
            .img-txt
              width 560px
              font-size 20px
              line-height 36px

    &.col-md
      .home
        .content-box
          margin 44px auto
          .img-box
            .img-title
              font-size 28px
              line-height 84px
            img
              width 480px
              height 360px
            .img-txt
              width 480px
              font-size 20px
              line-height 40px
    &.col-sm
      .home
        .content-box
          margin 36px auto
          .img-box
            .img-title
              font-size 28px
              line-height 68px
            img
              margin-top 0
              width 400px
              height 300px
            .img-txt
              width 400px
              font-size 16px
              line-height 36px

        .info
          // width 100%
          // .top-box
          //   margin 0 auto
    &.col-xs
      .home
        .content-box
          margin 0 auto
          width 100%
          .img-box
            width 100%
            .img-title
              font-size 22px
              line-height 56px
            img
              margin-top 0
              width 100%
            .img-txt
              width 100%
              fonnt-size 12px
              line-height 30px

        .info
          width 100%
          .top-box
            margin 0 auto

    // .txt
    //   color $color-text-sub
    // .content
    //   margin: 0 6.4935064935%;

    //   .blog-box
    //     float: left;
    //     position: relative;
    //     width: 30%;
    //     margin-right: 3.3%;
    //     border-top: 1px solid #D8DAC9;
    //     padding-top: 20px;
    //     padding-bottom: 45px;

    //   .blog-box:nth-child(3n+0)
    //     margin-right: 0;
</style>
