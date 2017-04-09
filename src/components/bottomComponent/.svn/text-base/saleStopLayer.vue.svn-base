<template>
	<div class="saleStopLayer">
		<div class="layerMask"></div>
		<div class="layerCon">
			<h3>终止订单</h3>
			<select v-model="selected">
				<option v-for="item in data.log_cause_list">{{item}}</option>
			</select>
			<!-- {{selected}} -->
			<textarea v-model.trim="comment" rows="3" placeholder="请输入备注(选填),最多30字。" maxlength="30">
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
				data:{},
				comment:"",
				selected:"借款人不再借款",
			}
		},
		props: ['token','loanId','authority'],
		methods: {
			closeMe:closeMe,
			submitLayer:submitLayer,
			getData:getData
		},
		 mounted: function(){
	    	this.getData();
	    }
	}

	function closeMe(){
		this.$emit('saleLayerSay',false)
	}

  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

 setupWebViewJavascriptBridge(function(bridge) {
                 bridge.registerHandler('testJSFunction', function(data, responseCallback) {
                    // alert('JS方法被调用:'+data);
                    responseCallback('js执行过了');
                 })
            })

	function submitLayer(){
		if(this.comment==''||this.comment==null){
			mui.toast("请填写备注信息!");
			return;
		}
		//销售终止提交上传
		if(this.authority=='JS00004'){
			 this.$http.get(this.$store.state.apiUrl+'/loan/saleTerminated?user_token='+this.token+'&loan_id='+this.loanId+'&log_cause='+this.selected+"&log_comment="+this.comment+"&log_action_type=2").then((response) => {	
			 		// console.log(this.token);
			 		WebViewJavascriptBridge.callHandler('submitLayer');
			 		mui.toast("销售终止成功!");
		    		// this.$router.push('/?user_token='+this.token);   
		    }, (response) => {
		    	mui.toast("终止操作失败!");
	  		})
		}

		//权证终止提交上传
		if(this.authority=='JS00008'){	
			 this.$http.get(this.$store.state.apiUrl+'/loan/warrantTermination?user_token='+this.token+'&loan_id='+this.loanId+'&log_cause='+this.selected+"&log_comment="+this.comment+"&log_action_type=2").then((response) => {	
			 		// console.log(this.token);
			 		WebViewJavascriptBridge.callHandler('submitLayer');
			 		mui.toast("权证终止成功!");
		    		// this.$router.push('/?user_token='+this.token); 
		    }, (response) => {
		    	mui.toast("终止操作失败!");
	  		})
		}

		

	}

	function getData() {
		 this.$http.get(this.$store.state.apiUrl+'/loan/logCause').then((response) => {	
		 		response = response.body;
		 		this.data=response.data;
		 		// console.log(this.data.log_cause_list);
	    }, (response) => {
	    	mui.toast("获取失败");
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
select{
	margin-bottom: 10px;
}

</style>