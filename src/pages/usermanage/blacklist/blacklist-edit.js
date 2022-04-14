import React from 'react';
import ZEle from 'zero-element';
import config from './config/blacklist-edit';
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
      <ZEle namespace="blacklist-edit" config={config} />
   </div>
  )
}
