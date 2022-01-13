module.exports = {
    layout: 'Content',
    title: '股东毛利净利报表',
    items: [
      {
        layout: 'Empty',
        component: 'AutoReportSearch',
        config: {
          share: 'agentReport',
        },
      },
      {
        layout: 'Empty',
        component: 'AutoReport',
        config: {
          share: 'agentReport',
          pageSize: 20,
          API: {
            listAPI: '/api/adm/stat/meta/agentReport',
          },
          actions: [
            {
              title: '导出 pdf', type: 'export-excel',
              options: {
                API: '/api/io/pdf/export/股东毛利净利',
                method: 'get',
  
              },
            },
          ],
          fields: [],
          operation: []
        },
      },
    ],
  };