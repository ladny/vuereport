<template>
	<div id="alert">
		<div class="layerMask"></div>
		<div class="layerCon layer-task">
			<h3>GPS状态</h3>
			<ul class="gps-status clearfix">
				<li v-for="(item,index) in status" :class="{ 'active': isActive[index] }" @click="onActive(index)">
					{{item}}
				</li>
			</ul>
			<textarea v-model.trim="gps_comment" rows="2" placeholder="备注：最多30字" maxlength="30">
			</textarea>
			<p style="display:none">{{causedata}}</p>
			<div class="layerBtn">
				<a class="cancel" @click="closeMe">取消</a>  
				<a class="ok" @click="">确定</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				gps_comment:'',
				causedata:[],
				isActive:[],
				status:['正常','无电','自损','客损','驻留','丢失']
			}
		},
		methods:{
			closeMe
		}
	}

	function closeMe(){
		this.$emit('gpsLayer',false)
	}
</script>
<style>
	.layer-task{
		padding: 0.4rem 0.706667rem;
	}
	.layer-task h3{
		line-height: 0.64rem;
		font-size: 0.373333rem;
		color: #444;
	}
	.gps-status li{
		width: 1.573333rem;
		height: 0.906667rem;
		line-height: 0.906667rem;
		margin-top: 0.4rem;
		color: #b5b5b5;
		text-align: center;
		float: left;
		font-size: 0.333333rem;
		border: 1px solid #ccc;
		border-radius: 3px;
	}
	.gps-status li:nth-child(2),.gps-status li:nth-child(5){
		margin-left: 0.893333rem;
		margin-right: 0.893333rem;
	}
	.layer-task textarea{
		margin: 0.533333rem 0;
	}
</style>