<template>
	<div class="cloudbaddebt">
	<div v-title>{{titleMap[this.titleid]}}</div>
	<!-- <headerBack :header_title="titleMap[this.titleid]"></headerBack> -->
		<!--order-estimate-->
		<div class="order-topcon mt20">
		
			<div v-show="isShowInfo" class="order-list">
				<div class="order-list-item" v-for="item in data" @click="onLinkurl(item.loan_id)">
					<div class="order-list-user">
						<i v-if="item.loan_mortgage_type==1" class="order-list-icon order-list-ihousebg"></i>
						<i v-if="item.loan_mortgage_type==2" class="order-list-icon order-list-icarbg"></i>
						<span class="order-list-username">{{item.loan_user_name}}</span>
						<span class="order-list-no">{{item.loan_no}}</span>
					</div>
					<div class="order-list-main">
							<div class="order-list-usermsg">
								<div class="order-list-typemsg">
									<i v-if="item.loan_mortgage_type==2" class="order-list-typecar"></i>
									<i v-if="item.loan_mortgage_type==1" class="order-list-typehouse"></i>
									<span class="order-list-num">{{data.loan_money}}</span>
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
								<span v-if="titleid==4" class="invalid"></span>
							</div>
						</div>
						<div v-if="item.assess_status==2" class="oredr-list-remark">
							<div class="order-list-remarkmsg">
								<span class="remarkname">资产估值(万) :</span> {{item.assess_third_price}}<br/> 
								<span class="remarkname">预 授 信(万) :</span> {{item.assess_refer_price}}
							</div>
							<span v-if="titleid==1" class="overdue"></span>
							<span v-if="titleid==2" class="v2bg baddebt-icon"></span>
						</div>
				</div>
			</div>
			<div v-show="isShownonpage" class="order-uncon">
				<div class="order-unconbg"></div>
				<p class="order-unconmsg">这里没有相关记录呢~</p>
			</div>
					
		</div>
		

	</div>
</template>
<script>
import headerBack from '../headerComponent/HeaderBack'
	export default {
		data() {
			return {
				title:'',
				data:{},
				isShowInfo:true,
				isShownonpage:false,
				order_status:this.$route.query.order_status,
				user_token:this.$route.query.user_token,
				titleid:this.$route.query.titleid,
			}
		},
		components: {
	      headerBack,
	  	},
	  	methods: {
			getInitData:getInitData,
			onLinkurl:onLinkurl	
		},
		created() {
	    	this.titleMap=['还款中','逾期单','坏账单','结清单','无效单'];
	    },
	    mounted: function () {
	    	this.getInitData();
	    }
	}

	//初始化列表信息
	function getInitData() {
			this.$http.get(this.$store.state.apiUrl+'/loan/orderList?user_token='+this.user_token+'&order_status='+this.order_status).then((response) => {
	    		response = response.body;
	    			if(response.code == 0){
		    			this.data = response.data.order_list;
		    			
		    			if(this.data==null||this.data==""){
		    				this.isShownonpage=true;
		    			}else{
		    				this.isShownonpage=false;
		    			}
		    		
	    				console.log(this.data);
		    		}	
		    		else{
		    			console.log("请求失败！！！");
		    		}	
		   	 })
		}
    function onLinkurl(loanId){
	  	location.href=this.$store.state.mUrl+"/myorder/loan/detail/"+loanId;
	  }
</script>
<style>
/* 无效单 */
.invalid{
	display: block;
	margin: -50px 0.453333rem 0 0;
	background: url('./invalid.png') no-repeat;
	width: 92px;
	height: 60px;
	background-size: 92px 60px;
}
/* 逾期单 */
.overdue{
	display: block;
	margin: -0.36rem 0.453333rem 0 0;
	background: url('./overdue.png') no-repeat;
	width: 92px;
	height: 60px;
	background-size: 92px 60px;
}

</style>