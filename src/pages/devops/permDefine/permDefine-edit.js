import React from 'react';
import ZEle from 'zero-element';
import config from './config/permDefine-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '权限分组', path: '/permManage' },
      { title: '编辑分组' }
    ]);
  
    return <div>
    <ZEle namespace="permDefine_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
