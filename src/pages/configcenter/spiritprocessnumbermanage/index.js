import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '场次管理' },
  ]);

  return <div>
    <ZEle
      namespace="spiritprocessnumbermanage"
      config={config}
    />
  </div>
}