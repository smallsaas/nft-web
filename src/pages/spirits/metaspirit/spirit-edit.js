import React from 'react';
import ZEle from 'zero-element';
import config from './config/spirit-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '元精灵管理', path: '/spirit' },
      { title: '编辑元精灵' }
    ]);
  
    return <div>
    <ZEle namespace="spirit_edit" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_edit" config={config} />;
