import React from 'react';
import ZEle from 'zero-element';
import config from './config/orderReport';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function AgentReport() {

  useBreadcrumb([
    { title: '结算中心',path:'/orderCenter' },
    { title: '订单收益' },
  ]);

  return <ZEle namespace='orderReport' config={config} />;
}