// import React from 'react';



import React, { useState } from 'react';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';

import ZEle from 'zero-element';
import config from './config';
import configHistory from './config-history';

const { TabPane } = Tabs;

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '配置管理' },
  ]);

  useWillUnmount(_ => {
  });

  //permpage, permgroups
  function handleChangeTabPane(key) {
  }

  return (
    <Content>
      <Tabs
        destroyInactiveTabPane
        onChange={handleChangeTabPane}
      >
        <TabPane tab="当天" key="config-today">
            <ZEle namespace="config-today" config={config} />
        </TabPane>
        <TabPane tab="历史记录" key="config-history">
            <ZEle namespace="config-history" config={configHistory} />
        </TabPane>
      </Tabs>
    </Content>
  )
}
