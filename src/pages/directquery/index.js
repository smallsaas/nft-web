import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/directquery' },
    { title: '直推查询列表' },
  ]);

  return <div>
    <ZEle
      namespace="directquery"
      config={config}
    />
  </div>
}