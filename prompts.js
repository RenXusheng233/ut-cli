module.exports = [
    // 选择ui框架 element-ui/iview - 默认为element-ui
  {
    name: 'ui-framework',
    type: 'list',
    message: '请选择 UI Framework',
    choices: [
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'iView',
        value: 'iview'
      }
    ],
    default: 'element-ui'
  },

    // 是否使用echarts
  {
    name: "echarts",
    type: "confirm",
    message: `是否需要安装 echarts`,
    default: false
  },

    // 是否使用d3
  {
    name: "d3",
    type: "confirm",
    message: `是否需要安装 d3`,
    default: false
  },
]
