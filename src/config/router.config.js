module.exports = [
  {
    name: '精灵管理',
    path: '/spirits',
    permissions: [
      // 'menus.wispMain.management',
      'menu.wispMeta.management',
      'menu.wisp.management'
    ],
    items: [{
      path: '/spirits/metaspirit',
      name: '元精灵管理',
      permissions: 'menu.wispMeta.management'
    },
    {
      path: '/spirits/spirit',
      name: '精灵管理',
      permissions: 'menu.wisp.management'
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
      // 'menus.playerStartegy.management',
      'menu.booking.management',
      'menu.session.menagement',
      'menu.unpaid.menagement',
      'menu.playerWisp.menagement',
      'menu.sysPlayer.menagement'
    ],
    items: [{
      path: '/userintrodution/bookingmanagement',
      name: '预约',
      permissions: 'menu.booking.management'
    },
    {
      path: '/userintrodution/spiritprocessnumber',
      name: '场次',
      permissions: 'menu.session.menagement'
    },
    {
      path: '/userintrodution/nopay',
      name: '未付款列表',
      permissions: 'menu.unpaid.menagement'
    },
    {
      path: '/userintrodution/usermanageforspirit',
      name: '玩家精灵',
      permissions: 'menu.playerWisp.menagement'
    },
    {
      path: '/userintrodution/systemuser',
      name: '系统号',
      permissions: 'menu.sysPlayer.menagement'
    },
    ]
  },
  {
    name: '玩家管理',
    path: '/usermanage',
    permissions:[
      // 'menus.playerPlayers.menagement',
      'menu.playerSys.menagement',
      'menu.playerPlayers.menagement',
      'menu.sign.menagement',
    ],
    items: [
      {
        path: '/usermanage/systemuser',
        name: '系统号',
        permissions: 'menu.playerSys.menagement'
      },
      {
        path: '/usermanage/newaccount',
        name: '玩家',
        permissions: 'menu.playerPlayers.menagement'
      },
      {
        path: '/usermanage/signCenter/signManage',
        name: '签到',
        permissions: 'menu.sign.menagement'
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
      // 'menus.complain.menagement',
      'menu.complains.menagement',
      'menu.complaint.menagement',
    ],
    items: [{
      path: '/representationmanage/representation',
      name: '申述管理',
      permissions: 'menu.complains.menagement'
    },
    {
      path: '/representationmanage/toushumanage',
      name: '投诉管理',
      permissions: 'menu.complaint.menagement'
    }]
  },
  {
    name: '结算中心',
    path: '/orderCenter',
    permissions:[
      // 'menus.account.menagement',
      'menu.order.menagement',
      'menu.earnings.management',
      'menu.recommend.management',
      'menu.tong.management'
    ],
    items: [
      {
        path: '/orderCenter/orderList',
        name: '订单',
        permissions:'menu.order.menagement'
      },
      {
        path: '/orderCenter/order',
        name: '订单收益结算',
        permissions:'menu.earnings.management'
      },
      //   {
      //   path: '/orderCenter/orderCount',
      //   name: '订单收益结算',
      // },
      {
        path: '/orderCenter/orderCountInfo',
        name: '推荐收益',
        permissions:'menu.recommend.management'
      }, {
        path: '/orderCenter/userCountInfo',
        name: '帮会收益',
        permissions:'menu.tong.management'
      }]
  },
  {
    name: '配置中心',
    path: '/configcenter',
    permissions:[
      // 'menus.configuration.management',
      'menu.session.menagement',
      'menu.gugu.management',
      'menu.companion.management',
      'menu.land.management'
    ],
    items: [
      // {
      //   path: '/configcenter/storemanage',
      //   name: '店小二管理',
      // },
      {
        path: '/configcenter/spiritprocessnumbermanage',
        name: '场次管理',
        permissions: 'menu.session.menagement'
      },
      {
        path: '/configcenter/guguManage',
        name: 'GuGu令管理',
        permissions: 'menu.gugu.management'
      },
      {
        path: '/configcenter/sparManage',
        name: '晶石管理',
        permissions: 'menu.companion.management'
      },
      {
        path: '/configcenter/landManage',
        name: '土地管理',
        permissions: 'menu.land.management'
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
      // 'menus.sys.management',
      'menu.organization',
      'menu.user.management',
      'menu.role.management',
      'menu.sysconfiguration.management',
      'menu.timing.management',
      'menu.operation.management'
    ],
    items: [
      // {
      //   name: '菜单管理',
      //   path: '/sys/menuManage',
      // },
      {
        name: '组织管理',
        path: '/sys/org',
        permissions: 'menu.organization'
      },
      {
        name: '用户管理',
        path: '/sys/user',
        permissions: 'menu.user.management'
      },
      {
        name: '角色管理',
        path: '/sys/role',
        permissions: 'menu.role.management'
      },
      {
        name: '系统配置',
        path: '/sys/setting',
        permissions: 'menu.sysconfiguration.management'
      },
      {
        name: '定时任务',
        path: '/sys/timingConf',
        permissions: 'menu.timing.management'
      },
      {
        name: '操作日志',
        path: '/sys/logs',
        permissions: 'menu.operation.management'
      }
    ]
  },
  {
    name: '运维管理',
    path: '/devops',
    permissions:[
      // 'menus.devops.manage',
      'menu.devconfig.manage',
      'menu.devperm.manage',
      'menu.devdeveloper.manage',
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
        permissions: 'menu.devconfig.manage'
      },
      {
        path: '/devops/permManage',
        name: '权限管理',
        permissions: 'menu.devperm.manage'
      },
      {
        path: '/devops/developerManege',
        name: '开发用户',
        permissions: 'menu.devdeveloper.manage'
      }
    ]
  },
]
