

const setting = require('./representation-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.edit,
  items: [
    {
      component: 'Form',
      config: {
        API: {
            getAPI: setting.getAPI,
            createAPI: setting.updateAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.updateFields || setting.formFields,
        otherProps: {
          footerButton: false
        }
      },
    },
  ],
};

