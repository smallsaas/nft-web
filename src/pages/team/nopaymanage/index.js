import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/team/nopaymanage' },
    { title: '未付款列表' },
  ]);

  return <div>
    <ZEle
      namespace="nopaymanage"
      config={config}
    />
  </div>
}