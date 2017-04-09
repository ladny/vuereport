<template>
	<div class="gpscardetail">
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
			<h2>安装结论</h2>
			<conclusion name="安装结论" :result="resultMap[install_verdict.gps_status-1]" :comment="install_verdict.gps_content" :type="classMap[install_verdict.gps_status-1]"></conclusion>

			<h2>基础信息</h2>
			<div class="pawnmain gpsmain">
				<dl>
					<dt style="width:250px">借款人{{data.user_name}} 与车主姓名是否一致：</dt>
					<dd>{{ base_message.gps_owner_name }}</dd>
				</dl>
				<dl v-if="isCarHost">
					<dt>车主姓名：</dt>
					<dd>{{base_message.gps_car_owner_name}}</dd>
				</dl>
				<dl>
					<dt style="width:200px">车牌号{{ base_message.loan_car_number }}是否一致：</dt>
					<dd>{{base_message.gps_num}}</dd>
				</dl>
				<dl>
					<dt>品牌{{ base_message.loan_car_brand }} 是否一致：</dt>
					<dd>{{ base_message.gps_brand }}</dd>
				</dl>
				<dl>
					<dt>颜色{{ base_message.loan_car_color }} 是否一致：</dt>
					<dd>{{ base_message.gps_color }}</dd>
				</dl>
				<dl>
					<dt>排量{{ base_message.loan_car_displacement }}是否一致：</dt>
					<dd>{{ base_message.gps_capacity }}</dd>
				</dl>
				<dl>
					<dt>开票价{{ base_message.loan_car_ticket_price }} 是否一致：</dt>
					<dd>{{ base_message.gps_price }}</dd>
				</dl>
				<dl>
					<dt>发动机号{{ base_message.loan_car_engine_type }}  是否一致：</dt>
					<dd>{{ base_message.gps_engine_num }}</dd>
				</dl>
				<dl>
					<dt>车架号{{ base_message.loan_car_frame_number }}是否一致：</dt>
					<dd>{{ base_message.gps_frame }}</dd>
				</dl>
				<dl>
					<dt style="100px">公里数：</dt>
					<dd>{{ base_message.gps_steer_km }}</dd>
				</dl>
			</div>
			<h2>车辆配置</h2>
			<div class="pawnmain">
				<dl>
					<dt>天窗：</dt>
					<dd>{{car_config.skylight}}</dd>
				</dl>
				<dl>
					<dt>电动座椅：</dt>
					<dd>{{ car_config.power_seat }}</dd>
				</dl>
				<dl>
					<dt>倒车雷达：</dt>
					<dd>{{ car_config.parking_sensors }}</dd>
				</dl>
				<dl>
					<dt>导航：</dt>
					<dd>{{ car_config.navigation }}</dd>
				</dl>
				<dl>
					<dt>一键启动：</dt>
					<dd>{{ car_config.button_start }}</dd>
				</dl>
				<dl>
					<dt style="width:110px">多功能方向盘：</dt>
					<dd>{{ car_config.multi_wheel }}</dd>
				</dl>
			</div>
			<h2>车辆排查</h2>
			<div class="pawnmain gpsmain">
				<dl>
					<dt>车内是否有霉味：</dt>
					<dd>{{ car_checking.gps_mouldy }}</dd>
				</dl>
				<dl>
					<dt>车座底部滑轨是否有锈蚀：</dt>
					<dd>{{ car_checking.gps_rust }}</dd>
				</dl>
				<dl>
					<dt style="width:240px">安全带全部抽出是否有泥土水印：</dt>
					<dd>{{ car_checking.gps_dirt }}</dd>
				</dl>
				<dl>
					<dt style="width:255px">后备箱备胎处是否有大量锈蚀及泥沙：</dt>
					<dd>{{ car_checking.gps_backup }}</dd>
				</dl>
				<dl>
					<dt style="width:210px">观察发动机盖前部是否有锈蚀：</dt>
					<dd>{{ car_checking.gps_engine_rust }}</dd>
				</dl>
				<dl>
					<dt style="width:210px">加油门查案是否有蓝烟黑烟：</dt>
					<dd>{{ car_checking.gps_smoking }}</dd>
				</dl>
				<dl>
					<dt style="width:210px">加油门听发动机是否有异响：</dt>
					<dd>{{ car_checking.gps_abnormal_sound }}</dd>
				</dl>
				<dl>
					<dt style="width:210px">把档位推入D档，是否有异响：</dt>
					<dd>{{ car_checking.gps_gears }}</dd>
				</dl>
			</div>
			<h2>照片信息</h2>
			<div class="pawnmain">	
				<!-- <swiperItem swiper_title="" :swiper_imgs='data.gps_img'></swiperItem> -->
				<div class="pic-dialog"  flex="main:left cross:center">
	                <swiper :options="swiperOption">
	                  <swiperSlide v-for="item in data.gps_img"><img :src='item' width="100%" height="135"/></swiperSlide>
	                  <div class="swiper-pagination" slot="pagination"></div>
	                </swiper>
	            </div>
			</div>
			<h2 v-show="isGPS || isCarHost">GPS信息</h2>
			<div class="pawnmain" v-show="isGPS || isCarHost">
				<div v-for="wired in data.gps_wired_gps">
					<dl>
						<dt style="width:140px">有线GPS安装位置：</dt>
						<dd>{{ wired.type}}</dd>
					</dl>
					<dl>
						<dt>GPS号：</dt>
						<dd style="width:70px">{{ wired.num}}</dd>
					</dl>
				</div>
				<div v-for="wireless in data.gps_wireless_gps">
					<dl>
						<dt style="width:140px">无线GPS安装位置：</dt>
						<dd>{{ wireless.type }}</dd>
					</dl>
					<dl>
						<dt style="width:70px">GPS号：</dt>
						<dd>{{ wireless.num }}</dd>
					</dl>
					
				</div>
			</div>
		</div>
		<bluebtn v-if="isShow" :isGet="loanInfo.gps_user_id" :btnList="ButtonShow" :authority="authority" :user_token='user_token' :loan_id='loan_id' :loan_mortgage_type='loan_mortgage_type' gpstype="2"></bluebtn>
	</div>
</div>	
</template>
<script>
	import headerBack from '../headerComponent/HeaderBack'
	import navList from '../navComponent/NavList'
	import swiperItem from '../swiperImgComponent/SwiperItem'
	import conclusion from '../conclusionComponent/conclusion'
	import reject from '../conclusionComponent/reject'
	import hostname from '../conclusionComponent/hostname'
	import bluebtn from '../bottomComponent/BlueBtn'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {urlParse} from '../../js/util'

	export default {
		data(){
			return {
				isShow:false,
				isRejectClass:false,
				data:{},
				loanInfo:{},
				userInfo:{},
				ButtonShow:{},
				base_message:{},
				install_verdict:{},
				car_config:{},
				car_checking:{},
				ceo_reject:{},
				turnDown:{},
                typename:'',
                turnReason:'',
                turnComment:'',
                doname:'',
				dotype:'',
				isGPS:false,
				isCarHost:false,
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
                message: (() => {
					let queryParam = urlParse();
					return queryParam.message;
				})(),
			}
		},
		components: {
	      headerBack,
	      swiperItem,
	      navList,
	      conclusion,
	      reject,
	      hostname,
	      bluebtn,
	      swiper,
    	  swiperSlide
	    },
	     methods: {
	    	getData:getData
	    },
	    created() {
	    	this.classMap=["bgcom9","bgcom10","bgcom9"]
	    	this.resultMap=['通过','驳回','通过']
	    },
	    mounted: function () {
	    	this.getData();
	    },
	     computed: {
                    swiper() {
                      return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
                    }
                }
	}

   //获取数据信息
  function getData() {
  	//用户ID userId 订单ID loan_id code	0为成功，
    this.$http.get(this.$store.state.apiUrl+'/loan/getOrderDetail?loan_id='+this.loan_id+'&&user_token='+this.user_token+'&role_code='+this.authority+'&order_status='+this.order_status).then((response) => {
    	response = response.body;
    	if(response.code == 0){
    		this.data = response.data.gpsInfo;
    		this.loanInfo= response.data.loanInfo;
    		this.userInfo= response.data.userInfo;
    		this.turnDown=response.data.turnDown;
    		this.turnReason=this.turnDown.log_cause;
    		this.turnComment=this.turnDown.log_comment;
    		this.doname=this.turnDown.log_to_user_name;
    		this.dotype=this.turnDown.node_code_name;
    		this.ButtonShow=response.data.ButtonShow.button;
    		this.base_message=response.data.gpsInfo.base_message;
    		this.install_verdict=response.data.gpsInfo.install_verdict;
    		this.car_config=response.data.gpsInfo.car_config;
    		this.car_checking=response.data.gpsInfo.car_checking;
    		this.ceo_reject=response.data.gpsInfo.ceo_reject
    		if(this.install_verdict.gps_status== 2)
    			this.isRejectClass = true;
    		if(this.install_verdict.gps_status == 3)
    			this.isShow = true;
    		if(this.data.gps_install_user_flag == 1 || this.data.gps_warrant_user_flag == 1)
    			this.isGPS = true;
    		if(this.base_message.gps_owner_name == "否")
    			this.isCarHost = true;
    	
    	}else{
    		console.log("请求失败！！！");
    	}
    })

}

</script>
<style>
.pawn .gpsmain dt{
	width: 190px;
}
 .swiper-pagination{
 	margin-top: -30px;
    width: 100%;
 }
 .swiper-pagination span{
 	margin: 0 5px;
 }
</style>