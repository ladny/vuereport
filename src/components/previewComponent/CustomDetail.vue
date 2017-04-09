<template>
<div class="customhousedetail">
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
		<h2 v-show="isStop==false" >客服结论</h2>
		<conclusion  v-show="isStop" name="客服结论" result="终止"  :comment="termination.log_comment" :type="classMap[0]"></conclusion>
		<conclusion v-show="isStop==false" :comment="assessInfo.access_comment" :type="classMap[1]"></conclusion>
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
		</div>
		<h2>借款需求</h2>
		<div class="pawnmain">
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
		</div>

		<h2>抵押物信息</h2>
		<div class="pawnmain">
			<dl>
				<dt>资产估值：</dt>
				<dd>{{assessInfo.assess_third_price}}</dd>
			</dl>
			<dl>
				<dt>预授信：</dt>
				<dd>{{assessInfo.assess_refer_price}}</dd>
			</dl>
			<dl>
				<dt>建筑面积：</dt>
				<dd>{{assessHouse.house_build_area}}</dd>
			</dl>
			<dl>
				<dt>规划用途：</dt>
				<dd>{{assessHouse.house_plan_use}}</dd>
			</dl>
			<dl>
				<dt>房产种类：</dt>
				<dd>{{assessHouse.house_type}}</dd>
			</dl>
			<dl>
				<dt>房产地址：</dt>
				<dd>{{assessHouse.house_address}}</dd>
			</dl>
			<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in assessHouse.imgs"><img :src='item.img_url' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div> 
		</div>

		<h2>司法背调</h2>
		<div class="pawnmain">
			<dl>
				<dt>失信次数：</dt>
				<dd>{{judicialInvestigation.judicial_number}}次</dd>
			</dl>
			<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in judicialInvestigation.imgs"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div> 
		</div>

		<h2>征信背调</h2>
		<div class="pawnmain">
			<dl>
				<dt>车贷逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_car_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.car_overdue_continuity}}累{{creditReporting.car_overdue_cumulative}} {{creditReporting.is_current_car_overdue_text}}</dd>
			</dl>
			<dl>
				<dt>房贷逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_house_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.house_overdue_continuity}}累{{creditReporting.house_overdue_cumulative}} {{creditReporting.is_current_house_overdue_text}}</dd>
			</dl>
			<dl>
				<dt>信用卡逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_credit_cards_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.credit_cards_overdue_continuity}}累{{creditReporting.credit_cards_overdue_cumulative}} {{creditReporting.is_current_credit_cards_overdue_text}}</dd>
			</dl>
			  <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in creditReporting.imgs"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div>   
		</div>

	</div>


	<div v-if="loan_mortgage_type==2" class="pawn">
		<h2 v-show="isStop==false">客服结论</h2>
		<conclusion v-show="isStop"  name="客服结论" result="终止" :comment="termination.log_comment" :type="classMap[0]"></conclusion>
		<conclusion  v-show="isStop==false" :comment="assessInfo.access_comment" :type="classMap[1]"></conclusion>
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
		</div>
		<h2>借款需求</h2>
		<div class="pawnmain">
			<dl>
				<dt>借款金额：</dt>
				<dd>{{loanInfo.loan_money}}元</dd>
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
		</div>
		<h2>抵押物信息</h2>
		<div class="pawnmain">
			<dl>
				<dt>资产估值：</dt>
				<dd>{{assessInfo.assess_third_price}}</dd>
			</dl>
			<dl>
				<dt>预授信：</dt>
				<dd>{{assessInfo.assess_refer_price}}</dd>
			</dl>
			<dl>
				<dt>车辆品牌：</dt>
				<dd>{{assessCar.car_brand}}</dd>
			</dl>
			<dl>
				<dt>车辆型号：</dt>
				<dd>{{assessCar.car_model}}</dd>
			</dl>

			<dl>
				<dt>行驶里程：</dt>
				<dd>{{assessCar.car_mileage}}</dd>
			</dl>
			<dl>
				<dt>登记日期：</dt>
				<dd>{{assessCar.car_regist_time}}</dd>
			</dl>
			<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in assessCar.imgs"><img :src='item.img_url' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div> 
		</div>

		<h2>司法背调</h2>
		<div class="pawnmain">
			<dl>
				<dt>失信次数：</dt>
				<dd>{{judicialInvestigation.judicial_number}}次</dd>
			</dl>
			<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in judicialInvestigation.imgs"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div> 
		</div>

		<h2>征信背调</h2>
		<div class="pawnmain">
			<dl>
				<dt>车贷逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_car_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.car_overdue_continuity}}累{{creditReporting.car_overdue_cumulative}} {{creditReporting.is_current_car_overdue_text}}</dd>
			</dl>
			<dl>
				<dt>房贷逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_house_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.house_overdue_continuity}}累{{creditReporting.house_overdue_cumulative}} {{creditReporting.is_current_house_overdue_text}}</dd>
			</dl>
			<dl>
				<dt>信用卡逾期：</dt>
				<dd v-if="creditReporting.is_overdue==0 || creditReporting.is_credit_cards_overdue==0">--</dd>
				<dd v-else>连{{creditReporting.credit_cards_overdue_continuity}}累{{creditReporting.credit_cards_overdue_cumulative}} {{creditReporting.is_current_credit_cards_overdue_text}}</dd>
			</dl>
 			<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in creditReporting.imgs"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>              
	          </div>  
	        </div>

	</div>
</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				isShow:false,//当被驳回的时候显示
				isRejectClass:false,//当驳回时显示红色样式
				turnDown:{},//被驳回
				typename:'',
                turnReason:'',
                turnComment:'',
                doname:'',
				dotype:'',
				isStop:false,
				userInfo:{},
                loanInfo:{},
                ceoInfo:{},
                assessHouse:{},
                assessCar:{},
                assessInfo:{},
                termination:{},
                creditReporting:{},
                judicialInvestigation:{},
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
				message: (() => {
					let queryParam = urlParse();
					return queryParam.message;
				})(),
				order_status:'advance',
				authority:'JS00003',
				 swiperOption: {
			        pagination : '.swiper-pagination',
			      },
		       // swiperSlides: [1, 2, 3, 4, 5],
			      currentPage: 1,
			      lastPage: false,
			      currentCheckList: [],
			   }
		},		
    	components: {
	      headerBack,
	      conclusion,
	      reject,
	      hostname,
	      swiper,
    	  swiperSlide
	    },
	    methods:{
	    	getData:getData
	    },
	    created() {
	    	this.classMap=["bgcom15","bgcom20"]
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
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.assessHouse =response.data.assessHouse; 
    		this.assessCar =response.data.assessCar; 
    		this.assessInfo=response.data.assessInfo;
    		this.judicialInvestigation =response.data.judicialInvestigation;
    		this.creditReporting =response.data.creditReporting; 
    		this.termination=response.data.termination;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		if(this.loanInfo.service_status==2){
    			this.isShow = true;
    		}
    		if(this.loanInfo.loan_status==-15){
	    		this.isStop=true;
	    		this.isRejectClass=true;
	    	}

	    	console.log(this.creditReporting);
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}

</script>
  <style>
   .swiper-pagination{
 	margin-top: -30px;
    width: 100%;
 }
 .swiper-pagination span{
 	margin: 0 5px;
 }
</style>