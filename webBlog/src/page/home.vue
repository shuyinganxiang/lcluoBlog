<template>
  <div class="home" >
    <!-- header -->
    <div class="header">
      <div class='header-in clearfix'>
        <!-- <h1>LCluo</h1> -->
        <h1>h1</h1>
        <ul class="header-right">
          <li class="right-item">Js</li>
          <li class="right-item">Life</li>
          <li class="right-item">AboutMe</li>
        </ul>
      </div>
    </div>
    <div class="content-box">
      <div class="content clearfix">
        <div class="blog-box" style="background: pink;">
          <img src="../static/img/phone-icon.png" alt="">
        </div>
        <div class="blog-box" style="background: yellow;">
          <img src="../static/img/phone-icon.png" alt="">
        </div>
        <div class="blog-box" style="background: lightgreen;">
          <img src="../static/img/phone-icon.png" alt="">
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
.home
  height: 1200px;
  .header
    background: url('../static/img/fairies.gif') repeat-x top center;

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
    min-height: 800px;
    background: #edf9fb;
    padding-top: 50px;

    .content
      margin: 0 6.4935064935%;

      .blog-box
        float: left;
        position: relative;
        width: 30%;
        margin-right: 3.3%;
        border-top: 1px solid #D8DAC9;
        padding-top: 20px;
        padding-bottom: 45px;

      .blog-box:nth-child(3n+0)
        margin-right: 0;
</style>

<style scoped>
/* .blog-box {
        float: left;
        position: relative;
        border-top: 1px solid #D8DAC9;
        padding-top: 20px;
        padding-bottom: 45px;
        margin-right: 0;
      }

      @media screen and (min-width: 30em){
        .blog-box {
          border-bottom: 0px;
          float: left;
          margin-right: 4.347826087%;
          width: 47.8260869565%;
        }
        .blog-box:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media screen and (min-width: 45em)
        .blog-box:nth-child(3n+1) {
          clear: both;
        }

      @media screen and (min-width: 45em)
        .blog-box {
          float: left;
          margin-right: 3.8461538462%;
          width: 30.7692307692%;
        }
        .blog-box:nth-child(3n) {
          margin-right: 0;
        }

      @media screen and (min-width: 45em)
        .blog-box:nth-child(3n+1) {
          clear: both;
        }
      @media screen and (min-width: 65em)
        .blog-box {
          margin-right: 3.8461538462%;
          width: 30.7692307692%;
        }
        .blog-box:nth-child(3n) {
          margin-right: 0;
        }
      @media screen and (min-width: 45em)
        .blog-box {
          float: left;
          margin-right: 3.8461538462%;
          width: 30.7692307692%;
        }
        .blog-box:nth-child(3n) {
          margin-right: 0;
        }
      @media screen and (min-width: 30em)
        .blog-box {
            border-bottom: 0px;
            float: left;
            margin-right: 4.347826087%;
            width: 47.8260869565%;
        }
        .blog-box:nth-child(2n) {
          margin-right: 0;
        } */
</style>
