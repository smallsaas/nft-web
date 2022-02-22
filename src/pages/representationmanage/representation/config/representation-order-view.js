const setting = require('./representation-setting.json');

module.exports = {
    layout: setting.layout.form,
    title: '订单详情',
    items: [{
        component: 'Form',
        config: {
            API: {
                getAPI: setting.getOrderAPI,
            },
            layout: 'Grid',
            layoutConfig: {
                value: Array(setting.columns).fill(~~(24 / setting.columns)),
            },
            fields: setting.orderViewConfig || setting.formFields,
            otherProps: {
                footerButton: false
            }
        },
    },],
};
