<template>
  <div>
    <div class="jp-cart-addMore">
      <p><span>满件减</span>已享满一件减5元再凑一件减15元</p>
      <b>去凑单></b>
    </div>
    <div class="jp-cart-item">
    <label class="jp-cart-item-check">
    <input type="checkbox" :checked="isCheck" @change="toggleIsCheck(id)">
    <span></span>
    </label>
    <div class="jp-cart-item-img">
      <img :src="image" :alt="title"  @click="toDetail(id)">
    </div>
    <div class="jp-cart-item-info">
      <p class="jp-cart-item-title">{{title}}</p>
      <p class="jp-cart-item-action">
        <span class="jp-cart-item-price">￥{{price}}</span>
        <span class="jp-cart-item-counter">
        <span @click="countDecrement(id)">-</span>
        <span>{{count}}</span>
        <span @click="countIncrement(id)">+</span>
        </span>
        <span class="deleteItem" @click.prevent="removeItem(id, index)">移除</span>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 1
    },
    isCheck: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number
    }
  },
  methods: {
    ...mapMutations([
      'toggleIsCheck',
      'countDecrement',
      'countIncrement',
      'removeItem'
    ]),
    toDetail (id) {
      console.log(this.$router)
      this.$router.push({name: 'detail', query: {id: id}})
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #ff464e;
.jp-cart-addMore {
  height:40px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  b {
    color: #ff464e;
  }
  p {
    span {
      color: #ff464e;
      border: 1px solid #ff464e;
      margin-left: 50px;
      font-size: 10px;
    }
  }
}
.jp-cart-item {
    display: flex;
    height: 120px;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid $grey;
    &-check {
        width: 30px;
        padding-top: 6px;
        input {
            display: none;
            &:checked {
                + span {
                    background-color: $mainColor;
                    border-color: $mainColor;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        width: 12px;
                        height: 6px;
                        border: 2px solid #fff;
                        border-width: 0 0 2px 2px;
                        left: 1px;
                        top: 0px;
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        span {
            display: inline-block;
            width: 15px;
            height: 15px;
            box-sizing: border-box;
            border: 1px solid #9b9b9b;
            border-radius: 50%;
        }
    }
    &-img {
        width: 85px;
        height: 85px;
        img {
        width: 100%;
        }
    }
    &-info {
        flex: 1;
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 10px;
    }
    &-title {
      font-size: 14px;
      line-height: 20px;
      font-size: #333;
      font-weight: 400px;
    }
    &-action {
        display: flex;
        justify-content: space-between;
        .deleteItem {
          color: #ff464e;
          display: flex;
          flex-direction: column-reverse;
        }
    }
    &-price {
        color: #e00;
        font-size: 14px;
        padding-top: 40px;
    }
    &-counter {
        margin-top: 40px;
        height: 20px;
        line-height: 20px;
        background-color: #f4f4f8;
        span {
          display: inline-block;
          width: 20px;
          text-align: center;
          &:nth-child(2) {
              border-width: 0 1px;
              background-color: #fff;
              width: auto;
              padding: 0 3px;
          }
          &:nth-child(3) {
              color: #ff464e;
          }
        }
    }
}
</style>
