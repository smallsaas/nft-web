import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页' },
    { title: '精灵处理' },
    { title: '场次',  path: '/spiritprocessnumber'}
  ]);

  return <div>
    <ZEle
      namespace="spiritprocessnumber"
      config={config}
    />
  </div>
}