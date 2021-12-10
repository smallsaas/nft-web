
const setting = require('./indexset.json');


module.exports = {
  layout: 'Content',
  title: '会员配置',
  items: [{
    component: 'Form',
    config: {
      layout: 'Grid',
      layoutConfig: {
        value: Array(setting.columns).fill(~~(24 / setting.columns)),
      },
      fields: setting.createFields || setting.formFields,
    },
  }, ],
};
