module.exports = {
    layout: 'Content',
    title: '系统号',
    items: [
      {
        layout: 'Empty',
        component: 'Search',
        config: {
          share: 'sysUserReport',
          fields: [
            {
              label: '店小二',
              type: 'select-fetch',
              props: {
                placeholder: '请选择',
                style: {
                  width: 240
                }
              },
              rules: [],
              options: {
                API: '/api/adm/users?roleid=server',
                label: 'name',
                value: 'id'
              },
              field: 'sysUserId'
            },
            {
              label: '开始时间',
              type: 'date',
              field: 'startDate'
            },
            {
              label: '结束时间',
              type: 'date',
              field: 'endDate'
            }
          ]
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