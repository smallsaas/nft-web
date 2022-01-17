// import React from 'react';
// import ZEle from 'zero-element';
// import config from './config/newaccount-edit';


// export default () => <ZEle namespace="newaccount-edit" config={config} />;

import React from 'react';
import ZEle from 'zero-element';
import config from './config/newaccount-edit';
import configTwo from './config/loginpayment-edit';
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
  return (
   <div>
      <ZEle namespace="newaccount-edit" config={config} />
      <ZEle namespace="loginpayment-edit" config={configTwo} />
   </div>
  )
}
