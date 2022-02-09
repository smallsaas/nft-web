
import React from 'react';
import ZEle from 'zero-element';
import config from './config/toushumanage-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '投诉管理', path: '/toushumanage' },
      { title: '处理投诉' }
    ]);
  
    return <div>
     <ZEle namespace="toushumanage-edit" config={config} />
    </div>
  }
