// import React from 'react';
// import ZEle from 'zero-element';
// import config from './config/newaccount-edit';


// export default () => <ZEle namespace="newaccount-edit" config={config} />;

import React from 'react';
import ZEle from 'zero-element';
import config from './config/systemuser-edit';
import useBreadcrumb from "@/framework/useBreadcrumb"

export default () => {

  useBreadcrumb([{
      title: '首页',
      path: '/'
    },
    {
      title: "账号管理",
      path: '/newaccount'
    },
    {
      title: "编辑账号"
    }
  ]);
  return <ZEle namespace="systemuseredit" config={config} />
}
