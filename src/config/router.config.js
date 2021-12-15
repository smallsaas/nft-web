module.exports = [
  // {
  //   name: '普通菜单',
  //   path: '/a',
  // },
  // {
  //   name: '分割线',
  //   key: 'divider',
  // },
  // {
  //   name: '一级菜单',
  //   path: '/b',
  //   icon: '<svg viewBox=0 0 1024 1024 version=1.1 xmlns=http://www.w3.org/2000/svg><path d=M903.168 998.4c-25.6 0-46.592-19.968-48.128-45.568a343.808 343.808 0 0 0-343.04-323.584c-181.76 0-332.288 142.336-343.04 323.584-1.536 26.624-24.576 46.592-50.688 45.568a48.4352 48.4352 0 0 1-45.568-50.688c13.312-232.448 206.336-414.72 439.296-414.72s425.984 182.272 439.296 414.72a48.128 48.128 0 0 1-45.568 50.688h-2.56z fill= p-id=1188></path><path d=M512 629.76a302.592 302.592 0 0 1-302.08-302.08C209.92 161.28 345.6 25.6 512 25.6c166.4 0 302.08 135.68 302.08 302.08 0 166.4-135.68 302.08-302.08 302.08z m0-507.904c-113.152 0-205.824 92.16-205.824 205.824a205.824 205.824 0 0 0 411.648 0c0-113.664-92.672-205.824-205.824-205.824z></path></svg>',
  //   items: [
  //     {
  //       path: '/b/c',
  //       name: '二级菜单A',
  //     },
  //     {
  //       path: '/b/d',
  //       name: '二级菜单B',
  //     },
  //   ],
  // },
  // {
  //   name: '权限父菜单',
  //   path: '/p',
  //   permissions: ['myPermA.view', 'myPermB.view'],
  //   items: [
  //     {
  //       path: '/p/a',
  //       name: '权限子菜单A',
  //       permissions: 'myPermA.view',
  //     },
  //     {
  //       path: '/p/b',
  //       name: '权限子菜单B',
  //       permissions: 'myPermB.view',
  //     },
  //   ],
  // },
  // {
  //   name: 'AI健身',
  //   path: '/aiFitness',
  //   items: [
  //     {
  //       path: '/aiFitness/vido',
  //       name: '标准视频管理',
  //     },
  //   ]
  // },
  // {
  //   name: '手动投放',
  //   path: '/handapply',
  //   items: [{
  //       path: '/handapply',
  //       name: '手动投放',
  //     }
  //   ]
  // },
  {
    name: '精灵管理',
    path: '/spirit',
    items: [{
        path: '/spirit',
        name: '元精灵管理',
      },
      {
        path: '/spirit',
        name: '精灵管理',
      }
    ]
  },
  {
    name: '玩家攻略',
    path: '/spirit',
    items: [{
        path: '/bookingmanagement',
        name: '预约',
      },
      {
        path: '/spiritprocessnumber',
        name: '场次',
      },
      {
        path: '/nopay',
        name: '未付款列表',
      }
    ]
  },
  {
    name: '玩家管理',
    path: '/spirit',
    items: [{
        path: '/newaccount',
        name: '玩家',
      },
      {
        path: '/newteammanage',
        name: '团队',
      }
    ]
  },
  {
    name: '申述管理',
    path: '/representation',
    items: [{
      path: '/representation',
      name: '申述管理',
    }]
  },
  {
    name: '配置中心',
    path: '/representation',
    items: [{
        path: '/representation',
        name: '店小二',
      }, {
        path: '/representation',
        name: '系统配置',
      },
      {
        path: '/representation',
        name: '场次管理',
      }
    ]
  },
  // {
  //       path: '/',
  //       name: '精灵处理',
  //       items: [{
  //         path: '/spiritprocessnumber',
  //         name: '场次',
  //       },
  //       {
  //         path: '/spiritprocesshandle',
  //         name: '小二',
  //       }]
  //     }
  // {
  //   name: '账号管理',
  //   path: '/newaccount',
  //   items: [{
  //       path: '/newaccount',
  //       name: '账号管理',
  //     },
  //     {
  //       path: '/bookingmanagement',
  //       name: '预约管理',
  //     }
  //   ]
  // },
  // {
  //   name: '团队管理',
  //   path: '/newteammanage',
  //   items: [{
  //       path: '/newteammanage',
  //       name: '团队',
  //     },
  //     {
  //       path: '/nopay',
  //       name: '未付款列表',
  //     },
  //     {
  //       path: '/directquery',
  //       name: '直推查询列表',
  //     }
  //   ]
  // },
  // {
  //   name: '申述管理',
  //   path: '/representation',
  //   items: [{
  //       path: '/representation',
  //       name: '申述管理',
  //     }
  //   ]
  // },
  // {
  //   name: '配置中心',
  //   path: '/',
  //   items: [{
  //       path: '/generalconfig',
  //       name: '通用配置',
  //     },
  //     {
  //       path: '/memberconfig',
  //       name: '会员配置',
  //     }
  //   ]
  // },
  // {
  //   name: '账号管理',
  //   path: '/account',
  //   items: [{
  //       path: '/account/accountmanage',
  //       name: '账号管理',
  //     },
  //     {
  //       path: '/account/appointmentmanage',
  //       name: '预约管理',
  //     },
  //     {
  //       path: '/account/spiritmanage',
  //       name: '精灵处理',
  //     },
  //   ]
  // },
  // {
  //   name: '团队管理',
  //   path: '/team',
  //   items: [{
  //       path: '/team/teammanage',
  //       name: '团队',
  //     },
  //     {
  //       path: '/team/nopaymanage',
  //       name: '未付款列表',
  //     },
  //     {
  //       path: '/team/invitationmanage',
  //       name: '直推查询列表',
  //     },
  //   ]
  // },
  // {
  //   name: '配置中心',
  //   path: '/configure',
  //   items: [{
  //     path: '/configure/spiritconfigure',
  //     name: '精灵配置',
  //   }]
  // },
  // {
  //   name: '申诉管理',
  //   path: '/representations',
  //   items: [{
  //     path: '/representations/representationsmanage',
  //     name: '申诉管理',
  //   }]
  // },
  {
    name: '动态页面',
    path: '/dynamicPage'
  },

  // {
  //   name: '系统管理',
  //   path: '/sys',
  //   // permissions: [
  //   //   'Org.view',
  //   //   'sysUser.view',
  //   //   'sysRole.view',
  //   //   'Config.view',
  //   //   'OperationLog.view'
  //   // ],
  //   items: [
  //     {
  //       name: '菜单管理',
  //       path: '/sys/menuManage',
  //     },
  //     {
  //       name: '组织管理',
  //       path: '/sys/org',
  //       permissions: ''
  //     },
  //     {
  //       name: '用户管理',
  //       path: '/sys/user',
  //       permissions: ''
  //     },
  //     {
  //       name: '角色管理',
  //       path: '/sys/role',
  //       permissions: ''
  //     },
  //     {
  //       name: '系统配置',
  //       path: '/sys/setting',
  //       permissions: ''
  //     },
  //     {
  //       name: '操作日志',
  //       path: '/sys/logs',
  //       permissions: ''
  //     }
  //   ]
  // },
  // {
  //   name: '业务中台',
  //   path: '/businessCenter',
  // },
  // {
  //   name: '自定义表单',
  //   path: '/formCustom',
  //   items:[
  //     {
  //       name: '自定义字段',
  //       path: '/formCustom/fieldCustom',
  //     },
  //     {
  //       name: '自定义表单',
  //       path: '/formCustom/activitiesCustom',
  //     }
  //   ]
  // }
]
