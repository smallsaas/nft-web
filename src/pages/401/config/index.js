const setting = require('./401-setting.json');

module.exports = {
  layout: setting.layout.table,
  title: '',
  items: [
    // process.env.NODE_ENV === 'development' ?
    //   {
    //     component: 'EditList',
    //   } : { component: 'Empty' },

    {
      component: 'ErrorLayout',
      config: {
        status: 401
      },
    },
  ],
};
