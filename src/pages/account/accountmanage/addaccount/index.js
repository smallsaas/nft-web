import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/accountmanage/addaccount' },
    { title: '账号管理' },
    { title: '添加账号' },
  ]);

  return <div>
    <ZEle
      namespace="addaccount"
      config={config}
    />
  </div>
}