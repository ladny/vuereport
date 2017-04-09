<template>
<div class="morthousedetail">
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
	   <h2>抵押结论</h2>
		<conclusion name="抵押结论" :result="resultMap[data.mortgage_status-1]" :comment="data.mortgage_comment" :type="classMap[data.mortgage_status-1]"></conclusion>
		<h2>抵押信息</h2>
		<div class="pawnmain" v-if="loan_mortgage_type==1">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{ data.user_name }}</dd>
			</dl>
			<dl>
				<dt>资金方：</dt>
				<dd>{{ data.funder_name }}</dd>
			</dl>
			<dl>
				<dt>领取证件：</dt>
				<dd>{{ data.mortgage_certificate }}</dd>
			</dl>
			<dl v-if="data.mortgage_certificate_time">
				<dt style="width:140px">最早领取他项权证：</dt>
				<dd>{{ data.mortgage_certificate_time }}</dd>
			</dl>
		</div>
		<div class="pawnmain" v-if="loan_mortgage_type==2">
			<dl>
				<dt>借款人姓名：</dt>
				<dd>{{ data.user_name }}</dd>
			</dl>
			<dl>
				<dt>资金方：</dt>
				<dd>{{ data.funder_name }}</dd>
			</dl>
		</div>
	
	</div>
	<bluebtn v-if="isShow" :isGet="loanInfo.mortgage_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :user_name="loanInfo.user_name" :funder_name="notaryInfo.funder_name"></bluebtn>

</div>
</div>
</template>
<script type="text/ecmascript-6">
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
	    	this.classMap=["bgcom7","bgcom13","bgcom7"]
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
    		this.data = response.data.mortgageCarHouse;
    		this.loanInfo= response.data.loanInfo;
    		this.notaryInfo= response.data.notaryInfo;
    		this.userInfo= response.data.userInfo;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		this.ButtonShow=response.data.ButtonShow.button;
    		if(this.data.mortgage_status == 2)
    			this.isRejectClass = true;
    		if(this.data.mortgage_status == 3)
    			this.isShow = true;
    	}else{
    		console.log("请求失败！！！");
    	}
    })
}
  


</script>