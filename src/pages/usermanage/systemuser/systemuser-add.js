// import React from 'react';
// import ZEle from 'zero-element';
// import config from './config/newaccount-add';


// export default () => <ZEle namespace="newaccount-add" config={config} />;


import React from 'react';
import ZEle from 'zero-element';
import config from './config/systemuser-add';
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
      title: "添加账号"
    }
  ]);
  return <ZEle namespace="systemuser-add" config={config} />
}
