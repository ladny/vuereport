<template>	
	<div id="warrantsuc">
	<div v-title>提交成功</div>
		<div class="order-result">
			<div class="order-result1">
				<span class="resultsuc"></span>
				<div class="order-result-msg v2-order-resultsuc">
					提交成功
				</div>
			</div>
			<div class="order-result2">
				<span class="order-icon-tip"></span>
				<span class="order-result-subtip">
					{{warrant_name}}<br/>
				请注意订单状态的变化，及时处理！
				</span>
			</div>
		</div>
		<div class="order-result-btm">
			<a class="order-result-btn order-result-follow" @click="iosWarrantPlatForm">回到工作台</a>
			 <router-link v-if="is_show==1" tag="a" :to="{ path:'/warrantDetail', query:{ loan_id:loan_id,user_token:user_token,loan_mortgage_type:loan_mortgage_type,authority:'JS00008',order_status:'advance'}}" class="order-result-btn order-result-check">
			 查看我的订单
			 </router-link>
			 <a href="#" v-else class="order-result-btn order-result-check gray">查看我的订单</a>

		</div>

	</div>
</template>

<script type="text/ecmascript-6">
import {urlParse} from '../../js/util'
	export default {
	    data () {
	    	return {
	    		data:{},
	    		warrant_name:'权证许可驳回！',
	    		is_show:'',
	    		loan_id: (() => {
					let queryParam = urlParse();
					return queryParam.loan_id;
				})(),
				user_token: (() => {
				let queryParam = urlParse();
					return queryParam.user_token;
				})(),
				loan_mortgage_type: (() => {
				let queryParam = urlParse();
					return queryParam.loan_mortgage_type;
				})(),
	    	}
	    },
	    methods:{
	    	getData:getData,
	    	getIsShowBtn:getIsShowBtn,
	    	iosWarrantPlatForm:iosWarrantPlatForm,
	    },
	    mounted: function(){
	    	this.getData();
	    	this.getIsShowBtn();
	    }
  }
  //获取数据信息
  function getData(){
   //用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getWarrantInfo?loan_id='+this.loan_id+'&user_token='+this.user_token).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.data = response.data.warrantInfo;
    		// this.warrant_name='权证许可成功，您已下发'+ this.data.warrant_name+ '指令！';
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}


  function getIsShowBtn(){
   //用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/indexSuccessButton?loan_id='+this.loan_id+'&user_token='+this.user_token+'&type=warrant').then((response) => {
    	console.log("getIsShowBtn");
    	response = response.body;
    	if(response.code == 0){
    		this.is_show = response.data.success.is_show;
    		if(this.is_show==1){
    			this.warrant_name='权证许可成功，您已下发'+ this.data.warrant_name+ '指令！';
    		}
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}







  // H5与IOS交互
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

  function iosWarrantPlatForm() {
  	 var params = {};
    WebViewJavascriptBridge.callHandler('iosWarrantPlatForm',params,function(response) {
         // alert(response);
     });
  }
</script>

	<style>
.gray{
	background: #cccccc;
	border: 1px solid #cccccc;
}
	</style>