import React from 'react';
import ZEle from 'zero-element';
import config from './config/guguManage-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: 'GuGu令管理', path: '/guguManage' },
      { title: '添加GuGu令' }
    ]);
  
    return <div>
     <ZEle namespace="guguManage_add" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_add" config={config} />;
