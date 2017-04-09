<template>
	<div id="taskcenterlist">
		<div v-title>任务中心</div>
		<div class="task-header mui-bar-tab">
			<a class="mui-tab-item mui-active">
		            待领取<i></i>
		    </a>
		    <a class="mui-tab-item">
		            未办结<i></i>
		    </a>
		    <a class="mui-tab-item">
		            已办结
		    </a>
		</div>
		<div class="task-num">待认领任务数23个</div>
		<ul class="task-tab-list">
			<router-link tag="li" :to="{path:'/getAssetsDetail'}" class="task-list-item">
				<div class="user-header-img">
					<img src="../../../imgs/header-img.png" alt="">
				</div>
				<div class="user-info">
					<div class="type">资产回收-GPS拆卸</div>
					<div class="user-name">
						<i class="v2_1bg icon1" v-if="0"></i><i class="v2_1bg icon2" v-else></i>张一山
					</div>
				</div>
				<div class="task-time">
					<span class="time">59分钟</span>
					<span class="status">滞留</span>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
	
</script>
<style>
	.task-header{
		height: 1.2rem;
		background: #fff;
	}
	.task-header .mui-tab-item{
		line-height: 0.533333rem;
		font-size: 0.373333rem;
		color: #444;
		position: relative;
	}
	.task-header .mui-tab-item i{
		position: absolute;
		height: 0.533333rem;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		border-left: 1px solid #ccc
	}
	.task-num{
		height: 0.826667rem;
		line-height: 0.826667rem;
		font-size: 0.293333rem;
		margin-left: 0.453333rem;
		color: #999;
	}
	.task-tab-list{
		padding-left: 0.453333rem;
		background: #fff;
	}
	.task-tab-list .task-list-item{
		height: 1.826667rem;
		border-bottom: 1px solid #e1e1e1;
		display: flex;
		align-items: center;
	}
	.task-list-item .user-header-img{
		width: 1.266667rem;
		height: 1.266667rem;
		margin: 0 0.24rem;
		border-radius: 50%;
		overflow: hidden;
	}
	.task-list-item .user-header-img>img{
		width: 100%;
		height: 100%;
	}
	.user-info,.task-time .time{
		font-size: 0.373333rem;
		color: #444; 
	}
	.user-info{
		flex: 2;
		height: 1.066667rem;
		border-right: 1px solid #e1e1e1;
		margin-left: 0.466667rem;
	}
	.task-time{
		flex: 1;
	}
	.user-info .user-name,.task-time .status{
		font-size: 0.32rem;
		color: #999;
	}
	.user-info .user-name .icon1,.user-info .user-name .icon2{
		display: inline-block;
		width: 0.533333rem;
		height: 0.346667rem;
		margin-right: 0.266667rem;
		vertical-align: middle;
	}
	.user-info .user-name .icon1{
		background-position: 0 0; 
	}
	.user-info .user-name .icon2{
		background-position: 0 -0.426667rem;
	}
	.task-time{
		text-align: center;
		margin: 0 auto;
	}
	.task-time>span{
		display: block;
	}
</style>