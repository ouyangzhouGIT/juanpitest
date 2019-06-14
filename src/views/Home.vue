<template>
  <div class="jp-home">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="banner in banners"
          :key="banner.id"
        >
          <img :src="banner.imageUrl" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 分类项目 -->
    <div class="jp-home-category">
      <a href="javascript:;"
        v-for="(item,index) in categoryPic"
        :key="index"
      >
        <img :src="item" alt="">
      </a>
    </div>
    <!-- 推荐项目 -->
    <div class="jp-home-recommend">
      <a href="javascript:;"
        v-for="(item,index) in recommendPic"
        :key="index"
      >
        <img :src="item" alt="">
      </a>
    </div>
    <!-- 618广告图片 -->
    <div class="jp-home-ad">
      <a href="javascript:;"
        v-for="(item,index) in ad"
        :key="index"
      >
        <img :src="item" alt="">
      </a>
    </div>
    <!-- 切换项目 -->
    <div class="jp-home-toggle">
      <router-link to="/home/4210">精选专场</router-link>
      <router-link to="/home/4219">精选单品</router-link>
    </div>
    <!-- 商品列表 -->
    <div class="jp-home-goodsList">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>	
import Swiper from 'swiper'
import swiperCss from 'swiper/dist/css/swiper.min.css'	
import * as ajax from '@/request'  //index可以省略，默认找index

export default {
  data () {
    return {
      banners: [],
      categoryPic: [],
      recommendPic: [
        'https://s2.juancdn.com/jas/190608/1/a/5cfb0e4bb6f8ea66312fcaad_540x656.gif',
        'https://goods3.juancdn.com/jas/190608/4/1/5cfb0e7133b0895a882eb3c9_540x328.png?iopcmd=convert&Q=85&dst=png',
        'https://goods2.juancdn.com/jas/190608/3/9/5cfb0ea133b0895875485380_540x328.png?imageMogr2/quality/85!/format/png'
      ],
      ad: []
    }
  },
  created () {
    ajax.getCategory().then(resp => {
      console.log(resp.data.adsRes.block[0].multi_block[0].data)
      this.categoryPic = resp.data.adsRes.block[0].multi_block[0].data.map(item => item.child[0].pic)
      this.ad = resp.data.adsRes.block[0].multi_block[1].data.map(item => {
        return item.child[0].pic
      })
      this.ad = [...this.ad,resp.data.adsRes.block[0].multi_block[3].data.map(item => {
        return item.child[0].pic
      })[0]]

    })
    ajax.getHome().then(resp => {
      this.banners = resp.data.data.banners
      this.$nextTick().then(() => {
        this.initSwiper()
      })
    })
    this.$router.push('/home/4210')
  },
  methods: {
    initSwiper () {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 0;
  padding-top: (420 / 1080) * 100%;
  width: 100%;

  .swiper-wrapper {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  img {
    width: 100%;
    vertical-align: top;
  }
}

.jp-home {
  width: 100%;
  
  &-category {
    display: flex;
    justify-content: space-between;
    
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  
  &-recommend {
    width: 100%;
    
    a {
      float: left;
      
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        width: 50%
      }
      
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }
  
  &-ad {
    width: 100%;
    background: #f4f4f8;
    a {
      width: 100%;
      display: inline-block;
      
      img {
        width: 100%;
      }
      
      &:nth-child(2) {
        margin: 10px 0;
      }
    }
    
  }
  
  &-toggle {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin-bottom: 4px;
    
    a {
      height: 100%;
      color: #333;
      margin: 0 8px;
      display: inline-block;
      text-decoration: none;
    }
    
    .router-link-exact-active,
    .router-link-active {
      border-bottom: 2px solid #ff464e;
      color: #ff464e;
    }
    
  }
}
</style>
