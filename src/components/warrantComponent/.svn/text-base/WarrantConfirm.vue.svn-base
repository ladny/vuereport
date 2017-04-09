<template>
	<div class="warrantconfirm">
	<div v-title>订单详情</div>
	<div v-if="message" class="nullmessage">
		<span>
			{{message}}
		</span>
	</div>
	<div v-else>
		<div v-if="loan_mortgage_type==1" class="pawn">
			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>房产抵押<span class="pawntype">{{businessHouse.loan_mortgage_type}}</sapn></h2>
			<div class="pawnmain">
				<dl>
					<dt>抵押物性质：</dt>
					<dd>{{businessHouse.loan_house_property}}</dd>
				</dl>
				<dl>
					<dt>商业区域：</dt>
					<dd>{{businessHouse.loan_house_province_name}}-{{businessHouse.loan_house_city_name}}-{{businessHouse.loan_house_area_name}}</dd>
				</dl>
				<dl>
					<dt>抵押物地址：</dt>
					<dd>{{businessHouse.loan_house_detailed_address}}</dd>
				</dl>
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{loanInfo.user_name}}</dd>
				</dl>
				<dl v-if="businessHouse.loan_user_more==1">
					<dt>第二借款人：</dt>
					<dd><span v-for="item in businessHouse.loan_user_more_info">{{item.user_name}}&nbsp;&nbsp;&nbsp;</span></dd>
				</dl>
				<dl>
					<dt>借款金额：</dt>
					<dd>{{loanInfo.loan_money}}</dd>
				</dl>
				<dl>
					<dt>借款期限：</dt>
					<dd>{{loanInfo.loan_deadline}}{{loanInfo.loan_deadline_unit}}</dd>
				</dl>
				<dl>
					<dt>借款利率：</dt>
					<dd>{{loanInfo.loan_rate}}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{loanInfo.loan_repay_type}}</dd>
				</dl>
				<dl>
					<dt>资产估值：</dt>
					<dd>{{assessInfo.assess_third_price}}</dd>
				</dl>
				<dl>
					<dt>预授信：</dt>
					<dd>{{assessInfo.assess_refer_price}}</dd>
				</dl>
				<dl>
					<dt>保证金：</dt>
					<dd>{{businessHouse.loan_margin}}</dd>
				</dl>
				<dl>
					<dt>其他费用：</dt>
					<dd>{{businessHouse.loan_other_money}}</dd>
				</dl>
				<dl>
					<dt>返点利率：</dt>
					<dd>{{businessHouse.loan_commission_rate}}</dd>
				</dl>
				<dl>
					<dt>返佣方式：</dt>
					<dd>{{businessHouse.loan_commission_type_text}}</dd>
				</dl>
				<dl>
					<dt>返佣计划：</dt>
					<dd>{{businessHouse.loan_commission_period}}期</dd>
				</dl>
			</div>
			<h2>客户信息</h2>
			<div class="pawnmain">
				<dl>
					<dt>客户来源：</dt>
					<dd>{{loanInfo.loan_user_source_text}}</dd>
				</dl>
				<dl>
					<dt>客户名称：</dt>
					<dd>{{loanInfo.user_name}}</dd>
				</dl>
			</div>
		</div>

		<div v-if="loan_mortgage_type==2" class="pawn">
			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>车辆抵押<span class="pawntype">{{businessCar.loan_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>抵押物性质：</dt>
					<dd>{{businessCar.loan_car_property}}</dd>
				</dl>
				<dl>
					<dt>车辆品牌：</dt>
					<dd>{{businessCar.loan_car_brand}}</dd>
				</dl>
				<dl>
					<dt>车辆型号：</dt>
					<dd>{{businessCar.loan_car_model}}</dd>
				</dl>
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{loanInfo.user_name}}</dd>
				</dl>
				<dl v-if="businessCar.loan_user_more==1">
					<dt>第二借款人：</dt>
					<dd><span v-for="item in businessCar.loan_user_more_info">{{item.user_name}}&nbsp;&nbsp;&nbsp;</span></dd>
				</dl>
				<dl>
					<dt>借款金额：</dt>
					<dd>{{loanInfo.loan_money}}</dd>
				</dl>
				<dl>
					<dt>借款期限：</dt>
					<dd>{{loanInfo.loan_deadline}}{{loanInfo.loan_deadline_unit}}</dd>
				</dl>
				<dl>
					<dt>借款利率：</dt>
					<dd>{{loanInfo.loan_rate}}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{loanInfo.loan_repay_type}}</dd>
				</dl>
				<dl>
					<dt>资产估值：</dt>
					<dd>{{assessInfo .assess_third_price}}</dd>
				</dl>
				<dl>
					<dt>预授信：</dt>
					<dd>{{assessInfo .assess_refer_price}}</dd>
				</dl>
				<dl>
					<dt>保证金：</dt>
					<dd>{{businessCar.loan_margin}}</dd>
				</dl>
				<dl>
					<dt>{{businessCar.loan_parking_gps_type_text}}：</dt>
					<dd>{{businessCar.loan_parking_gps_mode}}-{{businessCar.loan_parking_gps_fee}}</dd>
				</dl>
				<dl>
					<dt>暂住证费用：</dt>
					<dd>{{businessCar.loan_stay_fee}}</dd>
				</dl>
				<dl>
					<dt>违章费用：</dt>
					<dd>{{businessCar.loan_peccancy_fee}}</dd>
				</dl>
					<dl>
					<dt>其他费用：</dt>
					<dd>{{businessCar.loan_other_money}}</dd>
				</dl>
				<dl>
					<dt>返点利率：</dt>
					<dd>{{businessCar.loan_commission_rate}}</dd>
				</dl>
				<dl>
					<dt>返佣方式：</dt>
					<dd>{{businessCar.loan_commission_type_text}}</dd>
				</dl>
				<dl>
					<dt>返佣计划：</dt>
					<dd>{{businessCar.loan_commission_period}}期</dd>
				</dl>
			</div>
			<h2>客户信息</h2>
			<div class="pawnmain">
				<dl>
					<dt>客户来源:</dt>
					<dd>{{loanInfo.loan_user_source_text}}</dd>
				</dl>
				<dl>
					<dt>客户名称:</dt>
					<dd>{{loanInfo.custom_name}}</dd>
				</dl>
			</div>
		</div>

		<bluebtn :isGet="loanInfo.warrant_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type'></bluebtn>
	    </div>
	</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import navList from '../navComponent/NavList'
	import saler from '../conclusionComponent/saler'
	import bluebtn from '../bottomComponent/BlueBtn'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				businessHouse:{},
				businessCar:{},
				userInfo:{},
				loanInfo:{},
				assessInfo:{},
				ButtonShow:{},
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
				order_status: (() => {
				let queryParam = urlParse();
					return queryParam.order_status;
				})(),
				message: (() => {
					let queryParam = urlParse();
					return queryParam.message;
				})(),
			   }
		},
    	components: {
	      headerBack,
	      saler,
	      navList,
	      bluebtn
	    },
	    methods:{
	    	getData:getData
	    },
	    mounted: function() {
	    	this.getData();
	    }
  }

 //获取数据信息
  function getData() {
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.businessHouse = response.data.businessHouse;
    		this.businessCar = response.data.businessCar;
    		this.userInfo=response.data.userInfo;
    		this.loanInfo=response.data.loanInfo;
    		this.assessInfo=response.data.assessInfo;
    		this.ButtonShow=response.data.ButtonShow;
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}  
 

</script>