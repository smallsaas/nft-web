const setting = require('./newaccount-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.edit,
  items: [
    {
      component: 'Form',
      config: {
        API: {
            getAPI: setting.getAPI,
            updateAPI: setting.updateAPI,
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
