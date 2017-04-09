<template>
<div id="mortcardetail">
<div v-title>订单详情</div>
<div v-if="message" class="nullmessage">
	<span>
		{{message}}
	</span>
</div>

<div v-else>
	<reject v-if="isShow" :rejectname="turnDown.log_user_name" :rejecttime="turnDown.log_add_time" :reason="turnReason" :type="bgType" :typename="typename" :comment="turnComment" :doname="doname" :dotype="dotype"></reject>
<!-- 	<h2>补发任务</h2>
		<div class="pawnmain">
			<dl>
				<dt>补发指令：</dt>
				<dd>家访、抵押</dd>
			</dl>
			<dl>
				<dt>家访类别：</dt>
				<dd>居住地</dd>
			</dl>
			<dl>
				<dt>家访地址：</dt>
				<dd>111111</dd>
			</dl>
		</div>
	</div> -->

		<hostname :hostname="userInfo.carry_out_user_name" :update="userInfo.carry_out_time" :type="isRejectClass"></hostname>
	<div class="pawn">
		<h2>权证结论</h2>
		<conclusion name="权证结论" :result="resultMap[data.warrant_status-1]" :comment="data.warrant_comment" :type="classMap[data.warrant_status-1]"></conclusion>
		<h2>权证指令</h2>
		<div v-if="data.warrant_name" class="pawnmain">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{loanInfo.user_name}}</dd>
			</dl>
			<dl>
				<dt>资金方：</dt>
				<dd>{{data.funder_name}}</dd>
			</dl>
			<dl>
				<dt>下发指令：</dt>
				<dd>{{data.warrant_name}}</dd>
			</dl>
			<dl>
				<dt style="width:110px">是否签订合同：</dt>
				<dd>{{isSign_loan_contract}}</dd>
			</dl>
			<dl v-if="loanInfo.loan_contract_no">
				<dt>合同编号：</dt>
				<dd>{{loanInfo.loan_contract_no}}</dd>
			</dl>
			<div v-for="item in data.warrant_action_home">
				<dl>
					<dt>家访类别：</dt>
					<dd>{{item.name}}</dd>
				</dl>
				<dl>
					<dt>家访地址：</dt>
					<dd>{{item.address}}</dd>
				</dl>
			</div>
		</div>
		<div v-else class="pawnmain">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{loanInfo.user_name}}</dd>
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
				userInfo:{},
                loanInfo:{},
                ButtonShow:{},
                turnDown:{},
                bgType:'',
                typename:'',
                turnReason:'',
                turnComment:'',
    		    doname:'',
				dotype:'',
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
	     methods:{
	    	getData:getData,
	    },
	    computed: {
	    	isSign_loan_contract() {
	    		return this.loanInfo.loan_contract_no=='' ? "否" : "是";
	    	},
	    	warrant_status() {
	    		if(this.loanInfo.loan_status==-35){
	    			return 3;
	    		}
	    	}
	    },
	    created() {
	    	this.classMap=["bgcom5","bgcom6","bgcom17"]
	    	this.resultMap=['通过','驳回','终止']
	    },
	    mounted: function(){
	    	this.getData();
	    }

  }
//获取数据信息
  function getData(){
   //用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.data = response.data.warrantInfo;
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.ButtonShow=response.data.ButtonShow;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
			// console.log(this.turnDown);

    		if(this.data.warrant_status == 2)
    			this.isRejectClass = true;
    		if(this.turnDown.node_code=='JS00009')//家访
    		{
    			this.isShow = true;
    			this.bgType='bgsq1';
    			this.typename='家访结论';
    		}
    		if(this.turnDown.node_code=='JS00010')//公证
    		{   this.isShow = true;
    			this.bgType='bgsq2';
    			this.typename='公证结论';
    		}
    		if(this.turnDown.node_code=='JS00011')//抵押
    		{   this.isShow = true;
    			this.bgType='bgsq3';
    			this.typename='抵押结论';
    		}
    		if(this.turnDown.node_code=='JS00013')//CEO
    		{   this.isShow = true;
    			this.bgType='bgsq7';
    			this.typename='CEO结论';
    		}
    		if(this.turnDown.node_code=='JS00012')//GPS
    		{   this.isShow = true;
    			this.bgType='bgsq10';
    			this.typename='GPS结论';
    		}
    		if(this.turnDown.node_code=='DISANFANG')//DISANFANG
    		{   this.isShow = true;
    			this.bgType='bgsq4';
    			this.typename='第三方结论';
    		}
    		if(this.turnDown.node_code=='TUIHUI')//TUIHUI
    		{   this.isShow = true;
    			this.bgType='bgsq5';
    			this.typename='第三方结论';
    		}
    		if(this.turnDown.node_code=='CHAOSHI')//CHAOSHI
    		{   this.isShow = true;
    			this.bgType='bgsq6';
    			this.typename='第三方结论';
    		}

    	}else{
    		console.log("请求失败！！！");
    	}
    })
}


</script>
