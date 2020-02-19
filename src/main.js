import Vue from 'vue'
import App from './App'
import {request} from "@/utils/request";
import {FORWARD_URL} from "@/utils/api";

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.mixin({
  onUnload() {
    if (this.$options.data) {
      Object.assign(this.$data, this.$options.data()) // 重置组件数据状态
    }
  }
})


// 全局混入
Vue.mixin({
  methods: {
    // todo add data
    go(url, data) {
      wx.navigateTo({
        url: url
      })
    },
    toast: function(text, duration, success) {
      wx.showToast({
        title: text,
        icon: success ? 'success' : 'none',
        duration: duration || 2000
      })
    }
  }
})
// 所有页面都转发
// ref：https://blog.csdn.net/lhy349/article/details/81188332
Vue.mixin({
  onShareAppMessage() {
    request(
      FORWARD_URL,
      'GET',
      {}
    );
    return {
      title: 'test',
      path: 'pages/home/index/main',
      imageUrl: '/static/img/xuanchuan.png'
    }
  }
});

const app = new Vue(App)
app.$mount()



