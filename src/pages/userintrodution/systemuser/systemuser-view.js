import React from 'react';
import ZEle from 'zero-element';
import config from './config/systemuser-view';
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
      title: "账号详情"
    }
  ]);
  return <ZEle namespace = "systemuser-view"
  config = {
    config
  }
  />
}
// import React from 'react';
// import ZEle from 'zero-element';
// import config from './config/newaccount-view';


// export default () => <ZEle namespace="newaccount_view" config={config} />;
