const formFields = require('./form.config');
const editFormFields = require('./editForm.config');

module.exports = {
  layout: 'Content',
  title: '组织管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'org',
        fields: [

          { field: 'search', label: '搜索', type: 'input' ,placeholder: '部门名 编号', }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'TreeTable',
      config: {
        share: 'org',
        API: {
          listAPI: '/api/crud/oms/player/profit/queryTeamReturnTree',
          // appendAPI: '/api/sys/org/<id>/kid',
          // 这里的 appendAPI 会影响到局部刷新
          deleteAPI: '/api/sys/org/(id)'
        },
        actions: [],
        fields: [
          { field: 'name', label: '组织机构层级' },
         /* { field: 'orgCode', label: '编号' },*/
          {
            field: 'orgType', label: '分类', valueType: 'tag',
            align: 'center',
            options: {
              map: {
                0: '平台',
                1: '集团',
                2: '公司',
                3: '分公司',
                4: '部门',
                5: '工作组',
              },
              chy: {
                0:'P1',
                1: 'P1',
                2: 'P2',
                3: 'P3',
                4: 'P4',
                5: 'P5',
              },
            },type:"Dot",theme:"priority"
          },
/*          { field: 'userName', label: '负责人' },
          { field: 'phone', label: '电话' },*/
          /*{
            field: 'deptCount', label: '部门人数',
            align: 'right',
          },
          {
            field: 'employeeCount', label: '总人数',
            align: 'right',
          },*/
          {
            field: 'status', label: '状态',
            valueType: 'tag',
            options: {
              map: {}
            }
          },
          // { field: 'fullName', label: '完整名称' },
          { field: 'note', label: '备注' },
        ],
        operation: [
          {
            title: '编辑', type: 'modal',
            options: {
              modalTitle: '编辑组织',
              modalWidth: 640,
              outside: true,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [12, 12],
                    },
                    API: {
                      getAPI: '/api/crud/oms/player/profit/queryTeamReturnTreeChildren/(id)',
                      updateAPI: '/api/crud/oms/player/profit/queryTeamReturnTreeChildren/(id)',
                    },
                    fields: editFormFields,
                  }
                }
              ]
            }
          },
          {
            title: '新增子组织', type: 'modal', options: {
              "outside": true,
              // field: 'pid',
              // value: 'IS_NOT_NULL',
              modalTitle: '新增子组织',
              modalWidth: 640,
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [24],
                    },
                    API: {
                      createAPI: '/api/crud/oms/player/profit/queryTeamReturnTreeChildren/(id)',
                    },
                    fields: formFields,
                  },
                }
              ],
            }
          },
          {
            title: '删除', type: 'delete',
            options: {
              field: 'pid',
              value: 'IS_NOT_NULL',
            }
          }
        ]
      },
    },
  ],
};
