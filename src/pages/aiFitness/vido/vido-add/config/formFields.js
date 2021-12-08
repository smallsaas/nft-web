module.exports = [
  // {
  //   label: '上传视频',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   options: {
  //     type: 'text'
  //   },
  //   type: 'upload-file',
  //   field: 'vidoSrc'
  // },
  
  {
    label: '序号', field: 'sortNum', type: 'number',
    min: 0,
    props: {
      placeholder: "请输入序号",
      style: {
        width: '350px',
      }
    }
  },
  {
    label: "上传视频",
    rules: [
      {
        type: "required"
      }
    ],
    field: "vidoSrc",
    type: "upload_file_single",
    options: {
      title: "点击上传",
      API: "/api/fs/uploadfile",
      acceptType: ".mp4, .avi, .rmvb"
    },
    props:{
      style:{
        width: "200px"
      }
    }
  },
  {
    label: '模型名称',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '用于标识动作的名称，一般用英文标识 ',
    },
    width: '350px',
    type: 'input',
    field: 'modelBaseName'
  },
  {
    label: '动作名称',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入视频名称',
    },
    width: '350px',
    type: 'input',
    field: 'actionName'
  },
  {
    label: '类型',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入类型',
    },
    width: '350px',
    type: 'input',
    field: 'trainingType'
  },
  {
    label: '适用症状',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入适用症状',
    },
    width: '350px',
    type: 'input',
    field: 'prescriptionSymptoms'
  },
  // {
  //   label: '动作说明',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   props: {
  //     placeholder: '请输入动作说明',
  //     maxLength:"200",
  //     showCount:true,
  //     style:{
  //       width: '450px',
  //     },
  //     autoSize: {
  //       minRows: 5,
  //     }
  //   },
  //   type: 'text-area',
  //   field: 'trainingType'
  // },
  {
    label: '训练方式',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入训练方式',
      maxLength:"200",
      showCount:true,
      style:{
        width: '450px',
      },
      autoSize: {
        minRows: 5,
      }
    },
    type: 'text-area',
    field: 'practiceMode'
  },
  {
    label: '练习效果',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入练习效果',
      maxLength:"200",
      showCount:true,
      style:{
        width: '450px',
      },
      autoSize: {
        minRows: 5,
      }
    },
    type: 'text-area',
    field: 'practiceEffect'
  },

];
