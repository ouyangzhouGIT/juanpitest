import * as ajax from '@/request'
export default {
  loginAction (ctx, userinfo) {
    ajax.login(userinfo).then(resp => {
      console.log(resp.data.data.data)
      window.localStorage.setItem('jp-userinfo', JSON.stringify(resp.data.data.data.userinfo))
      ctx.commit('toggleIsLogin', resp.data.data.data.userinfo)
    })
  }
}
