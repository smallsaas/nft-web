import React from 'react';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';
import useBreadcrumb from '@/framework/useBreadcrumb';
import TimingConf from './timingConf_copy';
import TaskHistory from './taskHistory';

const { TabPane } = Tabs;

export default function Term (props) {

  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '系统管理' },
    { title: '定时任务' },
  ]);

  function handleChangeTabPane (key) {
  }

  return <Content>
    <Tabs
      destroyInactiveTabPane
      onChange={handleChangeTabPane}
    >
      <TabPane tab="执行任务" key="task_list">
        <TimingConf />
      </TabPane>
      <TabPane tab="任务历史" key="task_history">
        <TaskHistory />
      </TabPane>
    </Tabs>
  </Content>
}