import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页' },
    { title: '精灵处理' },
    { title: '小二',  path: '/spiritprocesshandle'}
  ]);

  return <div>
    <ZEle
      namespace="spiritprocesshandle"
      config={config}
    />
  </div>
}