<template>
  <div class="jp-mine">
    <div class="jp-mine-user">
      <div class="jp-mine-user-header">
        <i class="icon">&#xe63f;</i>
        <span class="jp-mine-user-header-title">个人中心</span>
        <i>退出</i>
      </div>
      <div class="jp-mine-user-state">
        <router-link 
        :to="{name: 'register'}"
        >
        注册</router-link>
        <span></span>
        <router-link
        to="/login">
        登录</router-link>
      </div>
      <div class="jp-mine-user-login">
        <div class="img">
          <img src="../image/user.png" alt>
        </div>
        <div class="info">
          <p>sladfjk;l</p>
          <p>
            我的账户
            <i class="icon"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="jp-mine-main">
      <div class="jp-main-order">
        <div class="jp-main-order-title">
          <p>我的订单</p>
          <p>全部订单</p>
        </div>
        <div class="jp-main-order-nav">
          <ul>
            <li>
              <i class="icon">&#xe656;</i>
              <span>待付款</span>
            </li>
            <li>
              <i class="icon">&#xe604;</i>
              <span>待成团</span>
            </li>
            <li>
              <i class="icon">&#xe622;</i>
              <span>待收货</span>
            </li>
            <li>
              <i class="icon">&#xe60f;</i>
              <span>退款/售后</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="jp-main-menu">
        <p>
          <span>我的优惠卷</span>
        </p>
        <p>
          <span>我的收藏</span>
        </p>
        <p>
          <span>我的拼团</span>
        </p>
        <p>
          <span>我的免单卷</span>
          <i>0张</i>
        </p>
        <p>
          <span>借钱</span>
          <i>新用户免费领1000元</i>
        </p>
      </div>
      <div class="jp-main-menu tips">
        <p>
          <span>客服中心</span>
        </p>
        <p>
          <span>关于卷皮</span>
        </p>
      </div>
      <div class="jp-main-footer">
        <ul>
          <li>返回首页</li>
          <li>客服端</li>
          <li>电脑版</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont"; /* project id 1234258 */
  src: url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.eot");
  src: url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.woff") format("woff"),
    url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1234258_0hjcfjr7owi9.svg#iconfont")
      format("svg");
}
.icon {
  font-family: "iconfont";
}
.jp-mine {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-user {
    height: 144px;
    width: 100%;
    background: url(../image/user_bg.png) no-repeat center;

    &-header {
      height: 44px;
      line-height: 44px;
      display: flex;

      i {
        width: 44px;
        text-align: center;
        font-size: 18px;
        color: #fff;

        &:last-child {
          font-size: 15px;
        }
      }

      &-title {
        flex: 1;
        text-align: center;
        color: #fff;
        font-size: 18px;
      }
    }
    img {
      width: 100%;
    }

    &-state {
      width: 100%;
      height: 100px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      // display: none;

      span {
        display: inline-block;
        width: 2px;
        height: 20px;
        background: #fff;
        line-height: 100px;
        margin: 0 50px;
      }

      a {
        display: inline-block;
        height: 20px;
        color: #fff;
        text-decoration: none;
      }
    }

    &-login {
      display: none;
      height: 60px;
      padding: 25px 0 13px 0;

      div {
        float: left;
      }

      .img {
        width: 60px;
        height: 60px;
        margin: 0 12px 0 18px;

        img {
          width: 100%;
        }
      }

      .info {
        height: 100%;
        color: #ffffff;
        font-size: 18px;
        line-height: 30px;
      }

      p:last-child {
        width: 68px;
        height: 17px;
        border-radius: 20px;
        font-size: 13px;
        line-height: 17px;
        text-align: center;
        margin-top: 4px;
        border: 1px solid #ff8282;
      }
    }
  }

  &-main {
    flex: 1;
    background: #f4f4f8;

    .jp-main-order {
      height: 130px;
      background: #fff;
      margin-bottom: 10px;

      &-title {
        height: 46px;
        line-height: 46px;
        margin: 0 16px;
        border-bottom: 2px solid #f4f4f4;

        p:first-child {
          float: left;
          font-size: 15px;
          color: #333333;
          margin-left: 4px;
        }

        p:last-child {
          float: right;
          font-size: 14px;
          color: #999999;
          margin-right: 4px;
        }
      }

      &-nav {
        height: 82px;

        ul {
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          align-content: center;
          li {
            width: 25%;
            text-align: center;

            i {
              display: block;
              font-size: 25px;
              color: #666666;
              padding-bottom: 8px;
            }

            span {
              font-size: 13px;
              color: #666666;
            }
          }
        }
      }
    }

    .jp-main-menu {
      background: #ffffff;
      margin-bottom: 8px;

      p {
        height: 46px;
        line-height: 46px;
        margin: 0 16px;
        border-bottom: 2px solid #f5f5f5;
        font-size: 15px;
        color: #333333;
        span {
          float: left;
        }

        i {
          float: right;
        }
      }
    }

    .jp-main-footer {
      height: 46px;
      line-height: 46px;
      background: #fff;

      ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 13px;
        color: #333333;
      }
    }
  }
}
</style>
