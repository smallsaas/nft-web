import React from 'react';
import ZEle from 'zero-element';
import config from './config/blacklist-view';
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
  return <ZEle namespace = "blacklist_view"
  config = {
    config
  }
  />
}
