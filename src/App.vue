<template>
  <div class="jp-app">
    <div>
      <router-view name="header" class="jp-app-header"></router-view>
      <router-view name="cartHeader"></router-view>
    </div>
    <div class="jp-app-main">
      <router-view></router-view>
    </div>
    <div class="jp-app-footer">
      <router-view name="cartFooter"></router-view>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>
  <script>
export default {
  components: {
  }
};
</script>


<style lang="scss" >
@font-face {
  font-family: "iconfont"; /* project id 1228268 */
  src: url("//at.alicdn.com/t/font_1228268_hgh38tirut.eot");
  src: url("//at.alicdn.com/t/font_1228268_hgh38tirut.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1228268_hgh38tirut.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1228268_hgh38tirut.woff") format("woff"),
    url("//at.alicdn.com/t/font_1228268_hgh38tirut.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1228268_hgh38tirut.svg#iconfont") format("svg");
}

.icon {
  font-family: "iconfont";
}
html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,em,img,small,strike,strong,b,u,i,dl,dt,dd,ol,ul,li,fieldset,
form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,figure,footer,header,
hgroup,main,menu,nav,section,summary,audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body {
  height: 100%;
}
.jp-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .jp-app-header{
    height: 52px;
    .mint-search{
      height: 52px;
      width: 90%;
      .mint-searchbar{
        background-color: #fff;
        
        .mint-searchbar-inner{
          background-color: #f2f2f2;
          border-radius: 14px;
          i{
            color: rgb(153, 153, 153);
            font-size: 18px;
          }
          .mint-searchbar-core{
            background-color: #f2f2f2;
          }
        }
      }
      .mint-search-list{
        display: none;
      }
    }
  }
  &-main {
    flex: 1;
    background-color: #fff;
    overflow-x: hidden;
    .mint-header {
      background-color: #fff;
      height: 44px;
      font-size: 18px;
      line-height: 44px;
      margin-bottom: 1px;
      &-title {
        color: #333;
      }
      .mintui {
        font-size: 24px;
        color: #333;
      }
      .mint-button {
        color: #333;
        font-size: 16px;
      }
      .editBtn {
        vertical-align: center!important;
        margin-left: 35px;
        font-size: 16px;
      }
    }
  }
  .mint-header-button.is-right {
    display: inline-block;
    line-height: 44px;
    padding: 10px;
  }
}

.jp-app-footer {
  .router-link-exact-active,
  .router-link-active {
    color: #f20c59;
  }
}

</style>
  