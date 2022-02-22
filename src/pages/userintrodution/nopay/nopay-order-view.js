
import React from 'react';
import ZEle from 'zero-element';
import config from './config/nopay-order-view';
import useBreadcrumb from '@/framework/useBreadcrumb';


export default function () {

    useBreadcrumb([
      { title: '首页'},
      { title: '未付款列表', path: '/nopay'  },
      { title: '订单详情' }
    ]);
  
    return <div>
      <ZEle namespace="nopay-order-view" config={config} />
    </div>
  }

