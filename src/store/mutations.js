import {
  TOGGLE_IS_CHECK,
  COUNT_DECREMENT,
  COUNT_INCREMENT,
  ADD_TO_CART,
  REMOVE_ITEM,
  TOGGLE_IS_LOGIN,
  CHECK_ALL
} from './mutationTypes'
import { Toast } from 'mint-ui';
export default {
  [TOGGLE_IS_CHECK] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) item.isCheck = !item.isCheck
      return item
    })
  },
  [COUNT_DECREMENT] (state, id) {
    state.cart = state.cart.map(item => {
      // TODO：判断减的边界（不能减到0，减到0删除，mintui toast）
      if (item.count > 1) {
        if (item.id === id) item.count--
      }
      return item
    })
  },
  [COUNT_INCREMENT] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) item.count++
      return item
    })
  },
  [ADD_TO_CART] (state, shopInfo) {
    Toast('已经为您添加到购物车！');
    const isExist = state.cart.some(item => {
      return item.id === shopInfo.id
    })

    if (isExist) {
      // 当前商品已存在
      state.cart = state.cart.map(item => {
        if (item.id === shopInfo.id) item.count++
        return item
      })
    } else {
      state.cart.push({ ...shopInfo, count: 1, isCheck: true })
    }
  },
  [REMOVE_ITEM] (state, id) {
    state.cart.some((item, index) => {
      if (item.id === id) {
        return state.cart.splice(index, 1) 
      }
    })
  },

  [TOGGLE_IS_LOGIN] (state, userinfo) {
    state.userinfo = userinfo
  },

  [CHECK_ALL] (state, isCheckAll) {
    console.log(isCheckAll)
    if (isCheckAll) {
      state.cart = state.cart.map(item => {
        item.isCheck = false
        return item
      })
    } else {
      state.cart = state.cart.map(item => {
        item.isCheck = true
        return item
      })
    }
  }
}
