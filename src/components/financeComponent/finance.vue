<template>
	<div class='finance'>	
		<div v-if="message" class="nullmessage">
			<span>
				{{message}}
			</span>
		</div>
		<div v-else>	
			<div class="order-result1">
				<span class="resultsuc"></span>
				<div class="order-result-msg v2-order-resultsuc">
					财务已放款
				</div>
			</div>
			<div class="financemsg">
				<ul>
					<li>放款卡号：尾号{{data.grant_loans_item_bank_no}}</li>
					<li>放款时间：{{data.grant_loans_item_time}}</li>
				</ul>

			</div>
		</div>
		
	</div>
</template>
<script>
import {urlParse} from '../../js/util'
	export default {
		data () {
			return {
				data:{},
				loan_id: (() => {
					let queryParam = urlParse();
					return queryParam.loan_id;
				})(),
				message: (() => {
					let queryParam = urlParse();
					return queryParam.message;
				})(),
			}		
		},
	    methods:{
	    	getData:getData
	    },
	    mounted: function(){
            this.getData();
	    }
  }
//获取数据信息
  function getData(){
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getFinanceLoans?loan_id='+this.loan_id).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.data= response.data;
    		console.log(response.data);
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}


</script>
<style type="text/css">
	.financemsg{
		border-top: 1px solid #dedede;
		padding-top: 15px;
		color: #444444;
		font-size: 14px;
		margin-left: 17px;
	}
</style>
