module.exports = (api, opts, rootOpts) => {

  // npm命令
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve --copy',
      serve: 'vue-cli-service serve',
      build: 'vue-cli-service build',
      review: 'serve -s dist',
      lint: 'vue-cli-service lint'
    }
  })

  // 开发依赖包
  api.extendPackage({
    devDependencies: {
      //a CSS processor resources loader for webpack
      'style-resources-loader': '1.2.1'
    }
  })

  // 项目依赖
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'normalize.css': '^8.0.0',
      'lodash': '^4.17.11',
      'babel-polyfill': '^6.22.0',
      [opts['ui-framework']]: opts['ui-framework'] === 'element-ui' ? '^2.4.7' : '^3.1.1'
    }
  })


  // 安装echarts
  if(opts.echarts) {
    api.extendPackage({
      dependencies: {
        echarts: '^4.2.0-rc.1'
      }
    })
  }

  // 渲染配置文件
  api.render('./template')
}
