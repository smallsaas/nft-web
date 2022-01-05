
const setting = require('./memberconfig-setting.json');

module.exports = {
  layout: 'Content',
  title: '会员配置',
  items: [{
    component: 'Form',
    config: {
      API: {
        getAPI: setting.getAPI,
        createAPI: setting.createAPI,
      },
      layout: 'Grid',
      layoutConfig: {
        value: Array(setting.columns).fill(~~(24 / setting.columns)),
      },
      fields: setting.createFields || setting.formFields,
    },
  }, ],
};
