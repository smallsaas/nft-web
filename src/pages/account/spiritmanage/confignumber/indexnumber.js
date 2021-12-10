// const addKeyPoseField = require('../vido-add/config/formFields');
// const editKeyPoseField = require('../vido-edit/config/formFields');
const setting = require('./indexnumberset.json');


module.exports = {
  layout: 'Content',
  title: '精灵处理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        type: "default",
        fields: [{
          label: "名称",
          field: 'actionNumber',
          type: 'search',
          placeholder: "请选择场次"
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
