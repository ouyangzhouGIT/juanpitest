<template>
    <div class="cart-footer">
      <div class="cart-footer-left">
        <label class="cart-myGoods-title-check">
        <input type="checkbox" @change="checkAll(isCheckAll)" :checked="isCheckAll">
        <span></span>
        </label>
        <span>全选</span>
      </div>
      <p>合计:<span>￥{{totalCheckedPrice | toFix2}}</span></p>
      <button>去结算({{totalCheckedCount}})</button>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters([
      'totalCount',
      'totalCheckedCount',
      'totalCheckedPrice',
      'isCartEmpty',
      'isCheckAll'
    ])
  },
  methods: {
    ...mapMutations(['checkAll'])
  },
  created () {
    console.log(this.isCheckAll)
  }
}
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #ff464e;
.cart {
  &-myGoods-title-check {
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
    &-footer {
    height: 44px;
    background-color: #fff;
    border-top: 1px solid #f4f4f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin-left: 80px;
      span {
        color: #ff464e;
        font-weight: 600;
        width: 80px;
        margin-left: 5px;
      }
    }
    button {
      border: none;
      height: 44px;
      width: 100px;
      margin-left: 5px;
      color: #fff;
      font-size: 14px;
      background-color: #ff464e;
      float: right;
    }
    &-left {
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
