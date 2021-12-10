import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/accountmanage/editaccount' },
    { title: '账号管理' },
    { title: '修改账号' },
  ]);

  return <div>
    <ZEle
      namespace="editaccount"
      config={config}
    />
  </div>
}