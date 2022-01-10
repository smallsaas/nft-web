import React from 'react';
import ZEle from 'zero-element';
import config from './config/spar-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '晶石管理', path: '/sparManage' },
      { title: '编辑晶石' }
    ]);
  
    return <div>
    <ZEle namespace="spar_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
