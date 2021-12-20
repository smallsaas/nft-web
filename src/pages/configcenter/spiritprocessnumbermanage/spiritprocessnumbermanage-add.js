import React from 'react';
import ZEle from 'zero-element';
import config from './config/spiritprocessnumbermanage-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '场次管理', path: '/spiritprocessnumbermanage' },
      { title: '添加场次' }
    ]);
  
    return <div>
     <ZEle namespace="spiritprocessnumbermanage_add" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_add" config={config} />;
