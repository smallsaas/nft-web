import React from 'react';
import ZEle from 'zero-element';
import config from './config/orderReportBenefit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function AgentReport() {

  useBreadcrumb([
    { title: '结算中心',path:'/orderCenter' },
    { title: '推荐收益' },
  ]);

  return <ZEle namespace='orderReportBenefit' config={config} />;
}