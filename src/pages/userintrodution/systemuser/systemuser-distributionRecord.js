import React from 'react';
import { PageHeader } from 'antd';
import BodyPage from './config/systemuser-distributionRecord';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListFRStep() {
    useBreadcrumb([
      { title: '首页' },
      { title: '系统号', path: '/userintrodution/systemuser' },
      { title: '发放记录' }
    ]);
    useWillUnmount(switchEndpoint)

    return <PageHeader
        title="发放记录"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <BodyPage/>
    </PageHeader>
};
