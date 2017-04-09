<template>
	<div id="gps-loss">
		<div class="gps-loss-num">
			<div class="loss-num">2</div>
			<div class="gps-loss-title">客户责任（个）</div>
		</div>
		<div class="bussinesser-info">
			<span class="bussiness">业务经理:</span><span class="bussiness-name">丰台公司-张三</span><i class="v2bg iphone"></i>
		</div>
		<div class="gps-tab-box">
			<div class="line">
				<i class="left" @click="onLeft"></i>
				<i class="right" @click="onRight"></i>
				<div class="scroll" :class="{scrollLeft:scrollLeft,scrollRight:scrollRight}"></div>
			</div>
		</div>
		<div class="loss-type">
			<div :class="{active:scrollLeft}">豁免赔偿</div>
			<div :class="{active:scrollRight}">定损设置</div>
		</div>
		<textarea class="comment" v-model.trim="gps_comment" rows="2" placeholder="备注：最多30字" maxlength="30"></textarea>
		<div class="loss-detail">
			<h3 class="loss-detail-title">定损明细：</h3>
			<dl class="loss-detail-item">
				<dt>编号：2016029299922 1699991 <i class="v2_1bg wifi"></i></dt>
				<dd>我是报废备注的原因，有几行显示几行，无不显示。</dd>
			</dl>
			<dl class="loss-detail-item">
				<dt>编号：2016029299922 1699991 <i class="v2_1bg wifi"></i></dt>
				<dd>我是报废备注的原因，有几行显示几行，无不显示。</dd>
			</dl>
		</div>
		<div class="bottom-btn">
			<div class="save"><i class="v2_1bg save-icon"></i></div>
			<router-link tag="div" :to="{path:'/gpsLossAssess'}" class="go-next">提交工单</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				gps_comment:'',
				scrollLeft:true,
				scrollRight:false
			}
		},
		methods:{
			onLeft(){
				this.scrollLeft = true;
				this.scrollRight = false;
			},
			onRight(){
				this.scrollLeft = false;
				this.scrollRight = true;
			}
		}
	}
</script>
<style>
	#gps-loss{
		padding: 0 0.453333rem;
	}
	.gps-loss-num{
		padding: 1.066667rem 0 1.6rem;
		text-align: center;
	}
	.gps-loss-num .loss-num{
		line-height: 1.453333rem;
		font-size: 1.2rem;
		color: #e14f50;
	}
	.gps-loss-num .gps-loss-title{
		line-height: 0.44rem;
		font-size: 0.306667rem;
		color: #444;
	}
	.gps-tab-box{
		height: 0.666667rem;
		text-align: center;
	}
	.gps-tab-box .line{
		width: 3.693333rem;
		height: 0.053333rem;
		display: inline-block;
		vertical-align: middle;
		background: #ccc;
		position: relative;
	}
	.left,.right{
		display:block;
		width: 0.186667rem;
		height: 0.186667rem;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #ccc;
	}
	.right{
		right: -0.186667rem;
	}
	.left{
		left: -0.186667rem;
	}
	.scroll{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 0.506667rem;
		height: 0.506667rem;
		box-shadow: 0 0 0.266667rem #ccc;
		background: #fff;
		border-radius: 50%;
		transition: all 10s ease-in;
	}
	.scrollLeft{
		left: -0.506667rem;
	}
	.scrollRight{
		right: -0.506667rem;
	}
	.loss-type{
		height: 0.826667rem;
		margin-top: 0.093333rem;
		font-size: 0.373333rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.loss-type .active{
		color: #0ea3f0;
	}
	.comment{
		font-size: 0.373333rem;
		max-height: 2.266667rem;
		margin:0.586667rem 0; 
	}
	.loss-detail{
		font-size: 0.373333rem;
		color: #444;
	}
	.loss-detail .loss-detail-title{
		line-height: 1.066667rem;
		font-size: 0.373333rem;
	}
	.loss-detail .loss-detail-item{
		margin-bottom: 0.4rem;
		line-height: 0.453333rem;
	}
	.loss-detail .loss-detail-item dd{
		margin-top: 0.2rem;
		color: #999;
	}
	.loss-detail .loss-detail-item .wifi{
		display: inline-block;
		width: 0.586667rem;
		height: 0.4rem;
		margin-left: 0.533333rem;
		margin-top: 0.026667rem;
		background-position: 0 -3.893333rem;
	}
</style>