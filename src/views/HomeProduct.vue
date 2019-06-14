<template>
	<div class="jp-homeProduct"
		v-infinite-scroll="onLoadMore"
    infinite-scroll-distance="10"
	>
		<HomeProductItem
			v-for="item in list"
			:key="item.id"
			:id="item.id"
			:img="item.image"
			:price="item.price"
			:title="item.title"
			:tRight="item.saleNum"
		></HomeProductItem>
	</div>
</template>

<script>
import HomeProductItem from '@/components/HomeProductItem'
import * as ajax from '@/request'

export default {
	data () {
		return {
			list: [],
			start: 0,
			itemId: ''
		}
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.itemId = to.params.homeProductId
    })
  },
	beforeRouteUpdate (to, from, next) {
    // 从to的获取id值然后重新请求数据
		this.itemId = to.params.homeProductId
		this.start = 0
    this.list = []
	  next()
  },
	methods: {
		getHomeList () {
			ajax.getHomeList(this.start,this.itemId).then(resp => {
        this.list = this.list.concat(resp.data.data.list)
        this.start = resp.data.data.nextIndex
				}
			)
		},
		onLoadMore () {
			this.getHomeList()
		}
	},
	components: {
		HomeProductItem
	}
}
</script>

<style lang="scss" scoped>
.jp-homeProduct {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 70px;
	}
</style>
