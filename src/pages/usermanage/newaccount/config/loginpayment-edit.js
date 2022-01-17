const setting = require('./loginpayment-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.editPassword,
  items: [
    {
      component: 'Form',
      config: {
        API: {
            getAPI: setting.getAPI,
            updateAPI: setting.createAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(3).fill(~~(24 / 3)),
        },
        fields: setting.updateFields || setting.formFields,
      },
    },
  ],
};
