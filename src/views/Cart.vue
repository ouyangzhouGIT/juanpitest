<template>
  <div class="cart">
    <div v-if="isCartEmpty">
      购物车是空的，小主赶快去选购吧!
    </div>
    <div class="cart-myGoods" v-else>
      <div class="cart-myGoods-title">
        <i class="icon">&#xe638;</i>
        <p>跨店促销</p>
        <b>领券</b>
      </div>
        <CartItem
        v-for="(item, index) in cart"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price"
        :isCheck="item.isCheck"
        :count="item.count"
      ></CartItem>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'

import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters([
      'totalCount',
      'totalCheckedCount',
      'totalCheckedPrice',
      'isCartEmpty',
      'checkAll'
    ])
  },
  created () {
    console.log(this.cart)
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1229787 */
  src: url('//at.alicdn.com/t/font_1229787_udrm52o0mt.eot');
  src: url('//at.alicdn.com/t/font_1229787_udrm52o0mt.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1229787_udrm52o0mt.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1229787_udrm52o0mt.woff') format('woff'),
  url('//at.alicdn.com/t/font_1229787_udrm52o0mt.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1229787_udrm52o0mt.svg#iconfont') format('svg');
}
.icon {
  font-family: 'iconfont';
  color: #333;
}
$grey: #eee;
$deepGrey: #383838;
$mainColor: #ff464e;
.cart {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    height: 44px;
    border-bottom: 1px solid #f4f4f8;
  }
  &-myGoods {
    flex: 1;
    width: 100%;
    &-title {
      height: 46px;
      display: flex;
      align-items: center;
      color: #666;
      i {
        font-size: 18px;
        color: #333;
        margin-left: 40px;
      }
      p {
        font-size: 16px;
        margin-left: 5px;
      }
      b {
        margin-left: 215px;
        font-size: 14px;
        color: #ff464e;
      }
      &-check {
        width: 30px;
        padding-top: 6px;
        margin-left: 10px;
    }
  }
    &-product {
      height: 200px;
      width: 100%;
      margin-left: 5px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-box {
        width: 100%;
        height: 86%;
        &-content {
          height: 70%;
          width: 100%;
          display: flex;
          align-items: center;
          i {
            display: block;
            margin-left: 10px;
            margin-right: 6px;
            color: #fff;
            font-size: 18px;
            height: 18px;
            width: 18px;
            border: 1px solid #d7d8d9;
            border-radius: 50%;
          }
          img {
            width: 90px;
            height: 90px;
          }
        }
      }
    }
  }
}
</style>
