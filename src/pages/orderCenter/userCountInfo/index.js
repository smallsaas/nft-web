import React from 'react';
import ZEle from 'zero-element';
import config from './config/userOrderReportBenefit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function AgentReport() {

  useBreadcrumb([
    { title: '结算中心',path:'/orderCenter' },
    { title: '帮会收益' },
  ]);

  return <ZEle namespace='userOrderReportBenefit' config={config} />;
}