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
      
      // {
      //   component: 'Search',
      //   config: {
      //     fields: [
      //       {
      //         label: '店小二',
      //         type: 'select-fetch',
      //         props: {
      //           placeholder: '请选择',
      //           style: {
      //             width: 240
      //           }
      //         },
      //         rules: [],
      //         options: {
      //           API: '/api/adm/users?roleid=server',
      //           label: 'name',
      //           value: 'id'
      //         },
      //         field: '店小二'
      //       },
      //       {
      //         label: '创建时间',
      //         options: {
      //           format: 'YYYY-MM-DD',
      //           startDate: 'startDate',
      //           endDate: 'endDate'
      //         },
      //         type: 'range',
      //         field: 'releaseTimes'
      //       },
        
      //       {
      //         label: '',
      //         type: 'hidden',
      //         field: 'startDate'
      //       },
      //       {
      //         label: '',
      //         type: 'hidden',
      //         field: 'endDate'
      //       }
      //     ]
      //   },
      // },
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