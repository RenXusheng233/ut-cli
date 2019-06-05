import icefox from 'icefox'

const requestPluginOptions = {
  baseParams: {
    baseUrl: '',
  },
  headers: {},
}

export default {
  title: '网站标题',

  created() {
    // 应用创建完成后的回调
  },

  plugins: [
    // 将icefox作为应用插件使用
    icefox,
    // 对内置的request插件进行配置
    ['request', requestPluginOptions],
  ],

  router: {
    // vue-router 配置对象
    mode: 'hash',
    created(/*router*/) {
      // 路由器创建完成后的回调
    },
  },

  store: {
    // Vuex Store 配置对象
    created(/*store*/) {
      // Store创建完成后的回调
    },
  },
}
