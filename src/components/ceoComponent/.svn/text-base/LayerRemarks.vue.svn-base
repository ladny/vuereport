<template>
	<div id="layerRemarks">
		<div class="layerMask"></div>
		<div class="layerCon">
			<h3>填写备注信息</h3>
			<textarea v-model.trim="ceo_comment" rows="3" placeholder="请输入备注信息(140字内)" maxlength="140">
			</textarea>
			<div class="layerBtn">
				<a class="cancel" v-on:click="closeMe">取消</a>
				<a class="ok" v-on:click="submitLayer">提交</a>
			</div>
		</div>
	</div>
</template>

<script>
import mui from '../../js/mui.min.js'
	export default {
		data () {
			return {
				ceo_comment:"",
			}
		},
		props: ['token','loanId','loanMortgageType'],
		methods: {
			closeMe:closeMe,
			submitLayer:submitLayer
		}
	}

	function closeMe(){
		this.$emit('layerSay',false)
	}

	function submitLayer(){
		if(this.ceo_comment==''||this.ceo_comment==null){
			mui.toast("请填写备注信息!");
			return;
		}
		 this.$http.get(this.$store.state.apiUrl+'/ceo/ceopass?user_token='+this.token+'&loan_id='+this.loanId+"&ceo_comment="+this.ceo_comment).then((response) => {	
		 		console.log(this.ceo_comment);
	    		this.$router.push('/ceoSuccess?user_token='+this.token+'&loan_id='+this.loanId+'&loan_mortgage_type='+this.loanMortgageType); 	
	    }, (response) => {
	    	mui.toast("提交失败!");
  		})
	}

</script>
<style>
	/* layer */
.layerMask{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,0.7);
	z-index: 100;
}
.layerCon{
	position: fixed;
	z-index: 101;
	left: 50%;
	top: 50%;
	background: #ffffff;
	text-align: center;
	border-radius: 13px;
	-webkit-transform: translate(-50%, -50%);
	width: 8.0rem;
	padding: 0.533333rem;
}
.layerCon h3{
	font-size: 0.453333rem;
	color: #444444;
}
.layerCon textarea{
	margin-top: 0.266667rem;
	font-size: 0.346667rem;
}
.layerBtn{
	display: flex;
}
.layerBtn a{
	flex: 2;
	font-size: 0.453333rem;
	height: 1.013333rem;
	line-height: 1.013333rem;
	text-align: center;
	border-radius: 5px;
	margin: 0 10px;
}
.layerBtn a.cancel{
	color: #999999;
	width: 2.4rem;
	border: 1px solid #b5b5b5;
}
.layerBtn a.ok{
	color: #ffffff;
	width: 2.4rem;
	background: #0ea3f0;
	border: 1px solid #0ea3f0;
}
</style>