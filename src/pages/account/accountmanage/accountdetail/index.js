import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/accountmanage/accountdetail' },
    { title: '账号管理' },
    { title: '查看详情' },
  ]);

  return <div>
    <ZEle
      namespace="accountdetail"
      config={config}
    />
  </div>
}