import React from 'react';
import ZEle from 'zero-element';
import config from './config/land-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '土地管理', path: '/landManage' },
      { title: '编辑土地' }
    ]);
  
    return <div>
    <ZEle namespace="land_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
