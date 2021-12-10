import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/accountmanage/handlingrepresentations' },
    { title: '申述管理' },
    { title: '处理申述' },
  ]);

  return <div>
    <ZEle
      namespace="handlingrepresentations"
      config={config}
    />
  </div>
}