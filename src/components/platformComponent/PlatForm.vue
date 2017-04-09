<template>
	<div class="platform">
	<div v-title>工作台</div>		
		<div class="plat-header">
			
			<div class="plat-headercon">
				<h3>进取</h3>
				<span class="plat-headermsg">是一种生活方式</span>
			</div>
		</div>
		<div class="plat-main">
			<div class="plat-item">
				<h2>贷后跟单</h2>
				<ul class="plat-item-link">
					<router-link tag="li" :to="{ path: '/cloudbaddebt', query:{ order_status: 'repayment',user_token:user_token,titleid:'0'}}">
					<span class="v2bg plat-icon plat-icon1"></span><span class="plat-icon-txt">还款中</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudbaddebt', query:{ order_status: 'overdue',user_token:user_token,titleid:'1'}}">
					<span class="v2bg plat-icon plat-icon2"><span v-if="OverdueTotal>0"><i v-if="OverdueTotal>0 && OverdueTotal>=9">{{OverdueTotal}}</i><i v-else>9+</i></span></span><span class="plat-icon-txt">逾期单</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudbaddebt', query:{ order_status: 'bad_bill',user_token:user_token,titleid:'2'}}">
					<span class="v2bg plat-icon plat-icon3"></span><span class="plat-icon-txt">坏账单</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudbaddebt', query:{ order_status: 'checklist',user_token:user_token,titleid:'3'}}">
					<span class="v2bg plat-icon plat-icon4"></span><span class="plat-icon-txt">结清单</span></router-link>
				</ul>
			</div>
			<div class="plat-item">
				<h2>贷前跟单</h2>
				<ul class="plat-item-link">
					<router-link tag="li" :to="{ path: '/cloudlist', query:{ order_status: 'grab_single',user_token:user_token,titleid:'0',authority:authority,number:number }}">
					<!-- <li @click="daiqiangdan()">点击</li> -->
					<span class="v2bg plat-icon plat-icon5"></span><span class="plat-icon-txt">待抢单</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudlist', query:{ order_status: 'carry_out',user_token:user_token,titleid:'1',authority:authority,number:number  }}">
					<span class="v2bg plat-icon plat-icon6"></span><span class="plat-icon-txt">在途单</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudlist', query:{ order_status: 'advance',user_token:user_token,titleid:'2',authority:authority,number:number  }}">
					<span class="v2bg plat-icon plat-icon7"></span><span class="plat-icon-txt">推进中</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudlist', query:{ order_status: 'turn_down',user_token:user_token,titleid:'3',authority:authority,number:number }}">
					<span class="v2bg plat-icon plat-icon8"><span v-if="RejectedTotal>0"><i v-if="RejectedTotal>0 && RejectedTotal<=9">{{RejectedTotal}}</i><i v-else>9+</i></span></span><span class="plat-icon-txt">被驳回</span>
					</router-link>
				</ul>
				<ul class="plat-item-link" v-show="show">
					<router-link tag="li" :to="{ path: '/cloudbaddebt', query:{ order_status: 'invalid_order',user_token:user_token,titleid:'4'}}">
					<span class="v2bg plat-icon plat-icon9"></span><span class="plat-icon-txt">无效单</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudreject', query:{ order_status: 'rejected',user_token:user_token}}">
					<span class="v2bg plat-icon plat-icon10"></span><span class="plat-icon-txt">已驳回</span></router-link>
					<!-- <li><div class="plat-waiting"><span class="v2bg plat-icon plat-icon11"></span><span class="plat-waiting-txt">敬请期待</span></div></li> -->
					<li class="none"></li>
					<li class="none"></li>
				</ul>
				<div class="down"  @click="showAllPlat">
					<i class="v2bg plat-icon down-icon"></i>
				</div>
			</div>
			<div class="plat-item">
				<h2>任务中心</h2>
				<ul class="plat-item-link">
					<router-link tag="li" :to="{ path: '/taskCenter', query:{ order_status: 'invalid_order',user_token:user_token,titleid:'4'}}">
					<span class="v2bg plat-icon plat-icon12"></span><span class="plat-icon-txt">待领取</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudreject', query:{ order_status: 'rejected',user_token:user_token}}">
					<span class="v2bg plat-icon plat-icon13"></span><span class="plat-icon-txt">待办结</span></router-link>
					<router-link tag="li" :to="{ path: '/cloudreject', query:{ order_status:'rejected',user_token:user_token}}"><span class="v2bg plat-icon plat-icon14"></span><span class="plat-icon-txt">已办结</span></router-link>
					<!-- <li><div class="plat-waiting"><span class="v2bg plat-icon plat-icon11"></span><span class="plat-waiting-txt">敬请期待</span></div></li> -->
					<li class="none"></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="">
import {urlParse} from '../../js/util'

export default {
	data() {
		return {
			RejectedTotal:'',
			OverdueTotal:'',
			authority:'',
			number:'',
			show:false,
			user_token: (() => {
				let queryParam = urlParse();
				return queryParam.user_token;
			})(),
		}
	},

   methods:{
  	 getRejectedTotal(){
  	 	//console.log(this.$store.state.apiUrl);
    	this.$http.get(this.$store.state.apiUrl+'/loan/getRejectedTotal?user_token='+this.user_token).then((response) => {
    		response = response.body;
    			if(response.code == 0){
	    			this.RejectedTotal = response.data;
	    			// console.log(this.user_token);
	    		}	
	    		else{
	    			console.log("请求失败！！！");
	    		}	
	   	 })
		},
	 getOverdueTotal(){
    	this.$http.get(this.$store.state.apiUrl+'/loan/getOverdueTotal?user_token='+this.user_token).then((response) => {
    		response = response.body;
    			if(response.code == 0){
    				this.OverdueTotal = response.data;
    			}
    			else{
	    			console.log("请求失败！！！");
	    		}	
	    	})
		},
		//获取权限
	   getauthority() {
		 	this.$http.get(this.$store.state.apiUrl+'/loan/locationTab?user_token='+this.user_token).then((response) => {
	    		response = response.body;
	    			if(response.code == 0){
		    			this.authority = response.data.navtitle;
		    			this.authority.forEach((element, index) => {
							// console.log(navsigle.name+":"+navsigle.is_show);
							if(element.is_show){
								this.authority=element.code;
								this.number=index;
								return;
								// console.log(this.authority);
							}
						})
		    		}	
		    		else{
		    			console.log("请求失败！！！");
		    		}	
		   	 })
		 },
		 //完全显示带钱跟单面板
		 showAllPlat(){
		 	this.show = !this.show;
		 }
	
	},
	mounted: function (){
		this.getRejectedTotal(),
		this.getOverdueTotal(),
		this.getauthority()
	}
	

}
</script>

<style>
/*
create by landy
2016-10-19
*/
.plat-header{
	background: url('../../imgs/v2_jobbg.png') no-repeat;
	background-size: 100% 100%;
	color: #ffffff;
	width: 100%;
}
@media screen and (max-width : 320px) {
	.plat-header{
		height: 140px;
	}
	.plat-headermsg{
		line-height: 100%;
	}
	.plat-headercon h3{
		font-size: 0.533333rem;
		margin-top: -15px;
		padding-top: 40px;
	}
}
@media screen and (min-width : 321px) and (max-width : 375px) {
	.plat-header{
		height: 160px;
	}
	.plat-headermsg{
		line-height: 150%;
	}
	.plat-headercon h3{
		font-size: 0.533333rem;
		margin-top: -15px;
		padding-top: 48px;
	}
}
@media screen and (min-width : 376px) and (max-width : 750px) {
	.plat-header{
		height: 184px;
	}
	.plat-headermsg{
		line-height: 230%;
	}
	.plat-headercon h3{
		font-size: 0.533333rem;
		margin-top: -15px;
		padding-top: 55px;
	}
}
@media screen and (min-width : 750px) and (max-width : 1080px) {
	.plat-header{
		height: 184px;
	}
	.plat-headermsg{
		line-height: 230%;
	}
	.plat-headercon h3{
		font-size: 0.533333rem;
		margin-top: -15px;
		padding-top: 55px;
	}
}


.plat-headercon{
	position: relative;
	font-size: 0.533333rem;
	text-align: center;
	margin-top: 15px;

}
/* .plat-headercon h3{
	font-size: 0.533333rem;
	margin-top: -15px;
	padding-top: 40px;
} */
/* .plat-headermsg{
	line-height: 100%;
}
 */
.plat-main{
	margin:0.133333rem 0.453333rem 50px 0.453333rem;
}
.plat-main .plat-item{
	background: #ffffff;
	margin-top: 0.266667rem;
}
.plat-main .plat-item h2{
	width: 2.266667rem;
	height: 1.12rem;
	line-height: 1.12rem;
	color: #444444;
	font-size: 0.4rem;
	text-align: center;
}
.plat-item-link{
	display: flex;
}
.plat-item-link li{
	flex: 4;
	text-align: center;
	border-left: 1px solid #ececec;
	margin-left: -1px;
	height: 1.333333rem;
	padding-top: 0.08rem;
	margin-top: 0.186667rem;
	margin-bottom: 0.36rem;
}
.plat-item-link li.none{
	border-left: none;
}

/* @keyframes icon-play{
	0%{
		opacity: 0;
		transform: translate(0,0.706667rem);
	}
	100%{
		opacity: 1;
		transform: translate(0,0);
	}
} */

.plat-icon-txt{
	font-size: 0.32rem;
	color: #444444;
/* 	opacity: 0;
	 -webkit-animation: icon-play 3s;
	 animation: icon-play 3s;
	 -webkit-animation-fill-mode: forwards ;
	 animation-fill-mode: forwards ; */
}

.plat-icon{
	position: relative;
	height: 0.706667rem;
	margin: 0 auto;
	/* opacity: 0;
	-webkit-animation: icon-play 0.5s;
	animation: icon-play 0.5s;
	-webkit-animation-fill-mode: forwards ;
	animation-fill-mode: forwards ;  */
}

.plat-icon i{
	position: absolute;
	top: -0.133333rem;
	right: -0.306667rem;
	background: #fc3b00;
	border-radius: 30%;
	color: #ffffff;
	font-size: 0.266667rem;
	line-height: 0.426667rem;
	padding: 0 0.133333rem;
}
.plat-icon1{
	background-position: 0 0;
	width: 0.586667rem;
}
.plat-icon2{
	background-position: 0 -0.733333rem;
	width: 0.586667rem;	
	animation-delay: 0.2s;
}
.plat-icon3{
	background-position: 0 -1.533333rem;
	width: 0.52rem;
	animation-delay: 0.3s;
}
.plat-icon4{
	background-position: 0 -2.306667rem;
	width: 0.626667rem;
	animation-delay: 0.4s;
}

.plat-icon5{
	background-position: 0 -3.066667rem;
	width: 0.44rem;
	animation-delay: 0.5s;
}
.plat-icon6{
	background-position: 0 -3.8rem;
	width: 0.586667rem;	
	animation-delay: 0.6s;
}
.plat-icon7{
	background-position: 0 -4.6rem;
	width: 0.773333rem;
	animation-delay: 0.7s;
}
.plat-icon8{
	background-position: 0 -5.333333rem;
	width: 0.546667rem;
	animation-delay: 0.8s;
}

.plat-icon9{
	background-position: 0 -6.066667rem;
	width: 0.533333rem;
	animation-delay: 0.9s;
}
.plat-icon10{
	background-position: 0 -6.8rem;
	width: 0.613333rem;
	animation-delay: 1s;
}
.plat-icon11{
	background-position: 0 -7.533333rem;
	width: 0.613333rem;
	height: 0.613333rem;
}
.plat-icon12{
	background-position: 0 -12.426667rem;
	width: 0.64rem;
	height: 0.613333rem;
}
.plat-icon13{
	background-position: 0 -13.093333rem;
	width: 0.546667rem;
	height: 0.613333rem;
}
.plat-icon14{
	background-position: 0 -13.773333rem;
	width: 0.626667rem;
	height: 0.613333rem;
}
.plat-waiting{
	margin-top: -0.08rem;
	margin-left: 10%;
	border: 1px dashed #e5e5e5;
	padding: 0.093333rem;
	height: 1.333333rem;
	width: 80%;
}
.plat-waiting-txt{
	font-size: 0.266667rem;
	color: #999999;
}
/* 2.1新增 */
.down{
	height: 0.986667rem;
	padding-top: 0.36rem;
	text-align: center;
}
.down i{
	width: 0.466667rem;
	height: 0.333333rem;
	margin: 0 auto;
	display: block;
	background-position: -0.773333rem 0;
}
</style>