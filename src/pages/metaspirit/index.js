import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/metaspirit' },
    { title: '元精灵管理' },
  ]);

  return <div>
    <ZEle
      namespace="metaspirit"
      config={config}
    />
  </div>
}