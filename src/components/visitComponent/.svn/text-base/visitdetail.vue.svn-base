<template>
<div class="visitpawndetail">
<div v-title>订单详情</div>
<div v-if="message" class="nullmessage">
	<span>
		{{message}}
	</span>
</div>
<div v-else>
	<reject v-if="isShow" :rejectname="turnDown.log_user_name" :rejecttime="turnDown.log_add_time" :reason="turnReason"  type="bgsq7" typename="CEO结论" :comment="turnComment" :doname="doname" :dotype="dotype"></reject>

	<!-- 操作人员 -->
		<hostname :hostname="userInfo.carry_out_user_name" :update="userInfo.carry_out_time" :type="isRejectClass"></hostname>
	<div class="pawn" v-if="type==1">
		<h2>抵押家访结论</h2>
		<conclusion name="家访结论" :result="resultMap[pawndata.visit_result_status-1]" :comment="pawndata.visit_comment" :type="classMap[pawndata.visit_result_status-1]"></conclusion>
		<h2>基础信息</h2>
		<div class="pawnmain">
		<dl>
			<dt>家访地址：</dt>
			<dd>{{ pawndata.visit_address }}</dd>
		</dl>
		<dl>
			<dt>当前定位：</dt>
			<dd>{{pawndata.visit_locate_address}}</dd>
		</dl>
		<dl>
			<dt>借款人：</dt>
			<dd>{{loanInfo.user_name}}</dd>
		</dl>
		<dl>
			<dt>产权人：</dt>
			<dd>{{ pawndata.property_right_name }}</dd>
		</dl>
		<dl>
			<dt>共有权人：</dt>
			<dd>{{ pawndata.sharer_poperty_right_text }}</dd>
		</dl>
		<dl>
			<dt>房型：</dt>
			<dd>{{ pawndata.house_layout }}</dd>
		</dl>
		<dl>
			<dt>房龄：</dt>
			<dd>{{ pawndata.house_age }}</dd>
		</dl>
		<dl>
			<dt>房屋性质：</dt>
			<dd>{{ pawndata.house_property_text }}</dd>
		</dl>
		<dl>
			<dt>楼层：</dt>
			<dd>{{ pawndata.floor }}</dd>
		</dl>
		<dl>
			<dt>房屋朝向：</dt>
			<dd>{{ pawndata.orientation_text }}</dd>
		</dl>
		<dl>
			<dt>房屋类型：</dt>
			<dd>{{ pawndata.build_type_text }}</dd>
		</dl>
		<dl>
			<dt>装修情况：</dt>
			<dd>{{ pawndata.renovation_text }}</dd>
		</dl>
		</div>

		<h2>详细信息</h2>
		<div class="pawnmain">
		<dl>
			<dt>使用说明：</dt>
			<dd>{{ pawndata.house_use_text }}</dd>
		</dl>
		<dl>
			<dt>住户说明：</dt>
			<dd>{{ pawndata.live_people_text }}</dd>
		</dl>
		<dl>
			<dt>其他债权人：</dt>
			<dd>{{ pawndata.have_other_debtee_text }}</dd>
		</dl>
		<dl>
			<dt>物业服务：</dt>
			<dd>{{ pawndata.have_property_service_text }}</dd>
		</dl>
		<dl>
			<dt>学区房：</dt>
			<dd>{{ pawndata.is_school_house_text }}</dd>
		</dl>
		<dl>
			<dt>环境设施：</dt>
			<dd>{{ pawndata.environment_text }}</dd>
		</dl>
		<dl>
			<dt>快速成交价：</dt>
			<dd>{{ pawndata.quick_deal_price }}</dd>
		</dl>
		<div class="imgs-container">
			<h3>中介信息</h3>
			<!-- <div class="swiper-container">
		         <ul class="swiper-wrapper">
		            <li class="swiper-slide" v-for="item in pawndata.intermediary_img"><img v-bind:src="item" width="100%" height="135"/></li>
		        </ul>
		        <div class="pagination"></div>
		    </div> -->
		    <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in pawndata.intermediary_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>		
		</div>

		<h2>照片信息</h2>
		<div class="pawnmain">	
		<div class="imgs-container">
		<h3>小区照片</h3>
		<!-- <div class="swiper-container">
	         <ul class="swiper-wrapper">
	            <li class="swiper-slide" v-for="item in pawndata.village_img"><img v-bind:src="item" width="100%" height="135"/></li>
	        </ul>
	        <div class="pagination"></div>
	    </div> -->
	    <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in pawndata.village_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>
		<div class="imgs-container">
			<h3>房屋照片</h3>
			<!-- <div class="swiper-container">
		         <ul class="swiper-wrapper">
		            <li class="swiper-slide" v-for="item in pawndata.house_img"><img v-bind:src="item" width="100%" height="135"/></li>
		        </ul>
		        <div class="pagination"></div>
		    </div> -->
		    <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in pawndata.house_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>

		</div>
		<div class="imgs-container">
			<h3>与抵押物合照</h3>
			<!-- <div class="swiper-container">
		         <ul class="swiper-wrapper">
		            <li class="swiper-slide" v-for="item in pawndata.group_photo_img"><img v-bind:src="item" width="100%" height="135"/></li>
		        </ul>
		        <div class="pagination"></div>
		    </div> -->
		    <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in pawndata.group_photo_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>		
		</div>
	</div>

	<div class="pawn" v-if="type==2">
		<h2>居住家访结论</h2>
		<conclusion name="家访结论" :result="resultMap1[homedata.live_home_visit_result-1]" :comment="homedata.visit_comment" :type="classMap1[homedata.live_home_visit_result-1]"></conclusion>
		<h2>基础信息</h2>
		<div class="pawnmain">
		<dl>
			<dt>家访地址：</dt>
			<dd>{{homedata.visit_address}}</dd>
		</dl>
		<dl>
			<dt>当前定位：</dt>
			<dd>{{homedata.visit_locate_address}}</dd>
		</dl>
		<dl>
			<dt>借款人姓名：</dt>
			<dd>{{loanInfo.user_name}}</dd>
		</dl>
		<dl>
			<dt>房　　型：</dt>
			<dd>{{homedata.house_layout}}</dd>
		</dl>
		<dl>
			<dt>房　　龄：</dt>
			<dd>{{homedata.house_age}}</dd>
		</dl>
		</div>
		<h2>详细信息</h2>
		<div class="pawnmain">
		<dl>
			<dt>使用说明：</dt>
			<dd>{{homedata.house_use_text}}</dd>
		</dl>
		<dl>
			<dt>住户说明：</dt>
			<dd>{{homedata.live_people_text}}</dd>
		</dl>
		<dl>
			<dt>装修情况：</dt>
			<dd>{{homedata.renovation_text}}</dd>
		</dl>
		</div>
		<h2>照片信息</h2>
		<div class="pawnmain">	
		<div class="imgs-container">
		<h3>小区照片</h3>
		<!-- <div class="swiper-container">
	         <ul class="swiper-wrapper">
	            <li class="swiper-slide" v-for="item in homedata.village_img"><img v-bind:src="item" width="100%" height="135"/></li>
	        </ul>
	        <div class="pagination"></div>
	    </div> -->
	     <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in homedata.village_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>
		<div class="imgs-container">
			<h3>房屋照片</h3>
			<!-- <div class="swiper-container">
		         <ul class="swiper-wrapper">
		            <li class="swiper-slide" v-for="item in homedata.house_img"><img v-bind:src="item" width="100%" height="135"/></li>
		        </ul>
		        <div class="pagination"></div>
		    </div> -->
		     <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in homedata.house_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>
		<div class="imgs-container">
			<h3>与抵押物合照</h3>
			<!-- <div class="swiper-container">
		         <ul class="swiper-wrapper">
		            <li class="swiper-slide" v-for="item in homedata.group_photo_img"><img v-bind:src="item" width="100%" height="135"/></li>
		        </ul>
		        <div class="pagination"></div>
		    </div> -->
		     <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in homedata.group_photo_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>
		</div>
	</div>

	<div class="pawn" v-if="type==3">
	<h2>公司家访结论</h2>
	<conclusion name="家访结论" :result="resultMap1[companydata.company_visit_result-1]" :comment="companydata.visit_comment" :type="classMap1[companydata.company_visit_result-1]"></conclusion>
	<h2>基础信息</h2>
	<div class="pawnmain">
		<dl>
			<dt>家访地址：</dt>
			<dd>{{companydata.company_visit_address}}</dd>
		</dl>
		<dl>
			<dt>当前定位：</dt>
			<dd>{{companydata.visit_locate_address}}</dd>
		</dl>
		<dl>
			<dt>借款人姓名：</dt>
			<dd>{{loanInfo.user_name}}</dd>
		</dl>
		<dl>
			<dt>人员规模：</dt>
			<dd>{{companydata.company_persons}}</dd>
		</dl>
		<dl>
			<dt>面　　积：</dt>
			<dd>{{companydata.company_area}}</dd>
		</dl>
		<dl>
			<dt>产　　权：</dt>
			<dd>{{companydata.company_property_right}}</dd>
		</dl>
	</div>
	<h2>照片信息</h2>
	<div class="pawnmain">	
		<div class="imgs-container">
		<h3>公司照片</h3>
		<!-- <div class="swiper-container">
	         <ul class="swiper-wrapper">
	            <li class="swiper-slide" v-for="item in companydata.company_img"><img v-bind:src="item" width="100%" height="135"/></li>
	        </ul>
	        <div class="pagination"></div>
	    </div> -->
	     <div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in companydata.company_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
		</div>
	</div>
</div>
<bluebtn v-if="isShow" :isGet="loanInfo.house_visit_user_id
" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' :visit_id="visit_id" :type="type"></bluebtn>

</div>
</div>
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import navList from '../navComponent/NavList'
	import visitBottom from '../bottomComponent/BlueBtn'
	// import swiperItem from "../swiperImgComponent/swiperItem"
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	// import Swiper from '../../js/swiper.min.js'
	import bluebtn from '../bottomComponent/BlueBtn'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {urlParse} from '../../js/util'


	export default {
		data(){
			return {
				isShow:false,
				isRejectClass:false,
				pawndata:{},
				companydata:{},
				homedata:{},
				userInfo:{},
                loanInfo:{},
                ceoInfo:{},
                turnDown:{},
                ButtonShow:{},
                typename:'',
                turnReason:'',
                turnComment:'',
                doname:'',
				dotype:'',
                 swiperOption: {
			        pagination : '.swiper-pagination',
			      },
		       // swiperSlides: [1, 2, 3, 4, 5],
			      currentPage: 1,
			      lastPage: false,
			      currentCheckList: [],
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

				visit_id: (() => {
				let queryParam = urlParse();
					return queryParam.visit_id;
				})(),
				type: (() => {
				let queryParam = urlParse();
					return queryParam.type;
				})(),
				message: (() => {
					let queryParam = urlParse();
					return queryParam.message;
				})(),
			   }
		},
    	components: {
	      headerBack,
	      visitBottom,
	      // swiperItem,
	      navList,
	      conclusion,
	      reject,
	      hostname,
	      bluebtn,
	      swiper,
    	  swiperSlide
	    },
	    methods:{
	    	getVisitProject:getVisitProject
	    },
	    created() {
	    	this.classMap=["bgcom3","bgcom4","bgcom3"]
	    	this.resultMap=['正常','驳回','正常']
	    	this.classMap1=["bgcom3","bgcom1"]
	    	this.resultMap1=['正常','异常']
	    },
	    mounted () {
	    	this.getVisitProject();
	
	    },
	      computed: {
                    swiper() {
                      return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
                    }
                }
  }

  function getVisitProject(){
  	//用户ID userId 家访ID visitId code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&user_token='+this.user_token+'&visit_id='+this.visit_id+'&type='+this.type+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.pawndata = response.data.mortgageInfo;//抵押
    		this.companydata = response.data.companyVisitInfo;//公司
    		this.homedata = response.data.liveHomeInfo;//居住地
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.ceoInfo= response.data.ceoInfo;
    		this.ButtonShow=response.data.ButtonShow.button;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		
    		if(this.pawndata.visit_result_status == 2)//判断
    			this.isRejectClass = true;
    		if(this.pawndata.visit_result_status == 3)//判断
    			this.isShow = true;
    		if(this.companydata.visit_result_status == 2)//判断驳回时
    			this.isRejectClass = true;
    		if(this.companydata.visit_result_status == 3)//判断被驳回
    			this.isShow = true;
    		if(this.homedata.visit_result_status == 2)//判断
    			this.isRejectClass = true;
    		if(this.homedata.visit_result_status == 3)//判断
    			this.isShow = true;
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
@import '../../css/swiper.min.css';
/*滑动样式*/
/* .swiper-container {}
.swiper-wrapper a{ display:block;}
.swiper-wrapper a img{display:block; width:100%;}
.pagination {position: absolute; z-index: 20; right: 10px; bottom:0;}
.swiper-pagination-switch { display: inline-block; width:10px; height:10px; border-radius:8px; margin-right: 5px; background: rgba(255,255,255,0.5);cursor: pointer;}
.swiper-active-switch { background: #fff;}
.pagination{text-align: center;}
.swiper-pagination-bullet-active { opacity: 1; background: #fff;} */
</style>