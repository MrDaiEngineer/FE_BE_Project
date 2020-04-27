import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import './assets/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 配置axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'
// axios默认是不允许设置cookie的，所以如果用了，需要你单独启动一下全局设置
// 让ajax携带cookie
axios.defaults.withCredentials = true

axios.interceptors.response.use(
  response => {
    if(response.status === 200) {
      var status = response.data.status
      if(status == 401 || status == 402 || status == 403){
        window.location.href = '/#/login'
      }          
      return Promise.resolve(response)
    }else{            
      return Promise.reject(response)
    }    
  },
  // 服务器状态码不是200的情况    
  error => {
    return Promise.reject(error)
  }
)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
