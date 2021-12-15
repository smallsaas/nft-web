
const setting = require('./generalconfig-setting.json');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    {
      component: 'Form',
      config: {
        API: {
          listAPI: setting.listAPI,
          appendAPI: '',
          deleteAPI: setting.deleteAPI,
        },
        actions: setting.tableActions,
        fields: setting.tableFields,
        operation: setting.tableOperation,
      },
    },
  ],
};
