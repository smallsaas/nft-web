import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/newteammanage' },
    { title: '团队管理' },
  ]);

  return <div>
    <ZEle
      namespace="newteammanage"
      config={config}
    />
  </div>
}