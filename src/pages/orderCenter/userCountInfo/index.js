import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页' },
    { title: '玩家收益明细' },
  ]);

  return <div>
    <ZEle
      namespace="userCountInfo"
      config={config}
    />
  </div>
}