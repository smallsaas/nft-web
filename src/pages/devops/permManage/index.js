import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';
import Perm from '@/pages/devops/perm';
import PermGroups from '@/pages/devops/permGroups';

const { TabPane } = Tabs;

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '权限管理' },
  ]);

  function handleChangeTabPane(key) {
  }

  return (
    <Content>
      <Tabs
        destroyInactiveTabPane
        onChange={handleChangeTabPane}
      >
        <TabPane tab="权限管理" key="permpage">
          <Perm />
        </TabPane>
        <TabPane tab="权限分组管理" key="permgroups">
          <PermGroups />
        </TabPane>
      </Tabs>
    </Content>
  )
}