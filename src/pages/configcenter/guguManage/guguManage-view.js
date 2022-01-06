import React from 'react';
import ZEle from 'zero-element';
import config from './config/guguManage-view';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: 'GuGu令管理', path: '/guguManage' },
      { title: '查看详情' }
    ]);
  
    return <div>
     <ZEle namespace="guguManage-view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_view" config={config} />;
