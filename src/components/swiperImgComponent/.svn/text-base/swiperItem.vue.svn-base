<template>
	<div class="imgs-container">
		<h3>{{ swiper_title }}</h3>
		<div class="swiper-container">
	         <ul class="swiper-wrapper">
	            <li class="swiper-slide" v-for="item in swiper_imgs"><img v-bind:src="item" width="100%" height="135"/></li>
	        </ul>
	        <div class="pagination"></div>
	    </div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Swiper from '../../js/swiper.min.js'

	export default {
		props:['swiper_title','swiper_imgs'],
	    mounted: function () {
	     var mySwiper = new Swiper('.swiper-container',{
	        pagination: '.pagination',
	        paginationClickable: true,
	        // autoplay: 5000,	//自动轮播时间
	        autoplayDisableOnInteraction: false,
	        loop: false		//循环滚动
	     });
	    }
	}
	
</script>


<style>
@import '../../css/swiper.min.css';
/*滑动样式*/
.swiper-container {}
.swiper-wrapper a{ display:block;}
.swiper-wrapper a img{display:block; width:100%;}
.pagination {position: absolute; z-index: 20; right: 10px; bottom:0;}
.swiper-pagination-switch { display: inline-block; width:10px; height:10px; border-radius:8px; margin-right: 5px; background: rgba(255,255,255,0.5);cursor: pointer;}
.swiper-active-switch { background: #fff;}
.pagination{text-align: center;}
.swiper-pagination-bullet-active { opacity: 1; background: #fff;}
</style>