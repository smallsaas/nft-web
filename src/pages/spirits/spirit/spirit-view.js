import React from 'react';
import ZEle from 'zero-element';
import config from './config/spirit-view';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      { title: '精灵管理', path: '/spirit' },
      { title: '查看详情' }
    ]);
  
    return <div>
     <ZEle namespace="spirit_view" config={config} />
    </div>
  }

// export default () => <ZEle namespace="spirit_view" config={config} />;
