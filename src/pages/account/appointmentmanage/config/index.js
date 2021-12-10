// const addKeyPoseField = require('../vido-add/config/formFields');
// const editKeyPoseField = require('../vido-edit/config/formFields');
const setting = require('./indexset.json');


module.exports = {
  layout: 'Content',
  title: '预约管理',
  items: [
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
