<template>
  <div class="jp-register">
    <div class="jp-register-main">
      <div class="jp-register-header">
        <i class="icon" @click="goBack">&#xe643;</i>
        <span class="out">注册</span>
      </div>
      <form>
        <input type="text" placeholder="请输入用户名" class="user" id="username">
        <input type="password" placeholder="请输入密码" class="pwd" id="password">
        <button class="btn">注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
  
  .jp-register {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-main {
      flex: 1;
      box-sizing: border-box;
    }

    .jp-register-header {
      height: 45px;
      width: 100%;
      border-bottom: 1px solid #efefef;

      i {
        width: 26px;
        height: 25px;
        font-size: 23px;
        margin-left: 10px;
        line-height: 45px;
      }

      .out {
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 45px;
        margin-left: 135px;
      }
    }
    form {
      height: 120px;
      width: 100%;
      margin-top: 20px;
      padding: 0 10px;

      input {
        width: 340px;
        height: 45px;
        border: none;
        outline: 0;
        border-bottom: 1.5px solid #fafafa;
        padding: 0 10px;
      }
      .btn {
        margin-top: 20px;
        height: 40px;
        width: 350px;
        background: #FF464E;
        color: #fff;
        line-height: 40px;
        text-align: center;
        border: none;
        outline: 0;
      }
    }
  }
</style>
