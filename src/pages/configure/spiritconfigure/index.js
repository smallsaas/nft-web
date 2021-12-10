import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/configure/spiritconfigure' },
    { title: '配置中心' },
  ]);

  return <div>
    <ZEle
      namespace="spiritconfigure"
      config={config}
    />
  </div>
}