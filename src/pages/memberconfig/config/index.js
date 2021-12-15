
const setting = require('./memberconfig-setting.json');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    {
      component: 'Form',
      config: {
        API: {
          getAPI: setting.getAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.viewConfig || setting.formFields,
        otherProps: {
          footerButton: true
        }
      },
    },
  ],
};
