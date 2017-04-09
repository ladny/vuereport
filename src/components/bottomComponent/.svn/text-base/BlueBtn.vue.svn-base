<template>
<div class="blueBtn">
	<div v-if="isGet==0" class="pawnbtn">
		<!-- 销售抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.button.is_show==0}" v-if="authority=='JS00004'" @click="grabSingleSale(btnList.button.is_show)">我要抢单</a>

		<!-- 公证抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.is_show==0}" v-if="authority=='JS00010'" @click="grabSingleNotary(btnList.is_show)">我要抢单</a>

		<!-- 抵押抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.is_show==0}" v-if="authority=='JS00011'" @click="grabSingleMort(btnList.is_show)">我要抢单</a>

		<!-- GPS抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.is_show==0}" v-if="authority=='JS00012'" @click="grabSingleGPS(btnList.is_show)">我要抢单</a>

		<!-- 权证抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.button.is_show==0}" v-if="authority=='JS00008'" @click="grabSingleWarrant(btnList.button.is_show)">我要抢单</a>

		<!-- 家访抢单 -->
		<a class="pawnbtnlink" :class="{gray:btnList.is_show==0}" v-if="authority=='JS00009'" @click="grabSingleVisit(btnList.is_show)">我要抢单</a>

	</div>
	<div v-else>
	<!-- 销售 -->
		<div class="pawnbtn" v-if="authority=='JS00004'">
			<div v-for="(item,index) in btnList.seller" class="pawnbtnlink" :class="{gray:item.is_show==0}">
				<a v-if="index==0" @click="iosmycall" class="pawnbtnlink">通话</a>
				<a v-if="index==1" @click="sellStop(item.is_show)">终止</a>
				<a v-if="index==2" @click="rewrite(item.is_show)">补录</a>
				<a v-if="index==3" @click="writedata(item.is_show)">展业</a>
			</div>
		</div>

	<!-- 公证 -->
		<div class="pawnbtn" v-if="authority=='JS00010'" v-show="btnList!=''">
			<div class="pawnbtnlink" :class="{gray:btnList.is_show==0}" @click="iosNotary(btnList.is_show)">
				{{btnList.name}}
			</div>
		</div>

    <!-- 抵押 -->
		<div class="pawnbtn" v-if="authority=='JS00011'" v-show="btnList!=''">
			<div class="pawnbtnlink" :class="{gray:btnList.is_show==0}" @click="iosMort(btnList.is_show)">
				{{btnList.name}}
			</div>
		</div>

    <!-- GPS -->
		<div class="pawnbtn" v-if="authority=='JS00012'" v-show="btnList!=''">
			<div class="pawnbtnlink" :class="{gray:btnList.is_show==0}" @click="iosGps(btnList.is_show)">
				{{btnList.name}}
			</div>
		</div>

    <!-- 权证 -->
		<div class="pawnbtn" v-if="authority=='JS00008'">
			<div v-for="(item,index) in btnList.warrant" class="pawnbtnlink" :class="{gray:item.is_show==0}">
				<a v-if="index==0" :class="{gray:item.is_show==0}" @click="iosWarrant(item.is_show)">{{item.name}}</a>
				<!-- <a v-if="index==1" :class="{gray:item.is_show==0}" @click="iosContent(item.is_show)">修改合同</a> -->
				<a v-if="index==1" :class="{gray:item.is_show==0}" @click="sellStop(item.is_show)">终止</a>
			</div>
		</div>

	<!-- 家访 -->
		<div class="pawnbtn" v-if="authority=='JS00009'" v-show="btnList!=''">
			<div class="pawnbtnlink" :class="{gray:btnList.is_show==0}" @click="iosVisit(btnList.is_show)">
				{{btnList.name}}
			</div>
		</div>

	<!-- CEO -->
		<div class="pawnbtn" v-if="authority=='JS00013'" v-show="isCeoDeal">
			<div class="pawnbtnlink" @click="isceoLayerModel">驳回</div>
			<div class="pawnbtnlink" @click="isceoLayerPass">通过</div>
		</div>


	</div>

	<!-- 销售终止交互 -->
	<saleStopLayer v-show="isSaleLayer" v-on:saleLayerSay='saleListenLayer' :token="user_token" :loanId="loan_id" :authority="authority"></saleStopLayer>

	<!-- CEO驳回交互 -->
	<layerReject v-show="isCeoLayer" v-on:layerSay='ceolistenLayer' :token="user_token" :loanId="loan_id" :authority="authority" :loanMortgageType='loan_mortgage_type'></layerReject>

	<!-- CEO通过交互 -->
	<layerRemarks v-show="isRemarks" v-on:layerSay='ceolistenRemarks' :token="user_token" :loanId="loan_id" :loanMortgageType='loan_mortgage_type' ></layerRemarks>

</div>
</template>
<script>
import saleStopLayer from './saleStopLayer'
import layerReject from '../ceoComponent/LayerReject'
import layerRemarks from '../ceoComponent/LayerRemarks'
import mui from '../../js/mui.min.js'


	export default {
		data() {
			return {
				isSaleLayer:false,
				isCeoLayer:false,
				isRemarks:false,
			}
		},
		props: ['isGet','btnList','authority','user_token','loan_id','loan_mortgage_type','visit_id','type','isCeoDeal','user_name','funder_name','user_mobile','gpstype'],
		components: {
	      saleStopLayer,
	      sellStop,
	      layerReject,
	      layerRemarks
	    },
	    methods:{
	    	isSaleLayerModel:isSaleLayerModel,//终止交互
	    	saleListenLayer:saleListenLayer,//终止交互
	    	grabSingleSale:grabSingleSale,//销售抢单
	    	iosmycall:iosmycall,//通话
	    	sellStop:sellStop,//终止
	    	writedata:writedata,//补录
	    	rewrite:rewrite,//展业
	    	iosNotary:iosNotary,//公证IOS
	    	iosMort:iosMort,//抵押IOS
	    	iosGps:iosGps,//GPS
	    	iosVisit:iosVisit,//家访
	    	iosWarrant:iosWarrant,//权证
	    	iosContent:iosContent,//修改合同
	    	grabSingleNotary:grabSingleNotary,//公证抢单
	    	grabSingleMort:grabSingleMort,//抵押抢单
	    	grabSingleGPS:grabSingleGPS,//GPS抢单
	    	grabSingleWarrant:grabSingleWarrant,//权证抢单
	    	grabSingleVisit:grabSingleVisit,//家访抢单
	    	isceoLayerModel:isceoLayerModel,//CEO
	    	ceolistenLayer:ceolistenLayer,//CEO
	    	ceolistenRemarks:ceolistenRemarks,//CEO
	    	isceoLayerPass:isceoLayerPass//CEO
	    },
	}

//销售交互
  function isSaleLayerModel(){
  	this.isSaleLayer = true;
  }

  function saleListenLayer(flag){
  	this.isSaleLayer = flag;
  }

  function sellStop(flag){
  	if(flag==1){
  		this.isSaleLayerModel();
  	}
  }

/*!
  CEO交互驳回弹出层
  */
  function isceoLayerModel(){
  	this.isCeoLayer = true;
  }

  function ceolistenLayer(flag){
  	this.isCeoLayer = flag;
  }

  function isceoLayerPass(){
  	this.isRemarks = true;
  }

   function ceolistenRemarks(flag){
  	this.isRemarks = flag;
  }


// 补录 对接PHP
  function rewrite(flag){
  		if(flag==1){
  			location.href=this.$store.state.mUrl+"/myorder/assessloan?loan_id="+this.loan_id;
  		}	
	  }

// 销售抢单
  function grabSingleSale(flag){
       if(flag==1){
			this.$http.get(this.$store.state.apiUrl+'/loan/grabSingle?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {	
				response = response.body;
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!");
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {
							response = response.body;
							if(response.code == 0){
								this.btnList=response.data.ButtonShow;
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
  }
}


// 公证抢单
function grabSingleNotary(flag) {
 if(flag==1){
			this.$http.get(this.$store.state.apiUrl+'/loan/notarySingle?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {	
				response = response.body;
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!"); 
					// console.log('抢单成功!');
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {
							response = response.body;
							if(response.code == 0){
								// console.log('更新抢单成功!');
								this.btnList=response.data.ButtonShow.button;
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
  	}
}

//抵押抢单
function grabSingleMort(flag) {
 if(flag==1){
			this.$http.get(this.$store.state.apiUrl+'/loan/mortgageSingle?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {	
				response = response.body;
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!"); 
					// console.log('抢单成功!');
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {
							response = response.body;
							if(response.code == 0){
								// console.log('更新抢单成功!');
								this.btnList=response.data.ButtonShow.button;
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
  	}
}

//GPS抢单  
function grabSingleGPS(flag) {
 if(flag==1){
	this.$http.get(this.$store.state.apiUrl+'/loan/gpsSingle?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {	
				response = response.body;
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!"); 
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {
							response = response.body;
							if(response.code == 0){
								this.btnList=response.data.ButtonShow.button;
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
  	}
}

//权证抢单
function grabSingleWarrant(flag) {
 if(flag==1){
	this.$http.get(this.$store.state.apiUrl+'/loan/warrantSingle?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {	
				response = response.body;
				console.log('进入抢单!');
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!"); 
					// console.log('抢单成功!');
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id).then((response) => {
							response = response.body;
							if(response.code == 0){
								this.btnList=response.data.ButtonShow;
								// console.log(this.btnList);
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
  	}
}

//家访抢单
function grabSingleVisit(flag) {
 if(flag==1){
	this.$http.get(this.$store.state.apiUrl+'/loan/houseSingle?user_token='+this.user_token+'&loan_id='+this.loan_id+'&visit_id='+this.visit_id+'&type='+this.type).then((response) => {	
				response = response.body;
				if(response.code == 0){
					this.isGet=1;
					mui.toast("抢单成功!"); 
					this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?user_token='+this.user_token+'&loan_id='+this.loan_id+'&visit_id='+this.visit_id+'&type='+this.type).then((response) => {
							console.log(response);
							response = response.body;
							if(response.code == 0){
								this.btnList=response.data.ButtonShow.button;
							}
				    }, (response) => {
				    	mui.toast("抢单操作失败!");
						})
				}
	    }, (response) => {
	    	mui.toast("抢单操作失败!");
  		})
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
// 展业
  function writedata(flag) {
  	if(flag==1){
    var params = {'loan_id':this.loan_id.toString(),'authority':this.authority.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString()};
    WebViewJavascriptBridge.callHandler('writedata',params,function(response) {
         // alert(response);
     });
	}
}

//通话
function iosmycall(flag){	
 	var params = {'user_mobile':this.user_mobile.toString()};
    WebViewJavascriptBridge.callHandler('iosmycall',params,function(response) {
         // alert(response);
     });
}
// 公证
  function iosNotary(flag) {
  	if(flag==1){
  	 var params = {'loan_id':this.loan_id.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString(),'authority':this.authority.toString(),'user_name':this.user_name.toString(),'funder_name':this.funder_name.toString()};
    WebViewJavascriptBridge.callHandler('iosNotary',params,function(response) {
         // alert(response);
     });
}
  }

//抵押
function iosMort(flag) {
	if(flag==1){
	var params = {'loan_id':this.loan_id.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString(),'authority':this.authority.toString(),'user_name':this.user_name.toString(),'funder_name':this.funder_name.toString()};
    WebViewJavascriptBridge.callHandler('iosMort',params,function(response) {
         // alert(response);
     });
}
}

// GPS
function iosGps(flag){
	if(flag==1){
	var params = {'loan_id':this.loan_id.toString(),'authority':this.authority.toString(),'gpstype':this.gpstype.toString()};
    WebViewJavascriptBridge.callHandler('iosGps',params,function(response) {
         // alert(response);
     });
}
}

//家访
function iosVisit(flag){
	if(flag==1){
	var params = {'loan_id':this.loan_id.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString(),'authority':this.authority.toString(),'type':this.type.toString(),'visit_id':this.visit_id.toString()};
    WebViewJavascriptBridge.callHandler('iosVisit',params,function(response) {
         // alert(response);
     });
}
}


//权证
function iosWarrant(flag) {
	if(flag==1){
		var params = {'loan_id':this.loan_id.toString(),'authority':this.authority.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString()};
	    WebViewJavascriptBridge.callHandler('iosWarrant',params,function(response) {
	         // alert(response);
	     });
	}
}

//修改合同
function iosContent(flag) {
	if(flag==1){
		var params = {'loan_id':this.loan_id.toString(),'loan_mortgage_type':this.loan_mortgage_type.toString()};
	    WebViewJavascriptBridge.callHandler('iosContent',params,function(response) {
	         // alert(response);
	     });
	}
}



</script>
<style>
/*body{
	position: relative; 
	height: 100%;
}*/
.blueBtn{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 30;
}
/*多态按钮*/
.pawnbtn{
	display: flex;
	margin-left: -1px;
	height: 1.333333rem;
	line-height:1.333333rem;
	font-size: 0.453333rem;
}
.pawnbtnlink{
	margin-left:1px;
	flex: 1;
	text-align: center;
	background: #0ea3f0;
	color: #ffffff;
}
.pawnbtnlink:active{
	color: #ffffff;
}
.gray{
	background: #cccccc;
}
</style>