<template>
  <div 
  class="jp-back-top"
  v-back="{ container, distance }"
  @click="toTop"
  >
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  props: {
    container: String,
    distance: Number
  },
  directives: {
    back: {
      inserted (el, binding) {
        // console.log({el, binding})
        document.querySelector(binding.value.container).addEventListener('scroll', e => {
          if (e.target.scrollTop > binding.value.distance) {
            el.style.display = "block"
          } else {
            el.style.display = "none"
          }
        })
      }
    }
  },
  methods: {
    toTop () {
      document.querySelector(this.container).scrollTop = 0;
    }
  }
  
}
</script>

<style lang="scss">
  .jp-back-top {
    display: none;
    position:fixed;
    bottom:20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 30px;
    background:#fff url(../image/back-top.png) no-repeat center;
    background-size: 25px 25px;
  }
</style>
