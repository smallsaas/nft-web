module.exports = {
    layout: 'Content',
    title: '订单收益结算',
    items: [
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'agentReport',
          pageSize: 20,
          API: {
            listAPI: '/api/adm/stat/meta/orderSettlement',
          },
          actions: [
          ],
          fields: [],
          operation: []
        },
      },
    ],
  };