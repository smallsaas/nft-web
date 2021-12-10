import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/configure/spiritconfigure/addspirit' },
    { title: '配置中心' },
    { title: '添加精灵' },
  ]);

  return <div>
    <ZEle
      namespace="addspirit"
      config={config}
    />
  </div>
}