import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/accountmanage' },
    { title: '账号管理' },
  ]);

  return <div>
    <ZEle
      namespace="accountmanage"
      config={config}
    />
  </div>
}