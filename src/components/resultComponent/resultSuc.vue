<template>	
	<div id="resultsuc">
	<!-- <headerNoback header_title="提交成功"></headerNoback> -->
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
				{{result_text}}<br/>
			请注意订单状态的变化，及时处理！
			</span>
		</div>
	</div>
	<div class="order-result-btm">
		<a class="order-result-btn order-result-follow" @click="iosPlatForm">回到工作台</a>
		<!-- <a href="#" class="order-result-btn order-result-check">查看我的订单</a> -->
		 <router-link v-if="is_show==1" tag="a" :to="{ path:urlDetailMap[number], query:{ loan_id:loan_id,user_token:user_token,loan_mortgage_type:loan_mortgage_type,authority:authority,order_status:'advance',visit_id:visit_id,type:type }}" class="order-result-btn order-result-check">
		 查看我的订单
		 </router-link>
		  <a href="#" v-else class="order-result-btn order-result-check gray">查看我的订单</a>
	</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import headerNoback from '../headerComponent/HeaderNoback'
	import {urlParse} from '../../js/util'

	export default {
		data () {
			return {
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
				authority: (() => {
					let queryParam = urlParse();
					return queryParam.authority;
				})(),
				visit_id: (() => {
					let queryParam = urlParse();
					return queryParam.visit_id;
				})(),
				type: (() => {
					let queryParam = urlParse();
					return queryParam.type;
				})(),
				
				urlDetailMap:['/saledetail','/warrantDetail','/visitDetail','/notaryDetail','/mortdetail','/gpsCarDetail','/ceodetail'],
			}		
		},
    	components: {
	      headerNoback
	    },
	    props:["result_text","number"],
	    methods:{
	    	iosPlatForm :iosPlatForm,
	    	getIsShowBtn:getIsShowBtn,
	    },
	    mounted: function(){
	    	this.getIsShowBtn();
	    }
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

  function iosPlatForm() {
  	 var params = {};
    WebViewJavascriptBridge.callHandler('iosPlatForm',params,function(response) {
         // alert(response);
     });
  }

 function getIsShowBtn(){
   //用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/indexSuccessButton?loan_id='+this.loan_id+'&user_token='+this.user_token+'&type=warrant').then((response) => {
    	
    	response = response.body;
    	if(response.code == 0){
    		this.is_show = response.data.success.is_show;
    		console.log(this.is_show);
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}
</script>
