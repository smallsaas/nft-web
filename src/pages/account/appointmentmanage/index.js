import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/appointmentmanage' },
    { title: '预约管理' },
  ]);

  return <div>
    <ZEle
      namespace="appointmentmanage"
      config={config}
    />
  </div>
}