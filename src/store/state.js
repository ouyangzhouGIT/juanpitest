export default {
  cart: JSON.parse(window.localStorage.getItem('jp-cart')) || [],
  userinfo: JSON.parse(window.localStorage.getItem('jp-userinfo')) || {
    id: '',
    displayName: '',
    avatar: '',
    token: ''
  }
}
