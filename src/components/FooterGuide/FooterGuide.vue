<template>
	<footer class="footerGuide">
		<a class="guideItem" @click="goto('/Home')">
			<span class="footerIcon">
				<i class="iconfont icon-home"></i>
			</span>
			<span clsaa="footerText">首页</span>
		</a>
		<a class="guideItem" @click="goto('/Cate')">
			<span class="footerIcon">
				<i class="iconfont icon-guizi"></i>
			</span>
			<span clsaa="footerText">分类</span>
		</a>
		<a class="guideItem" @click="goto('/Buy')">
			<span class="footerIcon">
				<i class="iconfont icon-zhaopian-copy"></i>
			</span>
			<span clsaa="footerText">值得买</span>
		</a>
		<a class="guideItem" @click="goto('/Cart')">
			<span class="footerIcon" >
				<i class="iconfont icon-gouwuche"></i>
			</span>
			<span clsaa="footerText">购物车</span>
		</a>
		<a class="guideItem" @click="goto('/Personal')">
			<span class="footerIcon">
				<i class="iconfont icon-geren"></i>
			</span>
			<span clsaa="footerText">个人</span>
		</a>
	</footer>
</template>

<script>
	export default {
		name: "FooterBar",
		methods: {
			goto(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	
	.footerGuide
		position fixed
		left 0
		bottom 0
		z-index 3
		width 100%
		height 98px
		border-top 1px solid #333
		display flex
		justify-content space-around
		align-items center
		.guideItem
			display flex
			flex-direction column
			align-items center
			.footerIcon
			font-size 40px
			.footerText
				height 24px
				margin-top 7px
			
		
</style>
