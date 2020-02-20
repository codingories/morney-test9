import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from '@/model/tagListModel'

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList = tagListModel.fetch();
window.createTag = (name:string)=>{
  const message = tagListModel.create(name) // 知识点2. 写的时候要用tagListModel来写
  // 简化知识点1和知识点2，也就是最小知识原色
  if (message === "duplicated") {
    window.alert("标签名重复了")
  } else if (message === "success") {
    window.alert("添加成功")
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
