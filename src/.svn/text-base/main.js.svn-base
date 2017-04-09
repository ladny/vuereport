import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import store from './vuex/store'
import AwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'
import './css/common.css'
import './css/public.css'
import './css/order.css'
import './css/pawn.css'
import './css/normalize.css'
import './css/mui.css'
import FastClick from './js/fastclick'
FastClick.attach(document.body)


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(AwesomeSwiper)
Vue.use(infiniteScroll)

//工作台
import PlatForm from 'components/platformComponent/PlatForm'
import PlatFormNone from 'components/platformComponent/PlatFormNone'

//云单中心
import Cloudbaddebt from 'components/cloudComponent/cloudbaddebt'
import Cloudreject from 'components/cloudComponent/cloudreject'
import Cloudlist from 'components/cloudComponent/cloudlist'

//销售展业

//家访
import VisitDetail from 'components/visitComponent/VisitDetail'
import VisitDoConfirm from 'components/visitComponent/VisitDoConfirm'
import VisitSuccess from 'components/visitComponent/VisitSuccess'

//售前详情页
import CustomDetail from 'components/previewComponent/CustomDetail'
import SaleDetail from 'components/previewComponent/SaleDetail'
import SaleConfirm from 'components/previewComponent/SaleConfirm'
import SaleSuccess from 'components/previewComponent/SaleSuccess'

//抵押
import MortConfirm from 'components/mortgageComponent/MortConfirm'
import MortDetail from 'components/mortgageComponent/MortDetail'
import MortSuccess from 'components/mortgageComponent/MortSuccess'

//公证
import NotaryConfirm from 'components/notaryComponent/NotaryConfirm'
import NotaryDetail from 'components/notaryComponent/NotaryDetail'
import NotarySuccess from 'components/notaryComponent/NotarySuccess'

//权证
import WarrantConfirm from 'components/warrantComponent/WarrantConfirm'
import WarrantDetail from 'components/warrantComponent/WarrantDetail'
import WarrantSuccess from 'components/warrantComponent/WarrantSuccess'

//GPS
import GpsCarDetail from 'components/gpsComponent/GpsCarDetail'
import GpsCarConfirm from 'components/gpsComponent/GpsCarConfirm'
import GpsSuccess from 'components/gpsComponent/GpsSuccess'

//CEO
import CeoSuccess from 'components/ceoComponent/CeoSuccess'
import CeoDetail from 'components/ceoComponent/CeoDetail'

/*
	任务中心
*/
//
import TaskCenter from 'components/taskCenterComponent/taskTabComponent/TaskCenterList'
//资产回收
import getAssetsDetail from 'components/taskCenterComponent/getAssetsComponent/getAssetsDetail'
import GoTask from 'components/taskCenterComponent/getAssetsComponent/GoTask'
import GpsDetailList from 'components/taskCenterComponent/getAssetsComponent/GpsDetailList'
//gps定损
import GpslossAssess from 'components/taskCenterComponent/getAssetsComponent/GpsLossAssess.vue'

//财务
import Finance from "components/financeComponent/finance";

const router = new VueRouter({
	mode: "history", //??
	base: __dirname,
	routes:[
		{
			path:'/', //空路径
			component: PlatForm
		},
		{
			path:'/PlatFormNone',//无权看工作台
			component:PlatFormNone
		},
		{
			path:'/cloudlist', //云单列表
			component: Cloudlist
		},
		{
			path:'/cloudbaddebt', //云单坏账单
			component: Cloudbaddebt
		},
		{
			path:'/cloudreject', //云单已驳回
			component: Cloudreject
		},		
		{
			path:'/ceoDetail', //CEO
			component: CeoDetail
		},
		{
			path:'/ceoSuccess', //CEO成功页
			component: CeoSuccess
		},
		{
			path:'/gpsCarDetail', //GPS详情
			component: GpsCarDetail
		},
		{
			path:'/gpsCarConfirm', //GPS确认页
			component: GpsCarConfirm
		},
		{
			path:'/gpsSuccess', //GPS成功页
			component: GpsSuccess
		},
		{
			path:'/mortConfirm', //抵押房/车确认
			component: MortConfirm
		},
		{
			path:'/mortSuccess', //抵押成功页
			component: MortSuccess
		},
		{
			path:'/mortDetail', //抵押详情
			component: MortDetail
		},
		{
			path:'/warrantConfirm', //权证房/车确认
			component: WarrantConfirm
		},
		{
			path:'/warrantDetail', //权证详情
			component: WarrantDetail
		},
		{
			path:'/warrantSuccess', //权证成功页
			component: WarrantSuccess
		},
		{
			path:'/notaryConfirm', //公证房/车确认
			component: NotaryConfirm
		},
		{
			path:'/notaryDetail', //公证详情
			component: NotaryDetail,
		},
		{
			path:'/notarySuccess', //公证成功页
			component: NotarySuccess
		},
		{
			path:'/customDetail', //客服详情
			component: CustomDetail
		},
		{
			path:'/SaleConfirm', //销售估值
			component: SaleConfirm
		},
		{
			path:'/SaleDetail', //销售详情
			component: SaleDetail
		},
		{
			path:'/saleSuccess', //销售成功页
			component: SaleSuccess
		},
		{
			path:'/visitDetail', //家访详情
			component: VisitDetail
		},
		{
			path:'/visitDoConfirm', //抵押物确认页
			component: VisitDoConfirm
		},
		{
			path:'/visitSuccess', //家访成功页
			component: VisitSuccess
		},
		{
			path:'/platForm', //工作台页
			component: PlatForm
		},
		{
			path:'/taskCenter',//任务中心
			component: TaskCenter
		},
		{
			path:'/getAssetsDetail',//task资产抢单页
			component:getAssetsDetail
		},
		{
			path:'/goTask',//资产回收执行任务也
			component:GoTask
		},
		{
			path:'/gpsDetailList',//Gps详情页
			component:GpsDetailList
		},
		{
			path:'/gpsLossAssess',
			component:GpslossAssess
		},
		{
			 path: '/finance', //财务
			 component: Finance
		}

		// {
		// 	 path: '*', //覆盖所有的路由情况，然后在给出一个 404 页面
		// 	 component: NotFoundComponent
		// }
		// {
		// 	 path: '*', //覆盖所有的路由情况，然后在给出一个 404 页面
		// 	 component: NotFoundComponent
		// }
		
	],

    linkActiveClass: 'router-link-active'	
})

router.beforeEach((to, from, next) => {
 
          setTimeout(function () {
            window.get_title = function (){
              console.log("window.get_title");
              return window.title
            }
            var iframe = document.createElement('iframe')
            iframe.style.visibility = 'hidden'
            iframe.style.width = '1px'
            iframe.style.height = '1px'
            iframe.onload = function () {
              setTimeout(function () {
                document.body.removeChild(iframe)
              }, 0)
            }
            document.body.appendChild(iframe)

          }, 0)   

   next();
})

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

const app = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
