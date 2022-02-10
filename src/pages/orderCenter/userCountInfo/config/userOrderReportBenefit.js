module.exports = {
    layout: 'Content',
    title: '帮会收益',
    items: [
      {
        layout: 'Empty',
        component: 'AutoReportSearch',
        config: {
          share: 'userCountInfo',
        },
      },
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'userCountInfo',
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