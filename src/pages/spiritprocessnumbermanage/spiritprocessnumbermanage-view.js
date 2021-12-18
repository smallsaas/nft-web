import React from 'react';
import ZEle from 'zero-element';
import config from './config/spiritprocessnumbermanage-view';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '场次管理', path: '/spiritprocessnumbermanage' },
      { title: '查看详情' }
    ]);
  
    return <div>
     <ZEle namespace="spiritprocessnumbermanage-view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_view" config={config} />;
