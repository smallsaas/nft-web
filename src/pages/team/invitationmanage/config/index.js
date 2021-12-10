// const addKeyPoseField = require('../vido-add/config/formFields');
// const editKeyPoseField = require('../vido-edit/config/formFields');
const setting = require('./indexset.json');


module.exports = {
  layout: 'Content',
  title: '直推查询列表',
  items: [{
      layout: 'Empty',
      component: 'Search',
      config: {
        type: "default",
        fields: [{
          label: "账号",
          field: 'accountName',
          type: 'search',
          placeholder: "请输入账号,支持模糊查询"
        }],
      },
    },
    {
      layout: 'Empty',
      component: 'TreeTable',
      config: {
        share: 'fromCategory',
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
