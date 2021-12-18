import React from 'react';
import ZEle from 'zero-element';
import config from './config/storemanage_add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '店小二管理', path: '/storemanage' },
      { title: '添加店小二' }
    ]);
  
    return <div>
     <ZEle namespace="storemanage_add" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_add" config={config} />;
