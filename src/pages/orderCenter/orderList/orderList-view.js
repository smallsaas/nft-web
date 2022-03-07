
import React from 'react';
import ZEle from 'zero-element';
import config from './config/orderList-view';
import useBreadcrumb from '@/framework/useBreadcrumb';


export default function () {

    useBreadcrumb([
      { title: '首页'},
      { title: '订单', path: '/orderList'  },
      { title: '订单详情' }
    ]);
  
    return <div>
      <ZEle namespace="orderList-view" config={config} />
    </div>
  }

