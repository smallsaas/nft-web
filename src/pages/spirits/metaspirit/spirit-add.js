import React from 'react';
import ZEle from 'zero-element';
import config from './config/spirit-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '元精灵管理', path: '/spirit' },
      { title: '添加精灵' }
    ]);
  
    return <div>
     <ZEle namespace="spirit_add" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_add" config={config} />;
