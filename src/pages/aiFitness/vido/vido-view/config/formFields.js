module.exports = [
  { field: 'group_1', type: 'group', value: '参与信息', span: 24, },
  {
    label: '', field: 'attendInfo', type: 'plain_tag',
    options: {
      format: [
        { field: '<personTimes>', text: '人参与', color: '#2A82E4' },
        { field: '<star>', text: '点赞', color: '#00BAAD' },
      ]
    }
  },
  { field: 'group_5', type: 'group', value: '视频基本信息', span: 24, },
  {
    label: '视频编号', field: 'sortNum', type: 'plain',
    props: {
      style: {
        fontSize: '28px',
        fontWeight: 900
      }
    }
  },
  {
    field: 'vidoSrc', label: '视频', width: 200,
    type: 'videoview',
    // options: {
    //   path: '/aiFitness/vido/vido-view'
    // },
  },
  {label: '模型名称',type: 'plain',field: 'modelBaseName'},
  { label: '视频名称', field: 'actionName', type: 'plain' },
  {
    label: '视频时长', field: 'vidoDuration', type: 'secound_to_hms',
  },
  { label: '类型', field: 'trainingType', type: 'plain' },
  { label: '适用症状', field: 'prescriptionSymptoms', type: 'plain' },
  { label: '训练方式', field: 'practiceMode', type: 'plain' },
  
  { label: '练习效果', field: 'practiceEffect', type: 'plain' },
  { field: 'items', type: 'Space', hight: 100 },
  { field: 'group_6', type: 'group', value: '关键动作', span: 24, },
  {
    label: '',
    field: 'items',
    type: 'custom_one_mary',
    span: 24,
    options: {
      childrenApi:{
        updateAPI: '/api/crud/keyPoseModel/keyPoseModels/(id)',
        deleteAPI: '/api/crud/keyPoseModel/keyPoseModels/(id)'
      },
      JSONString: false,
      actions: [
        {
          title: '添加', type: 'children-modal-add', options: {
            modalTitle: '添加关键动作',
            modalWidth: 680,
            items: [
              {
                layout: 'Empty',
                //本地寻增 ChildrenForm,  通过网络新增 Form
                component: 'children_form_fetch',
                config: {
                  layout: 'Grid',
                  layoutConfig: {
                    value: [24],
                  },
                  API: {
                    // getAPI: '/api/crud/coachingAction/coachingActions/<id>',
                    createAPI:'/api/crud/keyPoseModel/keyPoseModels'
                  },
                  fields: [
                    // {
                    //   label: '时间位置', field: 'frameTimePosition', type: 'time_selection',
                    //   rules: ['required'],
                    // },
                    {
                      label: '时间位置', field: 'frameTimePosition', type: 'number',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入时间位置",
                        min: 0,
                        step: "0.01",
                        style: {
                          width: '350px'
                        },
                      },
                    },
                    // {`
                    //   label: '动作帧', field: 'rawFrameImage', type: 'inputFetch',
                    //   rules: ['required'],
                    //   props: {
                    //     placeholder: "请输入动作帧"
                    //   },
                    //   config:{
                    //     API:'',
                    //     bindField:'poseModelImage'
                    //   }
                    // },
                    // {
                    //   label: '动作特征',
                    //   type: 'image',
                    //   field: 'poseModelImage'
                    // },
                    {
                      label: '动作名称', field: 'action', type: 'input', width: '350px',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入动作名称"
                      }
                    },
                    {
                      label: '持续时长', field: 'duration', type: 'input_num_and_unit',
                      rules: ['required'],
                      props: {
                        min: 0,
                        placeholder: "请输入持续时长",
                        style: {
                          width: '350px'
                        },
                        unit: '秒',
                      }
                    },
                    {
                      label: '重复次数', field: 'repeatTimes', type: 'number',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入",
                        min: 0,
                        style: {
                          width: '350px',
                        }
                      }
                    },
                  ],
                },
              }
            ],
          }
        },
        {
          title: '批量修改阈值', type: 'children-modal-add', options: {
            modalTitle: '批量修改阈值',
            modalWidth: 500,
            items: [
              {
                layout: 'Empty',
                //本地寻增 ChildrenForm,  通过网络新增 Form
                component: 'children_form_fetch',
                config: {
                  layout: 'Grid',
                  layoutConfig: {
                    value: [24],
                  },
                  API: {
                    // getAPI: '/api/crud/coachingAction/coachingActions/<id>',
                    updateAPI: '/api/u/poseModel/update/threshold/action/(id)'
                  },
                  fields: [
                    {
                      label: '阈值', field: 'threshold', type: 'input_num_and_unit',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入阈值",
                        style: {
                          width: 300
                        },
                        unit: '°',
                      }
                    },
                  ],
                },
              }
            ],
          }
        },
      ],
      fields: [
        // {
        //   field: 'rawFrameImage', label: '动作帧', width: 150,
        //   valueType: 'image',
        //   // options: {
        //   //   path: '/aiFitness/vido/keyPose-view'
        //   // },
        // },
        // {
        //   field: 'poseModelImage', label: '动作特征', width: 150,
        //   valueType: 'image',
        //   // options: {
        //   //   path: '/aiFitness/vido/keyPose-view'
        //   // },
        // },
        // { label: '动作特征', field: 'poseModelImage' },
        
        // {
        //   label: '时间位置', field: 'frameTimePosition', valueType: 'time_selection_and_disaible', width: '150px'
        // },

        {
          label: '时间位置', field: 'frameTimePosition', valueType: 'input-number', 
          width: '150px',
          options: {
            min: 0,
            step: "0.01",
            placeholder: "请输入时间位置",
            style: {
              width: '150px'
            },
          }
        },
        { label: '动作名称', field: 'action', valueType: 'input-text', width: '300px' },
        {
          label: '持续时长', field: 'duration', width: '150px', valueType: 'input_num_and_unit',
          rules: ['required'],
          props: {
            min: 1,
            placeholder: "请输入持续时长",
            style: {
              width: '150px'
            },
            unit: '秒',
          }
        },
        {
          label: '重复次数', field: 'repeatTimes', width: '150px', valueType: 'input-number',
          rules: ['required'],
          options: {
            placeholder: "请输入重复次数",
            min: 0,
            style: {
              width: '150px'
            },
          }
        },
      ],
      operation: [
        {
          title: '详情', type: 'path',
          options: {
            outside: true,
            path: '/aiFitness/vido/keyPose-edit',
          },
          expect: {
            field: "hasData",
            value: "/(true)/"
          }
        },
        // {
        //   title: '刷新', type: 'request',
        //   options: {
        //     outside: true,
        //     API:"/api/crud/keyPoseModel/keyPoseModels/(id)",
        //     method:"put",
        //     data:{
        //     },
        //     query:{
        //       frameTimePosition:"frameTimePosition",
        //       action:"action",
        //       duration:"duration",
        //       repeatTimes:"repeatTimes"
        //     }
        //   }
        // },
        // {
        //   title: '编辑', type: 'modal', options: {
        //     outside: true,
        //     modalTitle: '编辑关键动作',
        //     modalWidth: 680,
        //     items: [
        //       {
        //         layout: 'Empty',
        //         component: 'children_form_fetch',
        //         config: {
        //           layout: 'Grid',
        //           layoutConfig: {
        //             value: [24],
        //           },
        //           API: {
        //             getAPI:'/api/crud/keyPoseModel/keyPoseModels/(id)',
        //             updateAPI: '/api/crud/keyPoseModel/keyPoseModels/(id)'
        //           },
        //           fields: [
        //             {
        //               label: '时间位置', field: 'frameTimePosition', type: 'number',
        //               rules: ['required'],
        //               props: {
        //                 placeholder: "请输入时间位置",
        //                 min: 0,
        //                 step: "0.01",
        //                 style: {
        //                   width: '350px'
        //                 },
        //               },
        //             },
        //             {
        //               label: '动作名称', field: 'action', type: 'input', width: '350px',
        //               rules: ['required'],
        //               props: {
        //                 placeholder: "请输入动作名称"
        //               }
        //             },
        //             {
        //               label: '持续时长', field: 'duration', type: 'input_num_and_unit',
        //               rules: ['required'],
        //               props: {
        //                 min: 0,
        //                 placeholder: "请输入持续时长",
        //                 style: {
        //                   width: '350px'
        //                 },
        //                 unit: '秒',
        //               }
        //             },
        //             {
        //               label: '重复次数', field: 'repeatTimes', type: 'number',
        //               rules: ['required'],
        //               props: {
        //                 placeholder: "请输入",
        //                 min: 0,
        //                 style: {
        //                   width: '350px',
        //                 }
        //               }
        //             },
        //           ],
        //         },
        //       }
        //     ],
        //   }
        // },
        // {
        //   title: '删除',
        //   type: 'request',
        //   options: {
        //     outside: true,
        //     tips: '确定要删除吗?',
        //     API: '/api/crud/keyPoseModel/keyPoseModels/(id)',
        //     method: 'delete'
        //   }
        // },
        {
          title: '更新', type: 'editChild',
          options: {
            outside: true,
          }
        },
        {
          title: '移除', type: 'removeChild',
          options: {
            outside: true,
            tips: '确定要删除吗?',
          }
        },
      ],
    },
  }
];
