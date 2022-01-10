import React from 'react';
import ZEle from 'zero-element';
import config from './config/land-view';


import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '晶石管理', path: '/sparManage' },
      { title: '查看详情' }
    ]);
  
    return <div>
    <ZEle namespace="land_view" config={config} />
    </div>
  }

//   export default () => <ZEle namespace="spirit_view" config={config} />;
