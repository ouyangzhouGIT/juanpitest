<template>
  <ul class="jp-footer">
    <router-link
      tag="li"
      v-for="tabbar in tabbars"
      :key="tabbar.name"
      :to="tabbar.path"
      :event="$route.path.includes(tabbar.path) ? '' : 'click'"
    >
      <i class="icon" v-html="tabbar.meta.icon"></i>
      <span>{{tabbar.meta.title}}</span>
      <b v-if="tabbar.name === 'cart'" class="countItem">{{totalCount | countLt99}}</b>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tabbars: routes.filter(route => route.meta.isTabbar)
    }
  },
  computed: {
    ...mapGetters(['totalCount'])
  }
}
</script>

<style lang="scss" scoped>
.jp-footer {
  display: flex;
  border-top: 1px solid #dedede;
  height: 52px;
  justify-content: space-around;
  text-align: center;
  position: relative;
  i {
    display: block;
    font-size: 20px;
    line-height: 32px;
  }
  .countItem {
    position: absolute;
    height: 16px;
    left: 233px;
    top: 0;
    font-size: 12px;
    line-height: 16px;
    padding: 0 5px;
    border-radius: 8px;
    background: #e00;
    color: #fff;
  }
  span {
    font-size: 12px;
    line-height: 16px;
  }
  .router-link-exact-active,
  .router-link-active {
    color: #FF464E;
    i {
      color: #FF464E;
    }
  }
}

</style>
