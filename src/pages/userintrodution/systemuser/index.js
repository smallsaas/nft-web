import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/systemuserReport';

export default function () {

  useBreadcrumb([
    { title: '玩家攻略', path: '/userintrodution' },
    { title: '系统号' },
  ]);

  return <div>
    <ZEle
      namespace="system_user"
      config={config}
    />
  </div>
}