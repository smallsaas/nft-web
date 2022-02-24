import React from 'react';
import ZEle from 'zero-element';
import config from './config/permDefine-view';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '权限管理', path: '/permManage' },
      { title: '查看详情' }
    ]);
  
    return <div>
     <ZEle namespace="permDefine_view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_view" config={config} />;
