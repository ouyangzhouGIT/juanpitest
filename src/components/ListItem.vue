<template>
  <router-link
    :to="{ name: 'detail', query: { id } }"
    tag="div"
   class="list-item">
    <div class="list-item-img">
      <img :src="image" :alt="title">
    </div>
    <div class="list-item-price">
      <span>￥{{price}}</span>
      <s>￥{{originPrice}}</s>
      <p>{{saleNum}}人已买</p>
    </div>
    <div class="list-item-title">
      {{title}}
    </div>
    <div class="list-item-addcart" @click.stop="addToCart({id, image, price, title})">加入购物车</div>
  </router-link>
</template>

<script>
import {
  mapMutations
} from 'vuex'

export default {
  props: {
    i: Number,
    id: Number,
    image: String,
    price: Number,
    title: String,
    originPrice: Number,
    saleNum: Number
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>

<style lang="scss">
.list-item {
  width:50%;
  display: inline-block;
  box-sizing: border-box;
  &:nth-child(odd) {
    padding-right: 1px;
  }
  &:nth-child(even) {
    padding-left: 1px;
  }

  &-price {
    line-height: 30px;
    padding:6px 0 0 8px;
    font-size: 14px;
    color: #ff464e;

    p {
      float:right;
      color: #333;
      font-size: 12px;
      padding-right: 6px;
    }
    s {
      font-size: 12px;
      color: #bbbbc9;
      margin-left: 4px;
    }
  }
  &-title {
    font-size: 14px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 6px;
    padding-left: 8px;
  }
  &-addcart {
    padding: 5px;
    background: #ff464e;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    border-radius: 4px;
    margin: 8px;
  }
  img {
    width: 100%;
  }
}
</style>
