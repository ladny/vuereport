<template>
	<div id="layerReject">
		<div class="layerMask"></div>
		<div class="layerCon">
			<h3>选择驳回的负责人</h3>
			<ul class="usermain">
				<li v-for="(item,index) in data" :class="{ 'active': isActive[index] }" @click="onActive(index)">
					{{item.type_name}}<br/>{{item.user_name}}
				</li>
			</ul>
			<textarea v-model.trim="ceo_comment" rows="2" placeholder="请输入驳回理由(140字内)" maxlength="140">
			</textarea>
			<p style="display:none">{{rejectdata}}</p>
			<div class="layerBtn">
				<a class="cancel" @click="closeMe">取消</a>
				<a class="ok" @click="submitLayer">提交</a>
			</div>
		</div>
	</div>
</template>

<script>
	import mui from '../../js/mui.min.js'

	export default {
		data () {
			return {
				sumselected:[],					
				data:{},
				rejectdata:[],
				ceo_comment:'',
				isActive: [],
			}
		},
		props: ['token','loanId','loanMortgageType'],
		methods: {
			closeMe:closeMe,
			submitLayer:submitLayer,
			getData:getData,
			onActive:onActive,
		},
	    mounted: function () {
	    	this.getData();
	    }
	}

	function closeMe(){
		this.$emit('layerSay',false)
	}

	 //获取数据信息
	  function getData() {
	  	//用户ID userId 订单ID loan_id code	0为成功，
	    this.$http.get(this.$store.state.apiUrl+'/ceo/ceoreject?user_token='+this.token+'&loan_id='+this.loanId).then((response) => {
	    	response = response.body;
	    	if(response.code == 0){
	    		this.data = response.data.ceo_reject_list;
	    		//console.log(this.data);
	    		this.data.forEach((element, index) => {
						this.isActive.push(element.isActive);
						//console.log(this.isActive);
						return;	
				})
	    	}else{
	    		mui.toast("请求失败!");
	    	}
	    })
	}

	//选择数据
	function onActive(index){
		this.isActive[index] = !this.isActive[index];
		// console.log(index+":"+this.isActive[index]);
		if(this.isActive[index]==true){
			this.rejectdata.push(index);
		}else{
			this.rejectdata.pop(index);
		}
		return;
	}
 
 //提交数据
	function submitLayer(){
		this.rejectdata=[];
		this.isActive.forEach((element, index) => {	
			console.log(element);
			if(element==true){
				this.rejectdata.push(index);
				// console.log(this.rejectdata);		
			}
			if(this.rejectdata==''||this.rejectdata==null){
				// console.log(this.rejectdata);
				mui.toast("请选择驳回负责人");
				return;	
			}		
		})
		// console.log(this.rejectdata);

		if(this.ceo_comment==''||this.ceo_comment==null){
			mui.toast("请填写驳回理由!");
			this.rejectdata=[];
			return;
		}

	    this.$http.get(this.$store.state.apiUrl+'/ceo/ceorejectsub?user_token='+this.token+'&loan_id='+this.loanId+'&rejectdata='+this.rejectdata+"&ceo_comment="+this.ceo_comment).then((response) => {
	    	console.log(this.rejectdata);
	    this.$router.push('/ceoSuccess?user_token='+this.token+'&loan_id='+this.loanId+'&loan_mortgage_type='+this.loanMortgageType);  	
	    }, (response) => {
	    	mui.toast("提交失败!");
  		})
	}

</script>
<style>
.mui-toast-message{background:#000000;color:#ffffff;}
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
.usermain{
	font-size: 0.346667rem;
	color: #b5b5b5;
	margin-left: -19px;
}
.usermain li{
	float: left;
	border: 1px solid #b5b5b5;
	border-radius: 3px;
	padding: 5px 10px;
	margin: 6px 0 6px 18px;
	line-height: 16px;
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

li.active{
	background: #ebf8ff;
	border: 1px solid #0ea3f0;
	color: #0ea3f0;
}

</style>