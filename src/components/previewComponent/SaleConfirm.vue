<template>
<div class="saleconfirm">
	<div v-title>订单详情</div>
	<!-- <div class="maincontent"> -->
	<!-- <headerBack header_title="订单详情"></headerBack> -->
	<!-- <navList></navList> -->
	<div v-if="message" class="nullmessage">
	<span>
		{{message}}
	</span>
</div>

<div v-else>
	<hostname :hostname="userInfo.real_name" :update="loanInfo.loan_add_time" :type="isRejectClass"></hostname>
	<div v-if="loan_mortgage_type==1" class="pawn">
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
			<dt>建筑面积：</dt>
			<dd>{{assessHouse.house_build_area}}{{assessHouse.house_build_area_unit}}</dd>
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
		<!-- <div v-if="assessHouse.imgs" class="swiper-container">
	         <ul class="swiper-wrapper">
	            <li class="swiper-slide" v-for="item in assessHouse.imgs"><img v-bind:src="item.img_url" width="100%" height="135"/></li>
	        </ul>
	        <div class="pagination"></div>
	    </div>	 -->

	    <div class="pic-dialog"  flex="main:left cross:center">
                <swiper :options="swiperOption">
                  <swiperSlide v-for="item in assessHouse.imgs"><img :src='item.img_url' width="100%" height="135"/></swiperSlide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>              
        </div>   
	</div>
</div>

	<div v-if="loan_mortgage_type==2" class="pawn">
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
				<!-- <div v-if="assessCar.imgs" class="swiper-container" style="margin-top:10px">
			         <ul class="swiper-wrapper">
			            <li class="swiper-slide" v-for="item in assessCar.imgs"><img v-bind:src="item.img_url" width="100%" height="135"/></li>
			        </ul>
			        <div class="pagination"></div>
			    </div> -->

			    <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in assessCar.imgs"><img :src='item.img_url' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	        	</div>

			</div>	
</div>
	<!-- </div> -->
	<bluebtn :isGet="loanInfo.seller_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :user_mobile="loanInfo.user_mobile"></bluebtn>
	</div>
</div>
</template>
<script type="">
	import headerBack from '../headerComponent/HeaderBack'
	import bluebtn from '../bottomComponent/BlueBtn'
	import navList from '../navComponent/NavList'
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	import Swiper from '../../js/swiper.min.js'
	import mui from '../../js/mui.min.js'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				isRejectClass:false,//当驳回时显示红色样式ff
				isStop:false,
				userInfo:{},
                loanInfo:{},
                ButtonShow:{},
                assessHouse:{},
                assessCar:{ },
                swiperOption: {
			        pagination : '.swiper-pagination',
			    },
		       // swiperSlides: [1, 2, 3, 4, 5],
			      currentPage: 1,
			      lastPage: false,
			      currentCheckList: [],
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
	      hostname,
	      swiper,
    	  swiperSlide
	    },
	    methods:{
	    	getData:getData,
	    },
	    created() {
	    	this.classMap=["bgcom16"];
	    	this.getData();
	    },
	    // mounted() {	
	    // 	this.$nextTick(() => {
	    // 		var mySwiper = new Swiper('.swiper-container',{
			  //       pagination: '.pagination',
			  //       paginationClickable: true,
			  //       // autoplay: 5000,	//自动轮播时间
			  //       autoplayDisableOnInteraction: false,
			  //       loop: false,		//循环滚动
			  //    });
	    // 	}
	    // 	)
	    	
	    // },
	    computed: {
                    swiper() {
                      return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
                    }
                }
	  //   beforeCreate: function() {
			// let loading = this.$loading({body:true,text:"拼命加载中"});
			// // console.log(loading)
			// },
  }

  //获取数据信息
  function getData(){
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.assessHouse=response.data.assessHouse;
    		this.assessCar=response.data.assessCar;
    		this.ButtonShow=response.data.ButtonShow;
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}

</script>
  <style>
  .h100{
	height: 100%;
	position: relative;
}
.maincontent{
	position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
  /*.saleconfirm-box{
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	z-index: 1;
  	width:100%;
  	overflow-y:auto;
  	-webkit-overflow-scrolling: touch;
  }*/
 .swiper-pagination{
 	margin-top: -30px;
    width: 100%;
 }
 .swiper-pagination span{
 	margin: 0 5px;
 }
@import '../../css/swiper.min.css';
/*滑动样式*/
/* .swiper-container {height: 135px}
.swiper-wrapper a{ display:block;}
.swiper-wrapper a img{display:block; width:100%; height: 100%}
.pagination {position: absolute; z-index: 20; right: 10px; bottom:0;}
.swiper-pagination-switch { display: inline-block; width:10px; height:10px; border-radius:8px; margin-right: 5px; background: rgba(255,255,255,0.5);cursor: pointer;}
.swiper-active-switch { background: #fff;}
.pagination{text-align: center;}
.swiper-pagination-bullet-active { opacity: 1; background: #fff;} */
</style>
