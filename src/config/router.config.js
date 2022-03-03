module.exports = [
  {
    name: '精灵管理',
    path: '/spirits',
    permissions: [
      'wispMain.management',
      'wispMeta.management',
      'wisp.management'
    ],
    items: [{
      path: '/spirits/metaspirit',
      name: '元精灵管理',
      permissions: 'wispMeta.management'
    },
    {
      path: '/spirits/spirit',
      name: '精灵管理',
      permissions: 'wisp.management'
    }
      // {
      //   path: '/spirits/spiritconfig',
      //   name: '精灵配置',
      // }
    ]
  },
  {
    name: '玩家攻略',
    path: '/userintrodution',
    permissions: [
      'playerStartegy.management',
      'booking.management',
      'session.menagement',
      'unpaid.menagement',
      'playerWisp.menagement',
      'sysPlayer.menagement'
    ],
    items: [{
      path: '/userintrodution/bookingmanagement',
      name: '预约',
      permissions: 'booking.management'
    },
    {
      path: '/userintrodution/spiritprocessnumber',
      name: '场次',
      permissions: 'session.menagement'
    },
    {
      path: '/userintrodution/nopay',
      name: '未付款列表',
      permissions: 'unpaid.menagement'
    },
    {
      path: '/userintrodution/usermanageforspirit',
      name: '玩家精灵',
      permissions: 'playerWisp.menagement'
    },
    {
      path: '/userintrodution/systemuser',
      name: '系统号',
      permissions: 'sysPlayer.menagement'
    },
    ]
  },
  {
    name: '玩家管理',
    path: '/usermanage',
    permissions:[
      'playerWisp.menagement',
      'playerSys.menagement',
      'playerPlayers.menagement',
      'sign.menagement',
    ],
    items: [
      {
        path: '/usermanage/systemuser',
        name: '系统号',
        permissions: 'playerSys.menagement'
      },
      {
        path: '/usermanage/newaccount',
        name: '玩家',
        permissions: 'playerPlayers.menagement'
      },
      {
        path: '/usermanage/signCenter/signManage',
        name: '签到',
        permissions: 'sign.menagement'
      }
      // {
      //   path: '/usermanage/newteammanage',
      //   name: '玩家团队',
      // }
      // {
      //   path: '/usermanage/memberconfig',
      //   name: '会员配置',
      // }
    ]
  },
  {
    name: '申述管理',
    path: '/representationmanage',
    permissions:[
      'complain.menagement',
      'complains.menagement',
      'complaint.menagement',
    ],
    items: [{
      path: '/representationmanage/representation',
      name: '申述管理',
      permissions: 'complains.menagement'
    },
    {
      path: '/representationmanage/toushumanage',
      name: '投诉管理',
      permissions: 'complaint.menagement'
    }]
  },
  {
    name: '结算中心',
    path: '/orderCenter',
    permissions:[
      'account.menagement',
      'order.menagement',
      'earnings.management',
      'recommend.management',
      'tong.management'
    ],
    items: [
      {
        path: '/orderCenter/orderList',
        name: '订单',
        permissions:'order.menagement'
      },
      {
        path: '/orderCenter/order',
        name: '订单收益结算',
        permissions:'earnings.management'
      },
      //   {
      //   path: '/orderCenter/orderCount',
      //   name: '订单收益结算',
      // },
      {
        path: '/orderCenter/orderCountInfo',
        name: '推荐收益',
        permissions:'recommend.management'
      }, {
        path: '/orderCenter/userCountInfo',
        name: '帮会收益',
        permissions:'tong.management'
      }]
  },
  {
    name: '配置中心',
    path: '/configcenter',
    permissions:[
      'configuration.management',
      'session.menagement',
      'gugu.management',
      'companion.management',
      'land.management'
    ],
    items: [
      // {
      //   path: '/configcenter/storemanage',
      //   name: '店小二管理',
      // },
      {
        path: '/configcenter/spiritprocessnumbermanage',
        name: '场次管理',
        permissions: 'session.menagement'
      },
      {
        path: '/configcenter/guguManage',
        name: 'GuGu令管理',
        permissions: 'gugu.management'
      },
      {
        path: '/configcenter/sparManage',
        name: '晶石管理',
        permissions: 'companion.management'
      },
      {
        path: '/configcenter/landManage',
        name: '土地管理',
        permissions: 'land.management'
      }
      // ,
      // {
      //   path: '/configcenter/spiritconfig',
      //   name: '精灵配置',
      // },
      // {
      //   path: '/configcenter/memberconfig',
      //   name: '会员配置',
      // }
    ]
  },
  {
    name: '系统管理',
    path: '/sys',
    permissions: [
      'sys.management',
      'organization',
      'user.management',
      'role.management',
      'sysconfiguration.management',
      'timing.management'
    ],
    items: [
      // {
      //   name: '菜单管理',
      //   path: '/sys/menuManage',
      // },
      {
        name: '组织管理',
        path: '/sys/org',
        permissions: 'organization'
      },
      {
        name: '用户管理',
        path: '/sys/user',
        permissions: 'user.management'
      },
      {
        name: '角色管理',
        path: '/sys/role',
        permissions: 'role.management'
      },
      {
        name: '系统配置',
        path: '/sys/setting',
        permissions: 'sysconfiguration.management'
      },
      {
        name: '定时任务',
        path: '/sys/timingConf',
        permissions: 'timing.management'
      },
      {
        name: '操作日志',
        path: '/sys/logs',
        permissions: 'operation.management'
      }
    ]
  },
  {
    name: '运维管理',
    path: '/devops',
    permissions:[
      'devops.manage',
      'devconfig.manage',
      'devperm.manage',
      'devdeveloper.manage',
    ],
    items: [
      // {
      //   path: '/devops/configItems',
      //   name: '配置项',
      // },
      // {
      //   path: '/devops/configGroups',
      //   name: '配置分组',
      // },
      // {
      //   path: '/devops/perm',
      //   name: '权限管理',
      // },
      // {
      //   path: '/devops/permGroups',
      //   name: '权限分组管理',
      // },
      {
        path: '/devops/configManage',
        name: '配置管理',
        permissions: 'devconfig.manage'
      },
      {
        path: '/devops/permManage',
        name: '权限管理',
        permissions: 'devperm.manage'
      },
      {
        path: '/devops/developerManege',
        name: '开发用户',
        permissions: 'devdeveloper.manage'
      }
    ]
  },
]
