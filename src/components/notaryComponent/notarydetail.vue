<template>
<div class="notarydetail">
<div v-title>订单详情</div>

<div v-if="message" class="nullmessage">
	<span>
		{{message}}
	</span>
</div>

<div v-else>
	<reject v-if="isShow" :rejectname="turnDown.log_user_name" :rejecttime="turnDown.log_add_time" :reason="turnReason" type="bgsq7" typename="CEO结论" :comment="turnComment" :doname="doname" :dotype="dotype"></reject>


	<!-- 操作人员 -->
	<hostname :hostname="userInfo.carry_out_user_name" :update="userInfo.carry_out_time" :type="isRejectClass"></hostname>

	<div class="pawn">
	<h2>公证结论</h2>
	<conclusion name="公证结论" :result="resultMap[data.notary_status-1]" :comment="data.notary_comment" :type="classMap[data.notary_status-1]"></conclusion>
	<h2>公证信息</h2>
		<!-- 公证房 -->
		<div class="pawnmain" v-if="loan_mortgage_type==1">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{data.user_name}}</dd>
			</dl>
			<dl>
				<dt style="width: 140px">抵押权人委托公证：</dt>
				<dd>{{data.notary_entrust}}</dd>
			</dl>
			<dl v-if="data.notary_entrust=='有'">
				<dt style="width: 200px">抵押权人委托公证到谁名下：</dt>
				<dd>{{data.notary_entrust_user_name}}</dd>
			</dl>
			<dl>
				<dt style="width: 120px">借款合同公证：</dt>
				<dd>{{data.notary_loan_contract}}</dd>
			</dl>
			<dl v-if="data.notary_loan_contract=='有'">
				<dt style="width: 140px">借款公证到谁名下：</dt>
				<dd>{{data.notary_loan_contract_user_name}}</dd>
			</dl>
			<dl>
				<dt style="width: 120px">委托买卖公证：</dt>
				<dd>{{data.notary_commission_business}}</dd>
			</dl>
			<dl v-if="data.notary_commission_business=='有'">
				<dt style="width: 170px">委托买卖公证到谁名下：</dt>
				<dd>{{data.notary_commission_business_user_name}}</dd>
			</dl>
			<dl>
				<dt style="width: 120px">其他委托公证：</dt>
				<dd>{{data.notary_other_entrust}}</dd>
			</dl>
			<dl v-if="data.notary_other_entrust=='有'">
				<dt style="width: 170px">其他委托公证谁名下人：</dt>
				<dd>{{data.notary_other_entrust_user_name}}</dd>
			</dl>
			<dl>
				<dt>单身声明：</dt>
				<dd>{{data.notary_unmarried_prove}}</dd>
			</dl>
			<dl>
				<dt style="width: 140px">夫妻财产分割公证：</dt>
				<dd>{{data.notary_division_property}}</dd>
			</dl>
		</div>
		<!-- 公证车 -->
		<div class="pawnmain" v-if="loan_mortgage_type==2">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{ data.user_name }}</dd>
			</dl>
			<dl>
				<dt style="width: 110px">借款合同公证：</dt>
				<dd>{{ data.notary_loan_contract }}</dd>
			</dl>
			<dl v-if="data.notary_loan_contract=='有'">
				<dt style="width: 140px">借款公证到谁名下：</dt>
				<dd>{{ data.notary_loan_contract_user_name }}</dd>
			</dl>
		</div>
	</div>
	<bluebtn v-if="isShow" :isGet="loanInfo.notary_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :user_name="loanInfo.user_name" :funder_name="notaryInfo.funder_name"></bluebtn>
</div>

</div>
</template>
<!-- type="text/ecmascript-6" -->
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import navList from '../navComponent/NavList'
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	import bluebtn from '../bottomComponent/BlueBtn'
	import {urlParse} from '../../js/util'


	export default {
		data(){
			return {
				isShow:false,
				isRejectClass:false,
				data:{},
				loanInfo:{},
				ButtonShow:{},
				turnDown:{},
                typename:'',
                turnReason:'',
                turnComment:'',
                doname:'',
				dotype:'',
                notaryInfo:{},
                userInfo:{},
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
	      navList,
	      conclusion,
	      reject,
	      hostname,
	      bluebtn
	    },
	      methods: {
	    	getData:getData
	    },
	    created() {
	    	this.classMap=["bgcom8","bgcom14","bgcom8"]
	    	this.resultMap=['通过','驳回','通过']
	    },
	     mounted: function () {
	    	this.getData();
	    }

  }

//获取数据信息
  function getData() {
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.data = response.data.notaryCarHouse;
    		this.notaryInfo= response.data.notaryInfo;
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		this.ButtonShow=response.data.ButtonShow.button;

    		console.log(this.message);
    		if(this.data.notary_status == 2)
    			this.isRejectClass = true;
    		if(this.data.notary_status == 3)
    			this.isShow = true;
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}

</script>