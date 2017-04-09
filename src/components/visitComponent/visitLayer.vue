<template>
	<div class="visitLayer">
		<div class="visitMask"></div>
		<div class="visitmain">
			<h2><i class="iconback" @click="closeMe"></i><span>选择家访地址</span></h2>
			<div class="visitList">
				<ul>
					<li v-for="item in visitChoose"  @click="isChoose($index)"><i :class="classMap[item.type]"></i><span :class="{'ignore':'item.status==1'}">{{item.address}}</span><em v-if="item.status==1">已领取</em><i v-if="item.isSelected==true" :class="{icon_ok:'item.isSelected==true'}"></i></li>
				</ul>
			</div>
			<div class="visitBtn" @click="visitGo">去执行</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				// isGet:true,//是否已领取
				// isselected:false,//是否选中
				visitChoose:[
				{ 
					type:0,//家访类型
                    name:"公司家访",
                    address:"北京市朝阳区世贸大厦1",
                    status:1,//已领取
                    isSelected:false
                },
                {
                    type:1, 
                    name:"居住家访",
                    address:"北京市朝阳区世贸大厦2",
                    status:0,
                    isSelected:false//isSelected是否选中
                },
				{
                    type:2,  
                    name:"抵押家访",
                    address:"北京市朝阳区世贸大厦3",
                    status:0,
                    isSelected:false
                }
				]//type 家访类型  name 家访地址 status 是否可以领取 isSelected是否选中
			}
		},
		methods:{
			visitGo () {
				this.visitChoose.push();
			},
			closeMe () {
				this.$emit('layerSay',false)
			},
			isChoose: function (index) {
         	// this.visitChoose[index].isSelected=true;
         	console.log(this.visitChoose[0].isSelected)
         	}

		},
		created() {
	    	this.classMap=["icon_company","icon_house","icon_pawn"];
	    	this.resultMap=['公司家访','居住家访','抵押家访']
	    },
	}

</script>


<style>

/* 暂不处理 */
/* layer */
.visitMask{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,0.7);
	z-index: 100;
}
.visitmain{
	position: fixed;
	z-index: 101;
	left: 0;
	bottom: 0;
	background: #ffffff;
	width: 100%;
	height: auto;
	color: #444444;
}
.visitmain h2{
	margin: 0;
	height: 44px;
	line-height: 44px;
	border-bottom: 1px solid #dedede;
	background: #f5f5f5;
	font-size: 17px;
	text-align: center;
}
.visitmain h2 span{
	margin-left: -17px;
}
.visitList{

}
.visitList li{
	padding-left:17px;
	height: 38px;
	line-height: 38px;
	border-bottom: 1px solid #e4e4e4;
}
.visitList li .ignore{
	color: #b5b5b5;
}
.visitList li em{
	float: right;
	margin-right: 17px;
	color: #b5b5b5;
	font-size: 9px;
}
.visitList li i{
	display: inline-block;
	margin-right: 20px;
	width: 15px;
	height: 15px;
}
.icon_house{
	background: url('./icon_2.png') no-repeat;
	background-size: 15px;
}
.icon_pawn{
	display: inline-block;
	background: url('./icon_3.png') no-repeat;
	background-size: 15px;
}
.icon_company{
	background: url('./icon_1.png') no-repeat;
	background-size: 15px;
}
.icon_ok{
	float: right;
	margin-top: 15px;
	margin-right: 17px;
	background: url('./icon_4.png') no-repeat;
	width: 14px;
	height: 10px;
	background-size: 14px 10px; 
}
.visitBtn{
	margin: 100px 17px 15px 17px;
	height: 45px;
	line-height: 45px;
	text-align: center;
	color: #ffffff;
	font-size: 18px;
	background:#0ea3f0; 
	border-radius: 3px;
}
.iconback{
	float: left;
    margin-top: 15px;
    margin-left: 17px;
	background: url('./icon_5.png') no-repeat;
	background-size: 7px 14px;
	width: 7px;
	height: 14px;
}
</style>