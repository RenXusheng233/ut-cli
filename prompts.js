module.exports = [
    //选择ui框架 - 默认为element-ui
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

    //是否使用echarts
  {
    name: "echarts",
    type: "confirm",
    message: `是否需要使用 echarts`,
    default: false
  },
]
