<template>
	<div class="notaryconfirm">
	<div v-title>订单详情</div>
	<div v-if="message" class="nullmessage">
		<span>
			{{message}}
		</span>
	</div>
	<div v-else>
		<div class="pawn">
			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>权证指令<span class="qzdate">{{ data.warrant_add_time }}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>权证下发人:</dt>
					<dd>{{data.warrant_user_name}}</dd>
				</dl>
				<dl>
					<dt>核心备注：</dt>
					<dd>{{data.warrant_comment}}</dd>
				</dl>
				<dl>
					<dt>资金方：</dt>
					<dd>{{ data.funder_name }}</dd>
				</dl>
				<dl>
					<dt style="width:110px">是否已签合同：</dt>
					<dd>{{ isSign }}</dd>
				</dl>
				<dl>
					<dt>合同编号：</dt>
					<dd>{{data.loan_contract_no}}</dd>
				</dl>
			</div>
			<h2 v-if="loan_mortgage_type==2">车辆抵押<span class="pawntype">{{data.loan_car_mortgage_type}}</span></h2>
			<h2 v-if="loan_mortgage_type==1">房屋抵押<span class="pawntype">{{data.loan_house_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>借款金额：</dt>
					<dd>{{ data.loan_money }}</dd>
				</dl>
				<dl>
					<dt>借款期限：</dt>
					<dd>{{ data.loan_deadline }}{{ data.loan_deadline_unit }}</dd>
				</dl>
				<dl>
					<dt>借款利率：</dt>
					<dd>{{ data.loan_rate }}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{ data.loan_repay_type }}</dd>
				</dl>
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{ data.user_name }}</dd>
				</dl>
				<dl>
					<dt>身份证号：</dt>
					<dd>{{ data.user_identity_no }}</dd>
				</dl>
				<dl>
					<dt>联系电话：</dt>
					<dd>{{ data.user_mobile }}</dd>
				</dl>
				<dl>
					<dt>婚姻状况：</dt>
					<dd>{{ data.loan_marital_status }}</dd>
				</dl>
				<dl>
					<dt>居住地地址：</dt>
					<dd>{{ data.loan_live_address }}</dd>
				</dl>
				<dl v-if="data.user_more_user_name">
					<dt>第二借款人：</dt>
					<dd>{{data.user_more_user_name}}</dd>
				</dl>
				<dl v-if="data.user_more_user_identity_no">
					<dt>身份证号：</dt>
					<dd>{{data.user_more_user_identity_no}}</dd>
				</dl>
				<dl v-if="data.user_more_user_mobile">
					<dt>联系电话：</dt>
					<dd>{{data.user_more_user_mobile}}	</dd>
				</dl>

			</div>
		</div>
		<bluebtn :isGet="loanInfo.notary_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :user_name="loanInfo.user_name" :funder_name="data.funder_name" ></bluebtn>

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
				data:{},
				userInfo:{},
				isSign:"是",
				loanInfo:{},
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
    		this.data = response.data.notaryInfo;
    		this.userInfo=response.data.userInfo;
    		this.loanInfo= response.data.loanInfo;
    		this.ButtonShow=response.data.ButtonShow.button;
    		if(this.data.loan_contract_no == ""){
    			this.isSign = "否";
    			this.data.loan_contract_no = "/";
    		}

    	}else{
    		console.log("请求失败！！！");
    	}
    })
}

</script>