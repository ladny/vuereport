<template>
	<div class="ceodetail">
	<div v-title>订单详情</div>
	<div v-if="message" class="nullmessage">
		<span>
			{{message}}
		</span>
	</div>

	<div v-else>
		<reject v-if="isShow" :rejectname="turnDown.log_user_name" :rejecttime="turnDown.log_add_time" :reason="turnReason" :type="bgType" typename="财务驳回" :comment="turnComment" :doname="doname" :dotype="dotype"></reject>

		<div v-if="loan_mortgage_type==1" v-show="isCountHost" class="pawnhost">
			<span class="pawnhostname"  :class="{ pawnhostnamered: isRejectClass }">{{doname}}已驳回</span>
			<span class="pawnhostdate">{{turnDown.log_add_time}}</span>
		</div>

		<div v-if="loan_mortgage_type==1" v-show="isShowHost" class="pawnhost">
			<span class="pawnhostname"  :class="{ pawnhostnamered: isRejectClass }">{{ceoHouse.ceo_user_name}}{{this.ceoDo}}</span>
			<span class="pawnhostdate">{{ceoHouse.ceo_update_time}}</span>
		</div>		

		<div v-if="loan_mortgage_type==1" class="pawn">
			<div v-if="addresult==true">
			<h2>CEO结论</h2>
			<conclusion name="CEO结论" :result="resultMap[ceoHouse.ceo_status-1]" :comment="ceoInfo.ceo_comment" :type="classMap[ceoHouse.ceo_status-1]"></conclusion>
			</div>
			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>权证指令</h2>
			<div class="pawnmain pr">	
			<span v-if="ceoCar.ceo_status!='0'" class="circlebg bgcommon" :class="classMap[ceoHouse.ceo_status-1]"></span>
				<dl>
					<dt>权证下发人:</dt>
					<dd>{{ceoHouse.warrant_user_name}}</dd>
				</dl>
				<dl v-if="ceoHouse.notary_user_name">
					<dt>公证负责人:</dt>
					<dd>{{ceoHouse.notary_user_name}}</dd>
				</dl>
				<dl v-if="ceoHouse.mortgage_user_name">
					<dt>抵押负责人:</dt>
					<dd>{{ceoHouse.mortgage_user_name}}</dd>
				</dl>
				<dl v-if="ceoHouse.company_visit_user_name">
					<dt style="width:120px">公司家访负责人:</dt>
					<dd>{{ceoHouse.company_visit_user_name}}</dd>
					<dd v-show="ceoHouse.company_visit_result=='家访异常'" style="color:#fc3b00;font-size: 13px; text-align: right">{{ceoHouse.company_visit_result}}</dd>
				</dl>
				<dl v-if="ceoHouse.live_home_visit_user_name">
					<dt style="width:130px">居住地家访负责人:</dt>
					<dd>{{ceoHouse.live_home_visit_user_name}}</dd>
					<dd v-show="ceoHouse.live_home_visit_result=='家访异常'" style="color:#fc3b00;font-size: 13px; text-align: right">{{ceoHouse.live_home_visit_result}}</dd>
				</dl>
				<dl v-if="ceoHouse.visit_user_name">
					<dt style="width:130px">抵押家访负责人:</dt>
					<dd>{{ceoHouse.visit_user_name}}</dd>
				</dl>
				<dl v-if="ceoHouse.notary_loan_contract_user_name">
					<dt style="width:130px">借款公证名下人:</dt>
					<dd>{{ ceoHouse.notary_loan_contract_user_name }}</dd>
				</dl>
			</div>
			<h2>资金来源</h2>
			<div class="pawnmain">
				<dl>
					<dt>公司名称:</dt>
					<dd>{{ceoHouse.funder_name}}</dd>
				</dl>
			</div>
			<h2>房产抵押<span class="pawntype">{{ceoHouse.loan_house_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{ceoHouse.user_name}}</dd>
				</dl>
				<dl v-if="ceoHouse.second_user_name">
					<dt>第二借款人：</dt>
					<dd>{{ ceoHouse.second_user_name}}</dd>
				</dl>
				<dl>
					<dt>借款金额：</dt>
					<dd>{{ceoHouse.loan_money}} </dd>
				</dl>
				<dl>
					<dt>借款期限：</dt>
					<dd>{{ceoHouse.loan_deadline}}{{ceoHouse.loan_deadline_unit}}</dd>
				</dl>
				<dl>
					<dt>借款利率：</dt>
					<dd>{{ ceoHouse.loan_rate }}</dd>
				</dl>
				<dl>
					<dt>资产估值：</dt>
					<dd>{{ceoHouse.assess_third_price}}</dd>
				</dl>
				<dl>
					<dt>预授信：</dt>
					<dd>{{ceoHouse.assess_refer_price}}</dd>
				</dl>
				<dl>
					<dt>保证金：</dt>
					<dd>{{ceoHouse.loan_margin}}</dd>
				</dl>
				<dl>
					<dt>担保服务费：</dt>
					<dd>{{loanInfo.guarantee_fee}}</dd>
				</dl>
				<dl>
					<dt>其他费用：</dt>
					<dd>{{ceoHouse.loan_other_money}}</dd>
				</dl>
				<dl>
					<dt>返点利率：</dt>
					<dd>{{ loanInfo.loan_commission_rate }}</dd>
				</dl>
				<dl>
					<dt>同行服务费：</dt>
					<dd>{{loanInfo.peer_service_fee}}</dd>
				</dl>
				<dl>
					<dt>返佣方式：</dt>
					<dd>{{ceoHouse.loan_commission_type}}</dd>
				</dl>
				<dl>
					<dt>返佣期数：</dt>
					<dd>{{ ceoHouse.loan_commission_period }}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{ceoHouse.loan_repay_type}}</dd>
				</dl>
			</div>
			<h2>客户信息</h2>
			<div class="pawnmain">
				<dl>
					<dt>客户来源:</dt>
					<dd>{{ ceoHouse.user_type}}</dd>
				</dl>
				<dl>
					<dt>客户名称:</dt>
					<dd>{{ loanInfo.user_name }}</dd>
				</dl>
			</div>
		</div>

		<div v-if="loan_mortgage_type==2" v-show="isCountHost" class="pawnhost">
			<span class="pawnhostname" :class="{ pawnhostnamered: isRejectClass }">{{doname}}已驳回</span>
			<span class="pawnhostdate">{{turnDown.log_add_time}}</span>
		</div>

		<div v-if="loan_mortgage_type==2" v-show="isShowHost" class="pawnhost">
			<span class="pawnhostname" :class="{ pawnhostnamered: isRejectClass }">{{ceoCar.ceo_user_name}}{{this.ceoDo}}</span>
			<span class="pawnhostdate">{{ceoCar.ceo_update_time}}</span>
		</div>		

		<div v-if="loan_mortgage_type==2" class="pawn">
			<div v-if="addresult==true">
				<h2>CEO结论</h2>
				<conclusion name="CEO结论" :result="resultMap[ceoCar.ceo_status-1]" :comment="ceoInfo.ceo_comment" :type="classMap[ceoCar.ceo_status-1]"></conclusion>
			</div>

			<h2>业务员信息</h2>
			<saler :salername="userInfo.real_name" :telno="userInfo.phone" :company="userInfo.company_name"></saler>
			<h2>权证指令</h2>
			<div class="pawnmain pr">
				<span v-if="ceoCar.ceo_status!='0'" class="circlebg bgcommon" :class="classMap[ceoCar.ceo_status-1]"></span>
				<dl>
					<dt>权证下发人:</dt>
					<dd>{{ceoCar.warrant_user_name}}</dd>
				</dl>
				<dl v-if="ceoCar.notary_user_name">
					<dt>公证负责人:</dt>
					<dd>{{ceoCar.notary_user_name}}</dd>
				</dl>
				<dl v-if="ceoCar.mortgage_user_name">
					<dt>抵押负责人:</dt>
					<dd>{{ceoCar.mortgage_user_name}}</dd>
				</dl>
				<dl v-if="ceoCar.company_visit_user_name">
					<dt style="width:120px">公司家访负责人:</dt>
					<dd>{{ceoCar.company_visit_user_name}}</dd>
					<dd v-show="ceoCar.company_visit_result=='家访异常'" style="color:#fc3b00;font-size: 13px; text-align: right">{{ceoCar.company_visit_result}}</dd>
				</dl>
				<dl v-if="ceoCar.live_home_visit_user_name">
					<dt style="width:130px">居住地家访负责人:</dt>
					<dd>{{ceoCar.live_home_visit_user_name}}</dd>
					<dd v-show="ceoCar.live_home_visit_result=='家访异常'" style="color:#fc3b00;font-size: 13px; text-align: right">{{ceoCar.live_home_visit_result}}</dd>
				</dl>
				<dl v-if="ceoCar.visit_user_name">
					<dt style="width:130px">抵押家访负责人:</dt>
					<dd>{{ceoCar.visit_user_name}}</dd>
				</dl>
				<dl>
					<dt>GPS安装人:</dt>
					<dd>{{ceoCar.gps_user_name}}</dd>
				</dl>
				<dl v-if="ceoCar.notary_loan_contract_user_name">
					<dt style="width:130px">借款公证名下人:</dt>
					<dd>{{ceoCar.notary_loan_contract_user_name}}</dd>
				</dl>		
			</div>
			<h2>资金来源</h2>
			<div class="pawnmain">
				<dl>
					<dt>公司名称:</dt>
					<dd>{{ceoCar.funder_name}}</dd>
				</dl>
			</div>
			<h2>车辆抵押<span class="pawntype">{{ceoCar.loan_house_mortgage_type}}</span></h2>
			<div class="pawnmain">
				<dl>
					<dt>借款人姓名：</dt>
					<dd>{{ceoCar.user_name}}</dd>
				</dl>
				<dl v-if="ceoCar.second_user_name">
					<dt>第二借款人：</dt>
					<dd>{{ ceoCar.second_user_name}}</dd>
				</dl>
				<dl>
					<dt>借款金额：</dt>
					<dd>{{ceoCar.loan_money}} </dd>
				</dl>
				<dl>
					<dt>借款期限：</dt>
					<dd>{{ceoCar.loan_deadline}}{{ceoCar.loan_deadline_unit}}</dd>
				</dl>
				<dl>
					<dt>借款利率：</dt>
					<dd>{{ ceoCar.loan_rate }}</dd>
				</dl>
				<dl>
					<dt>资产估值：</dt>
					<dd>{{ceoCar.assess_third_price}}</dd>
				</dl>
				<dl>
					<dt>预授信：</dt>
					<dd>{{ceoCar.assess_refer_price}}</dd>
				</dl>
				<dl>
					<dt>保证金：</dt>
					<dd>{{ceoCar.loan_margin}}</dd>
				</dl>
				<dl>
					<dt>担保服务费：</dt>
					<dd>{{loanInfo.guarantee_fee}}</dd>
				</dl>
				<dl v-if="ceoCar.loan_parking_gps_type">
					<dt>{{ceoCar.loan_parking_gps_type}}：</dt>
					<dd>{{ceoCar.loan_parking_gps_mode}}-{{ceoCar.loan_parking_gps_fee}}</dd>
				</dl>
				
				<dl>
					<dt>暂住证费用：</dt>
					<dd>{{ceoCar.loan_stay_fee}}</dd>
				</dl>
				<dl>
					<dt>违章费用：</dt>
					<dd>{{ceoCar.loan_peccancy_fee}}</dd>
				</dl>
				<dl>
					<dt>其他费用：</dt>
					<dd>{{ceoCar.loan_other_money}}</dd>
				</dl>
				<dl>
					<dt>本人本户：</dt>
					<dd>{{ceoCar.gps_owner_name}}</dd>
				</dl>
				<dl>
					<dt>返点利率：</dt>
					<dd>{{ loanInfo.loan_commission_rate }}</dd>
				</dl>
				<dl>
					<dt>同行服务费：</dt>
					<dd>{{loanInfo.peer_service_fee}}</dd>
				</dl>
				<dl>
					<dt>返佣方式：</dt>
					<dd>{{ceoCar.loan_commission_type}}</dd>
				</dl>
				<dl>
					<dt>返佣期数：</dt>
					<dd>{{ ceoCar.loan_commission_period }}</dd>
				</dl>
				<dl>
					<dt>还款方式：</dt>
					<dd>{{ceoCar.loan_repay_type}}</dd>
				</dl>
			</div>
			<h2>客户信息</h2>
			<div class="pawnmain">
				<dl>
					<dt>客户来源:</dt>
					<dd>{{ ceoCar.user_type}}</dd>
				</dl>
				<dl>
					<dt>客户名称:</dt>
					<dd>{{ loanInfo.custom_name}}</dd>
				</dl>
			</div>
		</div>

		<bluebtn isGet="1" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :isCeoDeal="isCeoDeal"></bluebtn>

	</div>
</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import navList from '../navComponent/NavList'
	import nullpage from '../nullpageComponent/nullpage'
	import saler from '../conclusionComponent/saler'
	import reject from '../conclusionComponent/reject'
	import bluebtn from '../bottomComponent/BlueBtn'
	import conclusion from '../conclusionComponent/conclusion'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				isShow:false,
				isRejectClass:false,
				ceoHouse:{},
				ceoCar:{},
				userInfo:{},
				loanInfo:{},
				turnDown:{},
				ceoDo:'',
				bgType:'',
				turnReason:'',
				turnComment:'',
				doname:'',
				dotype:'',
				isShowHost:true,
				isCountHost:false,
				isCeoDeal:false,
				isRejectClass: false,
				addresult:false,
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
	      saler,
	      bluebtn,
	      reject,
	      conclusion
	    },
	    methods:{
	    	getData:getData,
	    },
	    created() {
	    	this.classMap=["bgcom12","bgcom11","bgcom12"]
	    	this.resultMap=['通过','驳回','通过']
	    },
	    mounted: function () {
	    	this.getData();
	    }
  }

//获取数据信息
  function getData() {
  	//用户ID userId 订单ID loan_id code	0为成功，
     this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.ceoHouse = response.data.ceoHouseInfo;
    		this.ceoCar = response.data.ceoCarInfo;
    		this.ceoInfo = response.data.ceoInfo;
    		this.userInfo=response.data.userInfo;
    		this.loanInfo=response.data.loanInfo;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		if(this.loanInfo.loan_status==81 || this.loanInfo.loan_status=='81')
    		{
    			this.isShow = true;
    			this.bgType='bgsq8';
    			this.isCountHost=true,
    			this.isRejectClass = true;
    		}

    		if(this.ceoHouse.ceo_status == 0){
    			this.ceoDo = '待审批';
    			this.isCeoDeal=true;
    		}
    		if(this.ceoCar.ceo_status == 0){
    			this.ceoDo = '待审批';
    			this.isCeoDeal=true;
    		}
    		if(this.ceoHouse.ceo_status == 1){
    			this.ceoDo = '已处理';
    			this.addresult=true;
    		}
    		if(this.ceoCar.ceo_status == 1){
    			this.ceoDo = '已处理';
    			this.addresult=true;
    		} 
    		if(this.ceoHouse.ceo_status == 2){  
    			this.ceoDo = '已驳回'
			    this.isRejectClass = true;
			}
			if(this.ceoCar.ceo_status == 2){  
    			this.ceoDo = '已驳回'
			    this.isRejectClass = true;
			}  			
    		if(this.ceoHouse.ceo_status == 3){
    			this.isShowHost = false,	
    			this.isShow = true;
    			this.isCeoDeal=true;   			
    		}			   			
    		if(this.ceoCar.ceo_status == 3){
    			this.isShowHost = false,	
    			this.isShow = true;
    			this.isCeoDeal=true;
    		}
    	  		
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}

</script>
