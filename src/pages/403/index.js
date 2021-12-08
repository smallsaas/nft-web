import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {
    useBreadcrumb([
      { title: '首页', path: '/' },
      { title: '403' },
    ]);

    return <ZEle namespace="layout_403" config={config} />;
 } 
