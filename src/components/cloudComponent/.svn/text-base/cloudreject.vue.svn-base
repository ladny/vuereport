<template>
	<div class="cloudreject">
	<div v-title>已驳回</div>
		<!-- <headerBack header_title="已驳回"></headerBack> -->
		<div class="order-topcon mt20">
			<div v-show="isShowInfo" class="order-list">
				<div class="order-list-item" v-for="item in data">
					<div class="order-list-user v2-order-list-user">
						<span class="order-list-username">{{item.loan_user_name}}</span>
						<span class="order-list-no">{{item.loan_no}}</span>
					</div>
					<div class="order-list-main">
						<div class="v2-order-list-reject">
							<span class="v2-order-list-reject1">驳回原因：</span>
							<span class="v2-order-list-reject2 cred">{{item.reject_comment}}</span>
						</div>
					</div>
					<div class="order-list-timeaddress v2-order-list-timeaddress">
						<i class="order-list-timeicon"></i> {{item.reject_time}}
					</div>
				</div>

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
import headerBack from '../headerComponent/HeaderBack'
	export default {
		data() {
			return {
				data:{},
				isShowInfo:true,
				isShownonpage:false,
				order_status:this.$route.query.order_status,
				user_token:this.$route.query.user_token,
			}
		},
		components: {
	      headerBack,
	  	},
	  	methods: {
			getInitData:getInitData	
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
</script>