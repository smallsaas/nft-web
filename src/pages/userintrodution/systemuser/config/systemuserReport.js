module.exports = {
    layout: 'Content',
    title: '系统号',
    items: [

      {
        layout: 'Empty',
        component: 'AutoReportSearch',
        config: {
          share: 'sysUserReport',
        },
      },
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'sysUserReport',
          pageSize: 20,
          API: {
            listAPI: '/api/adm/stat/meta/playerTeam',
          },
          actions: [
          ],
          fields: [],
          operation: []
        },
      },
    ],
  };