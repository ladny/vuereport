<template>
	<div class="mortconfirm">
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
			<h2>权证指令<span class="qzdate">{{ mortgageHouse.warrant_add_time }}</span></h2>
				<warrantInfo :warrant_user_name="mortgageHouse.warrant_user_name" :warrant_comment="mortgageHouse.warrant_comment"></warrantInfo>
			<h2>房产抵押<span class="pawntype">{{mortgageHouse.loan_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>抵押物性质：</dt>
					<dd>{{ mortgageHouse.loan_house_property }}</dd>
				</dl>
				<!-- <dl>
					<dt>商业区域：</dt>
					<dd>{{ mortgageHouse.loan_house_province_id }}-{{ mortgageHouse.loan_house_city_id }}-{{ mortgageHouse.loan_house_area_id }}-{{ mortgageHouse.loan_house_street_id }}</dd>
				</dl> -->
				<dl>
					<dt>抵押物地址：</dt>
					<dd>{{ mortgageHouse.loan_house_detailed_address }}</dd>
				</dl>
				<dl>
					<dt>是否一抵：</dt>
					<dd>{{ mortgageHouse.loan_house_first_mortgage }}</dd>
				</dl>
				<dl>
					<dt>一抵单位：</dt>
					<dd>{{ mortgageHouse.loan_house_mortgage_company_name }}</dd>
				</dl>
				<dl>
					<dt>尾款金额：</dt>
					<dd>{{ mortgageHouse.loan_house_pending_repayment }}</dd>
				</dl>
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{ mortgageHouse.user_name }}</dd>
				</dl>
				<dl>
					<dt>身份证号：</dt>
					<dd>{{ mortgageHouse.user_identity_no }}</dd>
				</dl>
				<dl v-if="mortgageHouse.user_more_user_name">
					<dt>第二借款人：</dt>
					<dd>{{mortgageHouse.user_more_user_name}}</dd>
				</dl>
				<dl v-if="mortgageHouse.user_more_user_identity_no">
					<dt>身份证号：</dt>
					<dd>{{mortgageHouse.user_more_user_identity_no}}</dd>
				</dl>
			</div>
		</div>

		<div v-if="loan_mortgage_type==2" class="pawn">
			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>权证指令<span class="qzdate">{{mortgageCar.warrant_add_time}}</span></h2>
			<warrantInfo :warrant_user_name="mortgageCar.warrant_user_name" :warrant_comment="mortgageCar.warrant_comment"></warrantInfo>
			<h2>车辆抵押<span class="pawntype">{{mortgageCar.loan_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>抵押物性质：</dt>
					<dd>{{ mortgageCar.loan_car_property }}</dd>
				</dl>
				<dl>
					<dt>车辆品牌：</dt>
					<dd>{{mortgageCar.loan_car_brand}}</dd>
				</dl>
				<dl>
					<dt>车辆型号：</dt>
					<dd>{{mortgageCar.loan_car_model}}</dd>
				</dl>
				<dl>
					<dt>车牌号：</dt>
					<dd>{{mortgageCar.loan_car_number}}</dd>
				</dl>
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{mortgageCar.user_name}}</dd>
				</dl>
				<dl>
					<dt>身份证号：</dt>
					<dd>{{mortgageCar.user_identity_no}}</dd>
				</dl>
				<dl v-if="mortgageCar.user_more_user_name">
					<dt>第二借款人：</dt>
					<dd>{{mortgageCar.user_more_user_name}}</dd>
				</dl>
				<dl v-if="mortgageCar.user_more_user_identity_no">
					<dt>身份证号：</dt>
					<dd>{{mortgageCar.user_more_user_identity_no}}</dd>
				</dl>
			</div>
		</div>
		<bluebtn :isGet="loanInfo.mortgage_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :user_name="loanInfo.user_name" :funder_name="funder_name" ></bluebtn>
	</div>
</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import bluebtn from '../bottomComponent/BlueBtn'
	import navList from '../navComponent/NavList'
	import saler from '../conclusionComponent/saler'
	import warrantInfo from '../conclusionComponent/warrantInfo'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				mortgageHouse:{},
				mortgageCar:{},
				userInfo:{},
				loanInfo:{},
				ButtonShow:{},
				funder_name:'',
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
	      bluebtn,
	      navList,
	      saler,
	      warrantInfo
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
   this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
   		response = response.body;
    	if(response.code == 0){
    		this.mortgageHouse = response.data.mortgageHouse;
    		this.mortgageCar = response.data.mortgageCar;
    		this.userInfo=response.data.userInfo;
    		this.loanInfo= response.data.loanInfo;
    		this.funder_name= response.data.warrantInfo.funder_name;
    		this.ButtonShow=response.data.ButtonShow.button;
    		if(this.mortgageHouse.loan_house_mortgage_company_name == ""){
    			this.mortgageHouse.loan_house_mortgage_company_name = "/"
    		}
    		console.log(this.mortgageCar );
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}

</script>