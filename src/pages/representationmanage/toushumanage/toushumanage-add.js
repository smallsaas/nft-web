
import React from 'react';
import ZEle from 'zero-element';
import config from './config/toushuumanage-add';
import useBreadcrumb from "@/framework/useBreadcrumb"

export default () => {

  useBreadcrumb([{
      title: '首页',
      path: '/'
    },
    {
      title: "申述管理",
      path: '/representation'
    },
    {
      title: "添加投诉类型"
    }
  ]);
  return <ZEle namespace="toushuumanage-add" config={config} />
}
