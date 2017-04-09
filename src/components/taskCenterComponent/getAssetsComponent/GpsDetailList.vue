<template>
	<div id="">
		<div v-title>资产回收-GPS拆卸</div>
		<div class="gap"></div>
		<div class="gps-car-brand">京A123456</div>
		<div class="gps-list">
			<ul>
				<li class="list-item">
					<div class="list-item-title">
						<i class="v2_1bg abnormal-gps"></i>电瓶或者保险箱<span class="fr take-back" @click="isGpsLayerModel">回收</span>
					</div>
					<dl class="gps gps-status">
						<dt class="gps-status-code">状态：</dt>
						<dd class="">/</dd>
					</dl>
					<dl class="gps gps-code">
						<dt class="gps-status-code">编号：</dt>
						<dd class="">2016029299221600001</dd>
					</dl>
				</li>
				<li class="list-item">
					<div class="list-item-title">
						<i class="v2_1bg good-gps"></i>电瓶或者保险箱<span class="v2_1bg wait-storage"></span>
					</div>
					<dl class="gps gps-status">
						<dt class="gps-status-code">状态：</dt>
						<dd class="">初检正常</dd>
					</dl>
					<dl class="gps gps-code">
						<dt class="gps-status-code">编号：</dt>
						<dd class="">2016029299221600001 <i class="open-btn" :class="{open:show}" @click="toggle"></i></dd>
					</dl>
					<dl class="gps remark" v-show="show">
						<dt class="gps-status-code">备注：</dt>
						<dd class="">剩余工时100，能再次使用，放回库 存备用</dd>
					</dl>
				</li>
				<li class="list-item">
					<div class="list-item-title">
						<i class="v2_1bg abnormal-gps"></i>电瓶或者保险箱<span class="v2_1bg waited-storage"></span>
					</div>
					<dl class="gps gps-status">
						<dt class="gps-status-code">状态：</dt>
						<dd class="">初检无电</dd>
					</dl>
					<dl class="gps gps-code">
						<dt class="gps-status-code">编号：</dt>
						<dd class="">2016029299221600001 <i class="open-btn" :class="{open:show}" @click="toggle"></i></dd>
					</dl>
					<dl class="gps remark" v-show="show">
						<dt class="gps-status-code">备注：</dt>
						<dd class="">剩余工时100，能再次使用，放回库 存备用</dd>
					</dl>
				</li>
				<li class="list-item">
					<div class="list-item-title">
						<i class="v2_1bg abnormal-gps"></i>电瓶或者保险箱<span class="v2_1bg give-up-back"></span>
					</div>
					<dl class="gps gps-status">
						<dt class="gps-status-code">状态：</dt>
						<dd class="">初检无电</dd>
					</dl>
					<dl class="gps gps-code">
						<dt class="gps-status-code">编号：</dt>
						<dd class="">2016029299221600001 <i class="open-btn" :class="{open:show}" @click="toggle"></i></dd>
					</dl>
					<dl class="gps remark" v-show="show">
						<dt class="gps-status-code">备注：</dt>
						<dd class="">剩余工时100，能再次使用，放回库存备用</dd>
					</dl>
				</li>
			</ul>
		</div>

		<taskAlert v-show="isGpsLayer" v-on:gpsLayer="gpsListenLayer"></taskAlert>

		<div class="bottom-btn">
			<div class="save"><i class="v2_1bg save-icon"></i></div>
			<router-link tag="div" :to="{path:'/gpsLossAssess'}" class="go-next">下一步</router-link>
		</div>
		
	</div>
</template>
<script>
	import taskAlert from '../alertComponent/TaskAlert.vue'

	export default {
		data(){
			return {
				show:false,
				isGpsLayer:false
			}
		},
		methods:{
			toggle(){
				this.show = !this.show;
			},
			isGpsLayerModel, //Gps回收弹层
			gpsListenLayer
		},
		components:{
			taskAlert
		}
		
	}
	//Gps回收弹层
	function isGpsLayerModel(){
		this.isGpsLayer = true;
	}

	function gpsListenLayer(flag){
		this.isGpsLayer = flag;
	}
</script>
<style>
	.gap{
		height: 0.266667rem;
	}
	.gps-car-brand{
		height: 3.173333rem;
		line-height: 3.173333rem;
		background: #fff;
		font-size: 0.733333rem;
		text-align: center;
		color: #e14f50;
	}
	.gps-list{
		padding: 0 0.4rem 0 0.453333rem;
	}
	.gps-list .list-item{
		font-size: 0.373333rem;
		background: #fff;
		margin-top: 0.266667rem;
	}
	.list-item .list-item-title{
		height: 1.053333rem;
		line-height: 1.053333rem;
		margin-left: 0.4rem;
		border-bottom: 1px solid #dedede;
		position: relative;
	}
	.gps-list .list-item .remark{
		transition: all 1s;
		background: #ececec;
		padding: 0.213333rem 1.146667rem 0.32rem 0;
	}
	.list-item .list-item-title .wait-storage,.list-item .list-item-title .waited-storage,.list-item .list-item-title .give-up-back{
		position: absolute;
		right: 0;
		top: -0.093333rem;
		width: 1.92rem;
		height: 0.72rem;
	}
	.list-item .list-item-title .wait-storage{
		background-position: 0 -0.826667rem;
	}
	.list-item .list-item-title .waited-storage{
		background-position: 0 -1.613333rem;
	}
	.list-item .list-item-title .give-up-back{
		background-position: 0 -2.4rem;
	}
	.list-item .list-item-title .abnormal-gps{
		display: inline-block;
		background-position: 0 -3.893333rem;
		width: 0.586667rem;
		height: 0.4rem;
		margin: 0 0.533333rem 0 0.16rem;
		vertical-align: middle;
	}
	.list-item .list-item-title .good-gps{
		display: inline-block;
		width: 0.586667rem;
		height: 0.453333rem;
		margin: 0 0.546667rem 0 0.16rem;
		background-position: 0 -4.36rem;
		vertical-align: middle;
	}
	.take-back{
		width: 1.466667rem;
		color: #0ea3f0;
		font-size: 0.32rem;
		text-align: center;
	}
	.gps-status,.gps-code{
		line-height: 0.48rem;
	}
	.gps{
		display: flex;
	}
	.gps-status{
		margin-top: 0.186667rem;
	}
	.gps-code{
		margin-top: 0.32rem;
		padding-bottom: 0.373333rem;
	}
	.gps-code .open-btn{
		display: inline-block;
		width: 0.373333rem;
		height: 0.213333rem;
		margin-left: 0.666667rem;
		background: url(../../../imgs/open.png) no-repeat;
		background-size: contain;
		transform-origin: center center;
		transform: rotate(180deg);
		transition: all 1s ease;
	}
	.gps-code .open{
		transform: rotate(0deg);
	}
	.gps-status-code{
		color: #999;
		width: 1.706667rem;
		text-align: center;
	}

	.bottom-btn{
		width:100%;
		height: 1.333333rem;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: flex-end;
	}
	.bottom-btn .save{
		width: 2.133333rem;
		height: 1.573333rem;
		text-align: center;
		background: #fff;
		box-shadow: 0px 0px 10px #d8effc;
	}
	.bottom-btn .save .save-icon{
		display: inline-block;
		width: 0.666667rem;
		height: 0.64rem;
		margin-top: 0.48rem;
		background-position: 0 -3.186667rem;
	}
	.bottom-btn .go-next{
		height: 1.333333rem;
		line-height: 1.333333rem;
		background: #13a4f2;
		text-align: center;
		color: #fff;
		flex: 1;
	}
</style>