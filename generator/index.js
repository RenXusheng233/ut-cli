module.exports = (api, opts, rootOpts) => {

  // npm命令
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve --copy',
      serve: 'vue-cli-service serve',
      build: 'vue-cli-service build --silent',
      lint: 'vue-cli-service lint',
      stage: 'vue-cli-service stage',
      deploy: 'vue-cli-service deploy'
    }
  })

  // 开发依赖包
  api.extendPackage({
    devDependencies: {
      //a CSS processor resources loader for webpack
      'vue-cli-plugin-ut-builder': '^2.1.1',
      'serve': '^10.1.2',
    }
  })

  // 项目依赖
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'vue-cookie': '^1.1.4',
      'utvue': '^1.0.21',
      'icefox': '^1.1.1',
      'time-stamp': '^2.2.0',
      'qs': '6.6.0',
      'base-64': '^0.1.0',
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

  // 安装d3
  if(opts.d3) {
    api.extendPackage({
      dependencies: {
        'd3': '^5.9.2',
        'dagre-d3': '^0.6.3',
      }
    })
  }

  // 删除 vue-cli3 默认目录src
  api.render(files => {
    Object.keys(files)
        .filter(path => path.startsWith('src/'))
        .forEach(path => delete files[path])
  })

  // 渲染配置文件
  api.render('./template')

  // 屏蔽 generator 之后的文件写入操作
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
