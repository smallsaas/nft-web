import React from 'react';
import ZEle from 'zero-element';
import config from './config/permDefine-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '权限分组', path: '/permManage' },
      { title: '添加分组' }
    ]);
  
    return <div>
     <ZEle namespace="permDefine_add" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_add" config={config} />;
