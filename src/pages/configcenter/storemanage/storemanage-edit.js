import React from 'react';
import ZEle from 'zero-element';
import config from './config/storemanage-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '配置中心' },
      { title: '编辑店小二' }
    ]);
  
    return <div>
    <ZEle namespace="storemanage-edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
