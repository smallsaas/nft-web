
import React from 'react';
import ZEle from 'zero-element';
import config from './config/representation-order-view';
import useBreadcrumb from '@/framework/useBreadcrumb';


export default function () {

    useBreadcrumb([
      { title: '首页'},
      { title: '申述管理', path: '/representation'  },
      { title: '订单详情' }
    ]);
  
    return <div>
      <ZEle namespace="representation-order-view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="representation-view" config={config} />;

