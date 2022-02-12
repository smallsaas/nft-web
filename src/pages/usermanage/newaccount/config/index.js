
// const setting = require('./spirit-setting.json');

// module.exports = {
//   layout: setting.layout.table,
//   title: setting.pageName.table,
//   items: [
//     {
//       component: 'Search',
//       config: {
//         fields: setting.searchFields,
//       },
//     },
//     {
//       layout: 'Empty',
//       component: 'TreeTable',
//       config: {
//         share: 'fromCategory',
//         API: {
//           listAPI: setting.listAPI,
//           appendAPI: '',
//           deleteAPI: setting.deleteAPI,
//         },
//         actions: setting.tableActions,
//         fields: setting.tableFields,
//         operation: setting.tableOperation,
//       },
//     },
//   ],
// };
const setting = require('./newaccount-setting.json');

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
      layout: 'Empty',
      component: 'TreeTable',
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
