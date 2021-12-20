import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/bookingmanagement' },
    { title: '查看预约' },
  ]);

  return <div>
    <ZEle
      namespace="bookingmanagement"
      config={config}
    />
  </div>
}