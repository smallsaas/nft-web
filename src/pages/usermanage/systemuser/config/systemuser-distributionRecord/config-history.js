const setting = require('./setting-page.json');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    {
      component: 'Search',
      config: {
        fields: setting.searchFields,
      },
    },
    {
      component: 'Table',
      config: {
        API: {
          listAPI: '/api/crud/oms/manager/managers/queryManagerGivenPlayerCoins?flag=1',
          deleteAPI: setting.deleteAPI,
        },
        actions: setting.tableActions,
        fields: setting.tableFields,
        operation: setting.tableOperation,
      },
    },
  ],
};
