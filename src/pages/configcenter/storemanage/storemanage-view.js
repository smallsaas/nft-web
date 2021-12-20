import React from 'react';
import ZEle from 'zero-element';
import config from './config/storemanage-view';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '配置中心',},
      { title: '查看详情' }
    ]);
  
    return <div>
     <ZEle namespace="storemanage-view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_view" config={config} />;
