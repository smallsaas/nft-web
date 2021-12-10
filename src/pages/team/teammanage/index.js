import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/team/teammanage' },
    { title: '团队管理' },
  ]);

  return <div>
    <ZEle
      namespace="teammanage"
      config={config}
    />
  </div>
}