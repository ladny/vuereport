<template>
	<div id="grab-single">
		<div class="get-assets">
			<div v-title>资产回收-GPS拆卸</div>
			<div class="take-down-time">
				<span class="time">11-29&nbsp;5:00</span>
				<span class="time-info">拆卸时间（约）</span>
			</div>
			<div class="bussinesser-info">
				<span class="bussiness">业务经理:</span><span class="bussiness-name">丰台公司-张三</span><i class="v2bg iphone"></i>
			</div>
			<div class="car-msg">
				<div class="car">
					<img src="../../../imgs/car.png" alt="">
				</div>
				<div class="car-info">
					<span class="car-user">张一山</span><span class="car-brand">京A123456</span>
				</div>
			</div>
			<div class="tips">
				<div>GPS安装信息</div>
				<div class="tips-point">领取任务后可查看GPS安装信息</div>
			</div>
		</div>
		<div class="task-btn">
			<router-link tag="a" :to="{path:'/goTask'}" class="task-btn-link">我要抢单</router-link>
		</div>
	</div>
</template>
<script>
	import taskBtn from '../../bottomComponent/taskBtn.vue'

	export default {
		data(){
			return {

			}
		},
		components:{
			taskBtn
		}
	}
</script>
<style>
	.get-assets{
		padding: 0 0.44rem;
	}
	.take-down-time{
		text-align: center;
		margin-top: 1.813333rem;
		margin-bottom: 1.666667rem;
	}
	.take-down-time .time{
		font-size: 0.586667rem;
		color: #e14f50;
		display: block;
	}
	.take-down-time .time-info{
		display: block;
		margin-top: 0.453333rem;
		font-size: 0.293333rem;
		color: #5a5a5a;
	}
	.bussinesser-info{
		font-size: 0.346667rem;
		margin-bottom: 1.066667rem;
	}
	.bussinesser-info .bussiness{
		margin-left: 0.4rem;
		color: #999;
	}
	.bussiness-name{
		color: #444;
		margin-left: 0.4rem;
	}
	.bussinesser-info .iphone{
		display: inline-block;
		width: 0.546667rem;
		height: 0.546667rem;
		vertical-align: middle;
		margin-left: 64px;
		background-position: -0.106667rem -11.666667rem;
	}
	.car-msg{
		width: 100%;
		height: 3.6rem;
		position: relative;
	}
	.car-msg .car{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.car-msg .car>img{
		width: 100%;
	}
	.car-msg .car-info{
		position: absolute;
		bottom: 0;
		left: 0;
		width:100%;
		height: 0.933333rem;
		line-height: 0.933333rem;
		background: rgba(83,83,83,.8);
		color: #fff;
		font-size: 0.373333rem;
	}
	.car-info .car-user{
		margin-left: 0.8rem;
		margin-right: 0.72rem;
	}
	.tips{
		font-size: 0.373333rem;
		color: #444;
		margin-top: 0.933333rem;
	}
	.tips .tips-point{
		margin-top: 0.4rem;
	}
	.task-btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
		text-align: center;
		font-size: 0.426667rem;
		background: #23a5f8;
		z-index: 30;
	}
	.task-btn-link{
		color: #fff;
	}
</style>