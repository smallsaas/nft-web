import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/configure/spiritconfigure/generalconfiguration' },
    { title: '配置中心' },
    { title: '通用配置' },
  ]);

  return <div>
    <ZEle
      namespace="generalconfiguration"
      config={config}
    />
  </div>
}