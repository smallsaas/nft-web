// const addKeyPoseField = require('../vido-add/config/formFields');
// const editKeyPoseField = require('../vido-edit/config/formFields');
const setting = require('./indexset.json');


module.exports = {
  layout: 'Content',
  title: '账号管理',
  items: [{
      layout: 'Empty',
      component: 'Search',
      config: {
        type: "default",
        fields: [{
          label: "名称",
          field: 'actionName',
          type: 'search',
          placeholder: "请输入名称"
        }, {
          label: "状态",
          field: 'actionStatus',
          type: 'search',
          placeholder: "请选择"
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
