import React from 'react';
import ZEle from 'zero-element';
import config from './config/guguManage-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: 'GuGu令管理', path: '/guguManage' },
      { title: '编辑GuGu令' }
    ]);
  
    return <div>
    <ZEle namespace="guguManage_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
