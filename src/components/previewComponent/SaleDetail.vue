<template>
<div class="saledetail">
<div v-title>订单详情</div>
<div v-if="message" class="nullmessage">
	<span>
		{{message}}
	</span>
</div>

<div v-else>
	<reject v-if="isShow" :rejectname="turnDown.log_user_name" :rejecttime="turnDown.log_add_time" :reason="turnReason" type="bgsq9" typename="权证结论" :comment="turnComment" :doname="doname" :dotype="dotype"></reject>

		<hostname :hostname="userInfo.carry_out_user_name" :update="userInfo.carry_out_time" :type="isRejectClass"></hostname>
	<div v-if="loan_mortgage_type==1" class="pawn">

	<h2>销售结论</h2>
		<conclusion v-show="isStop" name="销售结论" result="终止" :comment="termination.log_comment" :type="classMap[0]"></conclusion>
		<conclusion v-show="isStop==false" :comment="businessHouse.loan_house_comment" :type="classMap[1]"></conclusion>
	<h2>借款人基本信息</h2>
	<div class="pawnmain">
		<dl>
			<dt>姓名：</dt>
			<dd>{{loanInfo.user_name}}</dd>
		</dl>
		<dl>
			<dt>身份证：</dt>
			<dd>{{loanInfo.user_identity_no}}</dd>
		</dl>
		<dl>
			<dt>职业：</dt>
			<dd>{{businessHouse.loan_user_job}}</dd>
		</dl>
		<dl>
			<dt>月均流水：</dt>
			<dd>{{businessHouse.loan_user_income}}</dd>
		</dl>
		<dl>
			<dt>营业收入：</dt>
			<dd>{{businessHouse.loan_company_income}}</dd>
		</dl>
		<dl>
			<dt>借款用途：</dt>
			<dd>{{businessHouse.loan_use}}</dd>
		</dl>
		<dl>
			<dt>还款来源：</dt>
			<dd>{{businessHouse.loan_repay_source}} </dd>
		</dl>
		<dl>
			<dt>婚姻状况：</dt>
			<dd>{{businessHouse.loan_marital_status}}</dd>
		</dl>
	</div>
	<h2>抵押物信息</h2>
	<div class="pawnmain">
		<dl>
			<dt>抵押物性质：</dt>
			<dd>{{businessHouse.loan_house_property}}</dd>
		</dl>
		<dl>
			<dt>商业区域</dt>
			<dd>{{businessHouse.loan_house_province_name}}-{{businessHouse.loan_house_city_name}}-{{businessHouse.loan_house_area_name}}</dd>
		</dl>
		<dl>
			<dt>抵押物地址：</dt>
			<dd>{{businessHouse.loan_house_detailed_address}}</dd>
		</dl>
		<dl>
			<dt>使用说明：</dt>
			<dd>{{businessHouse.loan_house_use}}</dd>
		</dl>
		<dl>
			<dt>住户说明：</dt>
			<dd>{{businessHouse.loan_house_live_people}}</dd>
		</dl>
		<dl>
			<dt>是否一抵</dt>
			<dd>{{businessHouse.loan_house_first_mortgage_text}}</dd>
		</dl>
		<dl v-if="businessHouse.loan_house_first_mortgage_text=='否'">
			<dt>抵押单位：</dt>
			<dd>{{businessHouse.loan_house_mortgage_company_name}} </dd>
		</dl>
		<dl v-if="businessHouse.loan_house_first_mortgage_text=='否'">
			<dt>尾款金额：</dt>
			<dd>{{businessHouse.loan_house_pending_repayment}}</dd>
		</dl>
		<dl>
			<dt style="width:110px">名下其它资产：</dt>
			<dd>{{businessHouse.loan_other_asset}}</dd>
		</dl>
	</div>

	<h2>借款需求<a href="#" @click="onLinkurl(loan_id)">预览返佣计划</a></h2>
	<div class="pawnmain">
		<dl>
			<dt>业务类型：</dt>
			<dd>{{businessHouse.loan_mortgage_type_text}}</dd>
		</dl>
		<dl>
			<dt>评估金额：</dt>
			<dd>{{assessInfo .assess_third_price}}</dd>
		</dl>
		<dl>
			<dt>授信金额：</dt>
			<dd>{{assessInfo .assess_refer_price}}</dd>
		</dl>
		<dl>
			<dt>借款金额：</dt>
			<dd>{{loanInfo.loan_money}}</dd>
		</dl>
		<dl>
			<dt>贷款利率：</dt>
			<dd>{{loanInfo.loan_rate}}</dd>
		</dl>
		<dl>
			<dt>贷款期限：</dt>
			<dd>{{loanInfo.loan_deadline}}{{loanInfo.loan_deadline_unit}}</dd>
		</dl>
		<dl>
			<dt>还款方式：</dt>
			<dd>{{loanInfo.loan_repay_type}}</dd>
		</dl>
		<dl>
			<dt>保 证 金：</dt>
			<dd>{{businessHouse.loan_margin}}</dd>
		</dl>
		<dl>
			<dt>其它费用：</dt>
			<dd>{{businessHouse.loan_other_money}}</dd>
		</dl>
		<dl>
			<dt>返点利率：</dt>
			<dd>{{businessHouse.loan_commission_rate}}</dd>
		</dl>
		<dl>
			<dt>返点方式：</dt>
			<dd>{{businessHouse.loan_commission_type_text}}</dd>
		</dl>
		<dl>
			<dt>返佣期数：</dt>
			<dd>{{businessHouse.loan_commission_period}}期</dd>
		</dl>
	</div>

	<h2>追踪联系</h2>
	<div class="pawnmain">
		<dl>
			<dt>借款人电话：</dt>
			<dd>{{loanInfo.user_mobile}}</dd>
		</dl>
		<dl>
			<dt>单位名称：</dt>
			<dd>{{businessHouse.loan_company_name}}</dd>
		</dl>
		<dl>
			<dt>单位地址：</dt>
			<dd>{{businessHouse.loan_company_address}}</dd>
		</dl>
		<dl>
			<dt>经营范围：</dt>
			<dd>{{businessHouse.loan_company_business_range}}</dd>
		</dl>
	</div>

	<div class="pawnmain" v-if="businessHouse.loan_spouse_name">
		<dl>
			<dt>配偶姓名：</dt>
			<dd>{{businessHouse.loan_spouse_name}}</dd>
		</dl>
		<dl>
			<dt>配偶职业：</dt>
			<dd>{{businessHouse.loan_spouse_job}}</dd>
		</dl>
		<dl>
			<dt>配偶电话：</dt>
			<dd>{{businessHouse.loan_spouse_mobile}}</dd>
		</dl>
		<dl>
			<dt>配偶单位：</dt>
			<dd>{{businessHouse.loan_spouse_company_name}}</dd>
		</dl>
		<dl>
			<dt>单位地址：</dt>
			<dd>{{businessHouse.loan_spouse_company_address}}</dd>
		</dl>
	</div>

	<h2 v-if="businessCar.loan_user_more_info">第2借款人单位信息</h2>
    <div class="pawnmain" v-for="item in businessHouse.loan_user_more_info">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{item.user_name}}</dd>
			</dl>
			<dl>
				<dt>借款人电话：</dt>
				<dd>{{item.user_mobile}}</dd>
			</dl>
			<dl>
				<dt>身份证号：</dt>
				<dd>{{item.user_identity_no}}</dd>
			</dl>
			<dl>
				<dt>单位名称：</dt>
				<dd>{{item.loan_company_name}}</dd>
			</dl>
			<dl>
				<dt>单位地址：</dt>
				<dd>{{item.loan_company_address}}</dd>
			</dl>
			<dl>
				<dt>经营范围：</dt>
				<dd>{{item.loan_company_business_range}}</dd>
			</dl>
		</div>

	<h2>归档说明</h2>
	<div class="pawnmain">
		<dl>
			<dt>兄弟流程：</dt>
			<dd>{{businessHouse.loan_workflow_set}}</dd>
		</dl>
		<dl>
			<dt>借款人证件：</dt>
			<dd>{{businessHouse.loan_user_credentials_keep}}</dd>
		</dl>
		<dl>
			<dt>抵押物证件：</dt>
			<dd>{{businessHouse.loan_house_credentials_keep}}</dd>
		</dl>
	</div>
	</div>


	<div v-if="loan_mortgage_type==2" class="pawn">
			<h2>销售结论</h2>
				<conclusion  v-show="isStop" name="销售结论" result="终止" :comment="termination.log_comment" :type="classMap[0]"></conclusion>
				<conclusion  v-show="isStop==false" :comment="businessCar.loan_house_comment" :type="classMap[1]"></conclusion>
			<h2>借款人基本信息</h2>
			<div class="pawnmain">
				<dl>
					<dt>姓名：</dt>
					<dd>{{loanInfo.user_name}}</dd>
				</dl>
				<dl>
					<dt>身份证：</dt>
					<dd>{{loanInfo.user_identity_no}}</dd>
				</dl>
				<dl>
					<dt>职业：</dt>
					<dd>{{businessCar.loan_user_job}}</dd>
				</dl>
				<dl>
					<dt>婚姻状况：</dt>
					<dd>{{businessCar.loan_marital_status}}</dd>
				</dl>
			</div>
			<h2>抵押物信息</h2>
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
					<dt>车牌号：</dt>
					<dd>{{businessCar.loan_car_number}}</dd>
				</dl>
				<dl>
					<dt>排  量：</dt>
					<dd>{{businessCar.loan_car_displacement}}</dd>
				</dl>
				<dl>
					<dt>颜  色：</dt>
					<dd>{{businessCar.loan_car_color}}</dd>
				</dl>
				<dl>
					<dt>发动机号：</dt>
					<dd>{{businessCar.loan_car_engine_type}}</dd>
				</dl>
				<dl>
					<dt>车 架 号：</dt>
					<dd>{{businessCar.loan_car_frame_number}}</dd>
				</dl>
				<dl>
					<dt>开  票 价：</dt>
					<dd>{{businessCar.loan_car_ticket_price}}</dd>
				</dl>
				<dl>
					<dt>是否一抵：</dt>
					<dd>{{businessCar.loan_first_mortgage_car_text}}</dd>
				</dl>
				<dl v-if="businessCar.loan_first_mortgage_car_text=='否'">
					<dt>抵押单位：</dt>
					<dd>{{businessCar.loan_first_mortgage_company}}</dd>
				</dl>
				<dl v-if="businessCar.loan_first_mortgage_car_text=='否'">
					<dt>尾款金额：</dt>
					<dd>{{businessCar.loan_car_pending_repayment}}</dd>
				</dl>
				<dl>
					<dt style="width:110px">名下其它资产：</dt>
					<dd>{{businessCar.loan_other_asset}}</dd>
				</dl>
			</div>

			<h2>借款需求<a href="#" @click="onLinkurl(loan_id)">预览返佣计划</a></h2>
			<div class="pawnmain">
				<dl>
					<dt>业务类型：</dt>
					<dd>{{businessCar.loan_mortgage_type_text}}</dd>
				</dl>
				<dl>
					<dt>评估金额：</dt>
					<dd>{{assessInfo .assess_third_price}}</dd>
				</dl>
				<dl>
					<dt>授信金额：</dt>
					<dd>{{assessInfo .assess_refer_price}}</dd>
				</dl>
				<dl>
					<dt>借款金额：</dt>
					<dd>{{loanInfo.loan_money}}</dd>
				</dl>
				<dl>
					<dt>贷款利率：</dt>
					<dd>{{loanInfo.loan_rate}}</dd>
				</dl>
				<dl>
					<dt>贷款期限：</dt>
					<dd>{{loanInfo.loan_deadline}}{{loanInfo.loan_deadline_unit}}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{loanInfo.loan_repay_type}}</dd>
				</dl>
				<dl>
					<dt>保 证 金：</dt>
					<dd>{{businessCar.loan_margin}}</dd>
				</dl>
				<dl>
					<dt>违章费用：</dt>
					<dd>{{businessCar.loan_peccancy_fee}}</dd>
				</dl>

			    <dl>
					<dt>暂住证费用：</dt>
					<dd>{{businessCar.loan_stay_fee}}</dd>
				</dl>
				<dl>
					<dt>{{businessCar.loan_parking_gps_type_text}}：</dt>
					<dd>{{businessCar.loan_parking_gps_mode}}-{{businessCar.loan_parking_gps_fee}}</dd>
				</dl>
				<dl>
					<dt>其它费用：</dt>
					<dd>{{businessCar.loan_other_money}}</dd>
				</dl>
				<dl>
					<dt>返点利率：</dt>
					<dd>{{businessCar.loan_commission_rate}}</dd>
				</dl>
				<dl>
					<dt>返点方式：</dt>
					<dd>{{businessCar.loan_commission_type_text}}</dd>
				</dl>
				<dl>
					<dt>返佣期数：</dt>
					<dd>{{businessCar.loan_commission_period}}期</dd>
				</dl>
				
			</div>

			<h2>追踪联系</h2>
			<div class="pawnmain">
				<dl>
					<dt>借款人电话：</dt>
					<dd>{{loanInfo.user_mobile}}</dd>
				</dl>
				<dl>
					<dt>单位名称：</dt>
					<dd>{{businessCar.loan_company_name}}</dd>
				</dl>
				<dl>
					<dt>单位地址：</dt>
					<dd>{{businessCar.loan_company_address}}</dd>
				</dl>
				<dl>
				<dt>经营范围：</dt>
					<dd>{{businessCar.loan_company_business_range}}</dd>
				</dl>
				<dl>
					<dt>居住地址：</dt>
					<dd>{{businessCar.loan_live_address}}</dd>
				</dl>
			</div>
			<div class="pawnmain" v-if="businessCar.loan_spouse_name">
				<dl>
					<dt>配偶姓名：</dt>
					<dd>{{businessCar.loan_spouse_name}}</dd>
				</dl>
				<dl>
					<dt>配偶职业：</dt>
					<dd>{{businessCar.loan_spouse_job}}</dd>
				</dl>
				<dl>
					<dt>配偶电话：</dt>
					<dd>{{businessCar.loan_spouse_mobile}}</dd>
				</dl>
				<dl>
					<dt>配偶单位：</dt>
					<dd>{{businessCar.loan_spouse_company_name}}</dd>
				</dl>
				<dl>
					<dt>单位地址：</dt>
					<dd>{{businessCar.loan_spouse_company_address}}</dd>
				</dl>
			</div>

		<h2 v-if="businessCar.loan_user_more_info">第2借款人单位信息</h2>
	    <div class="pawnmain" v-for="item in businessCar.loan_user_more_info">
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{item.user_name}}</dd>
				</dl>
				<dl>
					<dt>借款人电话：</dt>
					<dd>{{item.user_mobile}}</dd>
				</dl>
				<dl>
					<dt>单位名称：</dt>
					<dd>{{item.loan_company_name}}</dd>
				</dl>
				<dl>
					<dt>单位地址：</dt>
					<dd>{{item.loan_company_address}}</dd>
				</dl>
			</div>


			<h2>归档说明</h2>
			<div class="pawnmain">
				<dl>
					<dt>兄弟流程：</dt>
					<dd>{{businessCar.loan_workflow_set}}</dd>
				</dl>
				<dl>
					<dt>借款人证件：</dt>
					<dd>{{businessCar.loan_user_credentials_keep}}</dd>
				</dl>
				<dl>
					<dt>抵押物证件：</dt>
					<dd>{{businessCar.loan_car_credentials_keep}}</dd>
				</dl>
			</div>
</div>

	<bluebtn :isGet="loanInfo.seller_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type'></bluebtn>
	</div>
</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import bluebtn from '../bottomComponent/BlueBtn'
	import navList from '../navComponent/NavList'
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				isShow:false,
				isRejectClass:false,
				turnDown:{},
				turnReason:'',
				typename:'',
                turnComment:'',
                doname:'',
				dotype:'',
				isStop:false,
				businessCar:{}, 
				businessHouse:{},
				userInfo:{},
                loanInfo:{},
                assessInfo:{},
                ButtonShow:{},
                termination:{},
                phone:'',
                isLayer:false,
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
	      conclusion,
	      reject,
	      hostname
	    },
	    methods:{
	    	getData:getData,
	    	onLinkurl:onLinkurl	
	    },
	    created() {
	    	this.classMap=["bgcom16","bgcom19"]
	    },
	    mounted: function(){
	    	this.getData();
	    }

  }

  //获取数据信息
  function getData(){
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.businessCar = response.data.businessCar;
    		this.businessHouse = response.data.businessHouse;
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.assessInfo =response.data.assessInfo; 
    		this.ButtonShow=response.data.ButtonShow;
    		this.termination=response.data.termination;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		
    		if(this.loanInfo.user_mobile==""||this.loanInfo.user_mobile==null){
    			this.phone=this.userInfo.phone;
    		}else{
    			this.phone=this.loanInfo.user_mobile;
    		}
    		if(this.loanInfo.seller_status==2){
    			this.isShow = true;
    		}

    		if(this.loanInfo.loan_status=='-n'){
	    		this.isStop=true;
	    		this.isRejectClass=true;
	    	}
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}

  function onLinkurl(loanId){
	  	location.href=this.$store.state.mUrl+"/myorder/loan/detail/"+loanId;
	  }


</script>
<style>
/*多态按钮*/
.pawnbtn{
	display: flex;
	margin-left: -1px;
	margin-top: 0.733333rem;
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
.pawnbtnlink a{
	display: block;
	color: #ffffff;
}
.gray{
	background: #cccccc;
}
</style>