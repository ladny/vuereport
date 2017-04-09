import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  apiUrl: 'http://192.168.111.110:20803', 
  mUrl: 'ttp://192.168.111.110:20802',
}

export default new Vuex.Store({
  state,
})

// http://192.168.111.110:20803  本地api
// http://192.168.111.110:20802  本地php-h5

// http://api.senqiang.cn  服务器api
// http://h.senqiang.cn   服务器php-h5

// http://59.110.71.180/ 线上测试
// http://59.110.71.180:10803  api
// http://59.110.71.180:10803  php-h5