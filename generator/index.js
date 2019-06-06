module.exports = (api, opts, rootOpts) => {

  // npm命令
  api.extendPackage({
    scripts: {
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
      'vue-cli-plugin-ut-builder': '^2.1.1',
    }
  })

  // 项目依赖
  api.extendPackage({
    dependencies: {
      // ut-builder中会自行安装,考虑将其变更为可选模式
      // 'icefox': '^1.1.1',
      'vue-router': '^3.0.2',
      'vuex': '^3.1.0',
      'axios': '^0.18.0',
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
