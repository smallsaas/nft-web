import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/nopay' },
    { title: '未付款列表' },
  ]);

  return <div>
    <ZEle
      namespace="nopay"
      config={config}
    />
  </div>
}