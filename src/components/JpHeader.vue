<template>
    <div>
        <mt-search v-model="value" cancel-text=""></mt-search>
        <i class="icon" @click="gobackto">&#xe635;</i>
    </div>
  </template>
  
  <script>
  import { Search } from 'mint-ui';
  export default {
    data(){
      return{
        value:"搜索"
      }
    },
    methods:{
      gobackto(){
        this.$router.push("/mall")
      }
    }
  }
  </script>
  
  <style scoped>
    @font-face {
      font-family: 'iconfont';  /* project id 1237150 */
      src: url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.eot');
      src: url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.woff') format('woff'),
      url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1237150_zacdj9zlp7d.svg#iconfont') format('svg');
    }
    .icon {
      font-family: "iconfont";
      font-size: 42px;
      position: absolute;
      right: 3px;
      top: 5px;
      color: #666;
    }
      
  </style>
  