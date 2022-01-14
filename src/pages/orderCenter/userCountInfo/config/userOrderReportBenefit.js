module.exports = {
    layout: 'Content',
    title: '帮会收益',
    items: [
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'agentReport',
          pageSize: 20,
          API: {
            listAPI: '/api/adm/stat/meta/gangProfit',
          },
          actions: [
          ],
          fields: [],
          operation: []
        },
      },
    ],
  };