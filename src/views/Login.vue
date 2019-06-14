<template>
  <div class="jp-register">
    <div class="jp-register-main">
      <div class="jp-register-header">
        <i class="icon" @click="goBack">&#xe643;</i>
        <span class="in">登录</span>
        <router-link tag="span" to="/register"><span class="out">注册</span></router-link>
      </div>
      <form>
        <input type="text" placeholder="手机/邮箱/用户名" class="user" id="username" v-model="username">
        <input type="password" placeholder="密码" class="pwd" id="password" v-model="password">
        <button class="btn" @click="onLogin">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions(['loginAction']),
    onLogin () {
      let username = this.username
      let password = this.password
      this.loginAction({ username, password })
      this.$router.back()
    },
    goBack () {

      const {from} = this.$route.params
      if (from) {
        this.$router.push('/')
      } else {
        this.$router.back()
      }
    }
  },
  watch: {
    isLogin (newV, oldV) {
      console.log(newV,oldV)
      if (newV === true) {
        const { from = '/' } = this.$route.params
        this.$route.push(from)
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
      background: #ff5a61;
      background: linear-gradient(150deg,#ff5a61 50%,#fd631c);

      i {
        width: 45px;
        color: #fff;
        font-size: 23px;
        line-height: 45px;
        float: left;
        margin-left: 10px;
      }

      .in {
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 45px;
        float: left;
        margin-left: 115px;
        color: #fff;
      }

      .out {
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 45px;
        float: right;
        margin-right: 15px;
        color: #fff;
      }
    }

    form {
      height: 120px;
      width: 100%;
      margin-top: 20px;
      padding: 0 10px;

      input {
        width: 330px;
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
