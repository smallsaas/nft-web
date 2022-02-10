module.exports = {
    layout: 'Content',
    title: '推荐收益',
    items: [
      {
        layout: 'Empty',
        component: 'AutoReportSearch',
        config: {
          share: 'orderCountInfo',
        },
      },
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'orderCountInfo',
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