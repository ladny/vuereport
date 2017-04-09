<template>
	<div class="cloudlist">
	<div v-title>{{titleMap[this.titleid]}}</div>
	<!-- <headerBack :header_title="titleMap[this.titleid]"></headerBack> -->
		<div id="tab_nav" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
		      <div class="mui-scroll">
		        <a class="mui-control-item" :class="{'mui-active':isActive[0]}" @click="getData(0,'JS00004')">
		            销售
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[1]}" @click="getData(1,'JS00008')">
		            权证
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[2]}" @click="getData(2,'JS00009')">
		            家访
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[3]}" @click="getData(3,'JS00010')">
		            公证
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[4]}" @click="getData(4,'JS00011')">
		            抵押
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[5]}" @click="getData(5,'JS00012')">
		            GPS
		        </a>
		        <a class="mui-control-item" :class="{'mui-active':isActive[6]}" @click="getData(6,'JS00013')">
		            CEO
		        </a>
		    </div>
		</div>

		<div id="tab_con" class="order-topcon mt20">
			<!--order待抢单 在途单-->
			<div v-show="isShowInfo" v-if="this.titleid==0 || this.titleid==1" class="order-list">
				<!-- <router-link tag="div" :to="{ path:urlMap[number], query:{ loan_id: item.loan_id,user_token:user_token,loan_mortgage_type:item.loan_mortgage_type,authority:authority,visit_id:item.visit_id,type:item.type,order_status:order_status }}" v-for="item in data" class="order-list-item"> -->
				 <div v-for="item in data" class="order-list-item" @click="iosDoClick(item.loan_id,order_status,item.loan_mortgage_type,item.visit_id,item.type)">
						<!-- 估值 -->
						<div v-if="item.is_loan==0" class="order-list-name">
							<i v-if="item.loan_mortgage_type==2" class="order-list-typecar"></i>
							<i v-if="item.loan_mortgage_type==1" class="order-list-typehouse"></i>
							<span class="order-list-username">{{item.loan_user_name}}</span>
							<span class="order-list-no">{{item.loan_no}}</span>						
						</div>
						<!-- 借款 -->
						<div v-if="item.is_loan==1" class="order-list-user">
							<i v-if="item.loan_mortgage_type==1" class="order-list-icon order-list-ihousebg"></i>
							<i v-if="item.loan_mortgage_type==2" class="order-list-icon order-list-icarbg"></i>
							<span class="order-list-username">{{item.loan_user_name}}</span>
							<span class="order-list-no">{{item.loan_no}}</span>
						</div>
						<!-- 估值 -->
						<div v-if="item.is_loan==0" class="order-list-main">
							<div v-if="item.loan_mortgage_type==2" class="order-list-msg">
								<span v-if="item.loan_car_brand">{{item.loan_car_brand}}{{item.loan_car_model}}</span>
								<span v-else>车产评估</span>
								<br /> 提交时间：
								<i class="f26">{{item.loan_add_time}}</i>
							</div>
							<div v-if="item.loan_mortgage_type==1" class="order-list-msg">房产评估<br /> 提交时间：
								<i class="f26">{{item.loan_add_time}}</i>
							</div>
							<div class="order-list-pic">
								<img v-if="item.assess_img" :src="item.assess_img"/>
							</div>
						</div>
						<!-- 借款 -->
						<div v-if="item.is_loan==1" class="order-list-main">
							<div class="order-list-usermsg">
								<div class="order-list-typemsg">
									<i v-if="item.loan_mortgage_type==2" class="order-list-typecar"></i>
									<i v-if="item.loan_mortgage_type==1" class="order-list-typehouse"></i>
									<span class="order-list-num">{{item.loan_money}}</span>
									<span class="order-list-num">{{item.loan_deadline}}{{item.loan_deadline_unit}}</span>
									<span class="order-list-num">{{item.loan_rate}}</span>
								</div>
								<div v-if="item.loan_mortgage_type==1" class="order-list-timeaddress">
									<i class="order-list-addressicon"></i> {{item.province_name}} {{item.city_name}} {{item.area_name}}
								</div>
								<div v-if="item.loan_mortgage_type==2" class="order-list-timeaddress">
									<span class="f30 cgray">品牌：{{item.loan_car_brand}} &nbsp; &nbsp; &nbsp; 型号：{{item.loan_car_model}}</span>
								</div>
								<div class="order-list-timeaddress">
									<i class="order-list-timeicon"></i> {{item.loan_add_time}}
								</div>
							</div>
							<div class="order-list-tips">
								<span class="order-list-money" style="font-size: 10px">— —</span>
								<span class="order-list-submsg">成单可返佣（元）</span>
							</div>
						</div>
						<!-- 资产金额 -->
						<div v-if="item.assess_status==2" class="oredr-list-remark">
							<div class="order-list-remarkmsg">
								<span class="remarkname">资产估值(万) :</span> {{item.assess_third_price}}<br/> 
								<span class="remarkname">预 授 信(万) :</span> {{item.assess_refer_price}}
							</div>
						</div>
				</div>
					<!-- </router-link> -->

			</div>
			<!--order 推进中 被驳回-->
			<div v-show="isShowInfo" v-if="this.titleid==2 || this.titleid==3" class="order-list">
				<!--  <router-link tag="div" :to="{ path:urlDetailMap[number], query:{ loan_id: item.loan_id,user_token:user_token,loan_mortgage_type:item.loan_mortgage_type,authority:authority,visit_id:item.visit_id,type:item.type,order_status:order_status }}" v-for="item in data" class="order-list-item"> -->
				 <div v-for="item in data" class="order-list-item" @click="iosClick(item.loan_id,order_status,item.loan_mortgage_type,item.visit_id,item.type)">
					<div class="order-list-user">
						<i v-if="item.loan_mortgage_type==1" class="order-list-icon order-list-ihousebg"></i>
						<i v-if="item.loan_mortgage_type==2" class="order-list-icon order-list-icarbg"></i>
						<span class="order-list-username">{{item.loan_user_name}}</span>
						<span class="order-list-no">{{item.loan_no}}</span>
						<span v-if="item.loan_mortgage_type==1" class="order-list-status">{{item.house_mortgage_type_text}}</span>
						<span v-if="item.loan_mortgage_type==2" class="order-list-status">{{item.car_mortgage_type_text}}</span>
					</div>
					<div class="order-list-main">
						<div class="order-list-usermsg">
							<div class="order-list-typemsg">
								<i v-if="item.loan_mortgage_type==2" class="order-list-typecar"></i>
								<i v-if="item.loan_mortgage_type==1" class="order-list-typehouse"></i>
								<span class="order-list-num">{{item.loan_money}}</span>
								<span class="order-list-num">{{item.loan_deadline}}{{item.loan_deadline_unit}}</span>
								<span class="order-list-num">{{item.loan_rate}}</span>
							</div>
							<div v-if="item.loan_mortgage_type==1" class="order-list-timeaddress">
								<i class="order-list-addressicon"></i> {{item.province_name}} {{item.city_name}} {{item.area_name}}
							</div>
							<div v-if="item.loan_mortgage_type==2" class="order-list-timeaddress">
								<span class="f30 cgray">品牌：{{item.loan_car_brand}} &nbsp; &nbsp; &nbsp; 型号：{{item.loan_car_model}}</span>
							</div>
							<div class="order-list-timeaddress">
								<i class="order-list-timeicon"></i> {{item.loan_add_time}}
							</div>
						</div>
					</div>
				  </div>
				<!-- </router-link> -->
		
			</div>
				<!--uncon default -->
			<div v-show="isShownonpage" class="order-uncon">
				<div class="order-unconbg"></div>
				<p class="order-unconmsg">这里没有相关记录呢~</p>
			</div>

		</div>
	</div>
</template>

<script>
import mui from '../../js/mui.min.js'
import headerBack from '../headerComponent/HeaderBack'

	export default {
		data() {
			return {
				title:'',
				isShowInfo:true,
				isShownonpage:false,
				data:{},
				navdata:{},
				role_code:'',
				isActive:[],
				index:'',
				visit_id:'',
				type:'',
				order_status:this.$route.query.order_status,
				user_token:this.$route.query.user_token,
				titleid:this.$route.query.titleid,
				authority:this.$route.query.authority,
				urlMap:['/saleConfirm','/warrantconfirm','/visitDoConfirm','/notaryConfirm','/mortConfirm','/gpsCarConfirm','/ceodetail'],
				urlDetailMap:['/saledetail','/warrantDetail','/visitDetail','/notaryDetail','/mortdetail','/gpsCarDetail','/ceodetail'],
				number:this.$route.query.number,
			}
		},
		components: {
	      headerBack,
		},
		methods: {
			getInitData:getInitData,
			getData:getData,
			getNavInit:getNavInit,
			iosClick:iosClick,
			iosDoClick:iosDoClick,
		},
		created() {
	    	this.titleMap=['待抢单','在途单','推进中','被驳回'];
	    },
	    mounted: function () {
	    	this.getInitData();
	      	this.getNavInit();
	    }
	}

//列表信息
	function getData(index,code) {
			this.$http.get(this.$store.state.apiUrl+'/loan/orderList?user_token='+this.user_token+'&order_status='+this.order_status+'&role_code='+code).then((response) => {
	    		response = response.body;
	    			if(response.code == 0){
		    			this.data = response.data.order_list;
		    			this.index=index;
	    				// console.log(this.data);
		    			if(this.data==null||this.data==""){
		    				this.isShownonpage=true;
		    			}else{
		    				this.isShownonpage=false;
		    			}
		    			//重置当前数组状态
		    			this.isActive=[];
		    			this.isActive[index]=true;
		    			this.authority=code;
		    			this.number=index;
		    			// console.log(this.authority);
		    			//console.log(this.number);		    			
		    		}	
		    		else{
		    			console.log("请求失败！！！");
		    		}	
		   	 })
		}

//初始化列表信息
	function getInitData() {
			this.$http.get(this.$store.state.apiUrl+'/loan/orderList?user_token='+this.user_token+'&order_status='+this.order_status+'&role_code='+this.authority).then((response) => {
	    		response = response.body;
	    			if(response.code == 0){
		    			this.data = response.data.order_list;
		    			//有无数据显示
		    			if(this.data==null||this.data==""){
		    				this.isShownonpage=true;
		    			}else{
		    				this.isShownonpage=false;
		    			}
		    			this.index=this.number;
	    				// console.log(this.urlMap[this.index]);
		    		}	
		    		else{
		    			console.log("请求失败！！！");
		    		}	
		   	 })
		}

//初始Nav高亮定位
	function getNavInit() {
		 	this.$http.get(this.$store.state.apiUrl+'/loan/locationTab?user_token='+this.user_token+'&order_status='+this.order_status).then((response) => {
	    		response = response.body;
	    			if(response.code == 0){
		    			this.navdata = response.data.navtitle;
		    			this.navdata.forEach((navsigle) => {
							//console.log(navsigle.name+":"+navsigle.is_show);
							this.isActive.push(navsigle.is_show);
						})
		    		}	
		    		else{
		    			console.log("请求失败！！！");
		    		}	
		   	 })
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

 function iosClick(loan_id,order_status,loan_mortgage_type,visit_id,type){	
	 	var link=this.urlDetailMap[this.number]+'?user_token='+this.user_token+'&order_status='+order_status+'&loan_id='+loan_id+'&authority='+this.authority+'&loan_mortgage_type='+loan_mortgage_type+'&visit_id='+visit_id+'&type='+type;
	 	var params = {'loan_id':loan_id.toString(),'order_status':order_status.toString(),'link':link.toString()};
	    WebViewJavascriptBridge.callHandler('iosClick',params,function(response) {
	         // alert(response);
	     });
	}

function iosDoClick(loan_id,order_status,loan_mortgage_type,visit_id,type){
 	console.log("do"+loan_id+order_status);

    var link=this.urlMap[this.number]+'?user_token='+this.user_token+'&order_status='+order_status+'&loan_id='+loan_id+'&authority='+this.authority+'&loan_mortgage_type='+loan_mortgage_type+'&visit_id='+visit_id+'&type='+type;
    console.log("do"+link);
 	var params = {'loan_id':loan_id.toString(),'order_status':order_status.toString(),'link':link.toString()};
    WebViewJavascriptBridge.callHandler('iosDoClick',params,function(response) {
         // alert(response);
     });
}
	
</script>
<style>
		.mui-scroll-wrapper {
		    position: absolute;
		    z-index: 1;
		    top: 0rem;
		    bottom: 0;
		    left: 0;
		    overflow: hidden;
		    width: 100%;
		}
		.mui-segmented-control.mui-scroll-wrapper {
			padding: 0 0.453333rem;
		    height:0.96rem;
		    background: #fff;
		    border-bottom: 1px solid #dedede;
		}
		.mui-segmented-control .mui-scroll-wrapper .mui-scroll {
		    height:0.96rem;
		}
		.mui-segmented-control .mui-control-item {
		    line-height: 0.96rem;
		    padding: 0 10px;
		}
		/* .mui-segmented-control.mui-scroll-wrapper .mui-control-item
		{
		    display: inline-block;
		    width: auto;
		    padding: 0 10px;
		    border: 0;
		} */
		@media screen and (max-width : 320px) {
			.mui-segmented-control.mui-scroll-wrapper .mui-control-item
			{
			    display: inline-block;
			    width: auto;
			    padding: 0 4px;
			    border: 0;
			}
		}
		@media screen and (min-width : 321px) and (max-width : 375px) {
			.mui-segmented-control.mui-scroll-wrapper .mui-control-item
			{
			    display: inline-block;
			    width: auto;
			    padding: 0 8px;
			    border: 0;
			}
		}
		@media screen and (min-width : 376px) and (max-width : 750px) {
			.mui-segmented-control.mui-scroll-wrapper .mui-control-item
			{
			    display: inline-block;
			    width: auto;
			    padding: 0 10px;
			    border: 0;
			}
		}
		@media screen and (min-width : 750px) and (max-width : 1080px) {
			.mui-segmented-control.mui-scroll-wrapper .mui-control-item
			{
			    display: inline-block;
			    width: auto;
			    padding: 0 35px;
			    border: 0;
			}
		}

		.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
			position: relative;
		    z-index: 1;
		    height:0.96rem;
			color: #0ea3f0;
			border-bottom:3px solid #0ea3f0;
		} 
</style>