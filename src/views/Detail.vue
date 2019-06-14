<template>
  <div class="jp-detail">
    <div class="jp-detail-main">
      <i class="icon jp-detail-icon" @click="goBack">&#xe643;</i>
      <div class="jp-detail-banners">
        <mt-swipe :auto="5000" class="jp-detail-banners__swipe">
          <mt-swipe-item
            v-for="photo in detail.photos"
            :key="photo.id"
          >
            <img :src="photo.url" alt="" class="swipe_photo">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="jp-detail-title">
        <div class="jp-detail-shopnum">
          <span>
            <i>￥</i><span>{{detail.price}}</span>
            <s>￥{{detail.originPrice}}</s>
            <span>包邮</span>
          </span>
          <p class="jp-detail-shoper">{{detail.saleNum}}人已购</p>
          <div class="jp-detail-content">
            <p>{{detail.title}}</p>
            <img src="@/assets/fx.png" alt="">
          </div>
        </div>
        <div class="jp-detail-deliver">
          <div class="jp-detail-rx">
            <span class="a">任选</span>
            <span class="b">39元2件任选</span>
            <img src="https://web.juanpi.com/static/media/more.66830346.png" alt="">
          </div>
          <div class="jp-detail-Coupon">
            <span class="a">领券</span>
            <span class="b">{{detail.couponValue}}</span>
            <img src="https://web.juanpi.com/static/media/more.66830346.png" alt="">
          </div>
          <div class="jp-detail-goods">
            <span><img src="@/assets/2.png" alt="">24小时发货</span>
            <span><img src="@/assets/2.png" alt="">7天包退</span>
            <span><img src="@/assets/2.png" alt="">售后补贴</span>
            <img class="box" src="https://web.juanpi.com/static/media/more.66830346.png" alt="">
          </div>
          <div class="jp-detail-size">
            <span>已选择： </span>
            <img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" alt="">
          </div>
          <!-- 图文详情 -->
          <div class="jp-detail-imgBox"
            v-for="(img,index) in datailImgUrl"
            :key="index"
          >
            <img width="100%"
            :src="img" alt="">
          </div>
          
        </div>
      </div>
    </div>
    <div class="jp-detail-foot">
      <ul>
        <router-link to="/home" tag="li">
          <li class="foot-home">
            <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt="">
            <span>首页</span>
          </li>
        </router-link>
        <li class="foot-cart">
          <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt="">
          <span>购物车</span>
        </li>
        <li class="foot-buy">立即购买</li>
        <li class="foot-add"
          @click="addToCart({
            id: detail.id,
            image: detail.photos[0].url,
            price: detail.price,
            title: detail.title
          })"
        >加入购物车</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      id: '',
      detail: {},
      datailImgUrl: []
    }
  },
  created () {
    // this.id = 10137503
    // console.log(this.$route.query)
    this.id = this.$route.query.id
    this.$http.getDetail(this.id).then(resp => {
      this.detail = resp.data.data.detail
      this.datailImgUrl = resp.data.data.detail.descContentList.map(item => item.image.url)
      // console.log(resp.data.data.detail.descContentList)
    })
  },
  methods: {
    ...mapMutations(['addToCart']),
    goBack () {
      console.log(this.$route)
      const {from} = this.$route.params
      if (from) {
        this.$router.push('/')
      } else {
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #FF464E;
@font-face {
    font-family: 'iconfont';  /* project id 1241735 */
    src: url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.eot');
    src: url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.woff') format('woff'),
    url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1241735_tx1jr7ek7d9.svg#iconfont') format('svg');
  }

.icon {
  font-family: 'iconfont'
}
.jp-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .jp-detail-icon {
    font-size: 25px;
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 100;
    color: $mainColor;
  }

  &-banners {
    width: 100%;
    height: 0px;
    padding-top: 100%;
    position: relative;

    &__swipe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      .swipe_photo {
        width: 100%;
        height: 100%;
      }
    }
  }

  .jp-detail-title {
    height: 30px;
    line-height: 30px;

    .jp-detail-shopnum {
      padding: 4px 8px;
    }

    .jp-detail-shoper {
      float: right;
      font-size: 12px;
      color: #999;
      display: inline-block;
    }

    .jp-detail-content {
    height: 60px;
      display: flex;
      justify-content: space-around;

      p {
        font-size: 16px;
        color: #333;
      }

      img {
        width: 22px;
        height: 20px;
        margin-top: 20px;
      }
    }

    span {
      font-size: 20px;
      display: inline-block;

      &:nth-child(2) {
        font-size: 22px;
        color: $mainColor;
      }

      s {
        font-size: 12px;
        color: #bbbbbb;
        margin-right: 5px;
      }

      &:nth-child(4) {
        font-size: 12px;
        background: $mainColor;
        color: #fff;
        line-height: 14px;
        border-radius: 3px;
      }
    }

    i {
      font-size: 16px;
      color: $mainColor;
    }

    .jp-detail-deliver {
      border-top: 12px solid #f4f4f8;

      .jp-detail-rx {
        margin: 0 8px;
        height: 45px;
        line-height: 40px;
        border-bottom: 1px solid #f4f4f8;
        .a {
          height: 15px;
          line-height: 15px;
          font-size: 12px;
          background: #FF464E;
          color: #fff;
        }

        .b {
          font-size: 13px;
          color: #333;
          margin-left: 5px;
        }

        img {
          width: 22px;
          height: 20px;
          float: right;
          padding-top: 12px;
        }
      }
      .jp-detail-Coupon {
        margin: 0 8px;
        height: 45px;
        line-height: 40px;
        border-bottom: 1px solid #f4f4f8;

        .a {
          height: 15px;
          line-height: 15px;
          font-size: 12px;
          background: #FF464E;
          color: #fff;
        }

        .b {
          font-size: 13px;
          color: #333;
          margin-left: 5px;
        }

        img {
          width: 22px;
          height: 20px;
          float: right;
          padding-top: 12px;
        }
      }
      .jp-detail-goods {
        height: 45px;
        line-height: 40px;
        border-bottom: 12px solid #f4f4f8;
        span {
          font-size: 12px;
          color: #666;
          margin-right: 8px;

          img {
            margin-left: 12px;
            margin-right: 5px;
          }
        }
        .box {
          width: 22px;
          height: 20px;
          float: right;
          padding-top: 8px;
          margin-right: 8px;
        }
      }
      .jp-detail-size {
        height: 45px;
        line-height: 45px;
        border-bottom: 12px solid #f4f4f8;
        span {
          font-size: 15px;
          color: #333;
          margin-left: 8px;
        }
        img {
          width: 22px;
          height: 20px;
          float: right;
          margin-top: 15px;
          margin-right: 8px;
        }
      }
    }
  }
  .jp-detail-foot {
    bottom: 0;
    width: 100%;
    height: 45px;

    ul {
      width: 100%;
      display: flex;

      .foot-home {
        width: 70px;
        height: 45px;
        border-right: 1px solid #f4f4f8;
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          color: #666;
          width: 23px;
          height: 24px;
          padding-top: 5px;
        }
        span {
          color: #666;
          font-size: 12px;
          align-items: center;
        }
      }
      .foot-cart {
        width: 70px;
        height: 45px;
        border-right: 1px solid #f4f4f8;
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          color: #666;
          width: 26px;
          height: 25px;
          padding-top: 5px;
        }
        span {
          color: #666;
          font-size: 12px;
          align-items: center;
        }
      }
      .foot-buy {
        width: 95px;
        height: 45px;
        font-size: 12px;
        color: #333;
        text-align: center;
        line-height: 45px;
      }
      .foot-add {
        width: 138px;
        height: 45px;
        line-height: 45px;
        background: #FF464E;
        color: #fff;
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
