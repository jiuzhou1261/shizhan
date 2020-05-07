<template>
	<div class="homeContainer">
		<div class="header">
			<a class="logo"><img src="@/static/images/logo.png"></img></a>
			<div class="headerSearch">
				<div class="searchWrap">
					<i class="iconfont icon-fangdajing"></i>
					<span class="placeHolder">搜索商品,共24344款好物</span>
				</div>
			</div>
			<div class="loginBtn">登录</div>
		</div>
		<div class='homeNav' ref="wrapper">
			<div class="navScroll">
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
				<div class="navScrollItem">
					哈哈
				</div>
			</div>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		name: "Home",
		data() {
			return {
				
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {})
			})
		}
	}
</script>
padding: .21333rem .4rem;
<style lang="stylus" rel="stylesheet/stylus" scoped>
	.homeContainer
		width 100%
		height 100%
		.header
			width 690px
			height 56px
			padding 16px 30px
			display flex
			align-items center
			background #fff
			.logo
				margin-right 20px
				img
					width 138px
					height 40px
			.headerSearch
				display flex
				align-items center
				justify-content space-around
				width 442px
				height 100%
				font-size 28px
				background #EDEDED
				border-radius 5px
				.searchWrap
					.iconfont
						margin-right 10px
			.loginBtn
				width 74px
				height 40px
				margin-left 16px
				font-size 24px
				color #dd1a21
				border 1px solid #dd1a21
				border-radius 5px
				white-space nowrap
				text-align center
				line-height 40px
				
				
				
				
				
		.homeNav
			width 100%
			height 60px
			border 1px solid #333333
			box-sizing border-box
			.navScroll
				display inline-flex
				height 100%
				padding 0px 30px
				.navScrollItem
					
					border 1px solid #333333
					height 100%
					font-size 28px
					line-height 60px
					padding 0px 16px
					white-space nowrap
	
	
	
	
	
	
	
	.hahahhahahhhhhhhh
				width 100px
</style>
