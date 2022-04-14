import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/newaccount' },
    { title: '玩家管理' },
  ]);

  return <div>
    <ZEle
      namespace="newaccount"
      config={config}
    />
  </div>
}