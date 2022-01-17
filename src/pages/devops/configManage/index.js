import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ConfigItems from '@/pages/devops/configItems';
import ConfigGroups from '@/pages/devops/configGroups';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';

const { TabPane } = Tabs;

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '配置管理' },
  ]);

  function handleChangeTabPane(key) {
  }

  return (
    <Content>
      <Tabs
        destroyInactiveTabPane
        onChange={handleChangeTabPane}
      >
        <TabPane tab="配置项" key="configItems">
          <ConfigItems />
        </TabPane>
        <TabPane tab="配置分组" key="configgroups">
          <ConfigGroups />
        </TabPane>
      </Tabs>
    </Content>
  )
}