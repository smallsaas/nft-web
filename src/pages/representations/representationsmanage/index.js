import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/representations/representationsmanage' },
    { title: '申述管理' },
  ]);

  return <div>
    <ZEle
      namespace="representationsmanage"
      config={config}
    />
  </div>
}