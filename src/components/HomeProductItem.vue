<template>
	<!-- <router-link tag="div" to></router-link> -->
		<div class="jp-homeProduct-item">
				<router-link :to="{path:'/detail',query:{id}}">
				<img :src="img" alt="">
				<p>
					<span class="jp-homeProduct-item-nowPrice">￥{{price}}</span>
				</p>
				<p>
					<span class="jp-homeProduct-item-title">{{title}}</span>
					<span class="jp-homeProduct-item-tRight">{{tRight}}人已买</span>
				</p>
			</router-link>
		</div>
		
		
	
</template>

<script>
export default {
	props: {
		id: Number,
		img: String,
		price: Number,
		title: String,
		tRight: Number
	}
}
</script>

<style lang="scss" scoped>
.jp-homeProduct {

	&-item {
		width: 49.5%;
		margin-bottom: 10px;
		
		a {
			font-size: 15px;
			// color: #ff464e;
			text-decoration: none;
			
			img {
				width: 100%;
			}
			
			p {
				display: flex;
				justify-content: space-between;
				margin-bottom: 5px;
				padding-left: 4px;
			}
		}
		&-nowPrice {
			color: #ff464e;
		}
		
		&-title {
			width: 60%;
			color: #333;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		
		&-tRight {
			color: #ccc;
			font-size: 12px;
		}
	}
}
</style>
