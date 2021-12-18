import React from 'react';
import ZEle from 'zero-element';
import config from './config/spiritprocessnumbermanage_edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '场次管理', path: '/spiritprocessnumbermanage' },
      { title: '编辑场次' }
    ]);
  
    return <div>
    <ZEle namespace="spiritprocessnumbermanage_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
