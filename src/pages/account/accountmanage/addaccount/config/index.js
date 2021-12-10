// const addKeyPoseField = require('../vido-add/config/formFields');
// const editKeyPoseField = require('../vido-edit/config/formFields');
const setting = require('./indexset.json');


module.exports = {
  layout: 'Content',
  title: '新增账号',
  items: [{
    component: 'Form',
    config: {
      layout: 'Grid',
      layoutConfig: {
        value: Array(setting.columns).fill(~~(24 / setting.columns)),
      },
      fields: setting.createFields || setting.formFields,
    },
  }, ]
};
