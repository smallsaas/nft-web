const setting = require('./blacklist-setting.json');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    // {
    //   component: 'Search',
    //   config: {
    //     fields: setting.searchFields,//黑名单搜索
    //   },
    // },
    {
      layout: 'Empty',
      component: 'Table',
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
