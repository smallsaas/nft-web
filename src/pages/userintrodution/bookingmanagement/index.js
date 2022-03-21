import React from 'react';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';
import useBreadcrumb from '@/framework/useBreadcrumb';
import CurrentBooking from './currentBooking';
import BookingHistory from './bookingHistoryList';

const { TabPane } = Tabs;

export default function BookingTab(props) {

  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '预约' },
  ]);

  function handleChangeTabPane(key) {
  }

  return <Content>
    <Tabs
      destroyInactiveTabPane
      onChange={handleChangeTabPane}
    >
      <TabPane tab="查看预约" key="booking_list">
        <CurrentBooking />
      </TabPane>
      <TabPane tab="预约历史" key="booking_history">
        <BookingHistory />
      </TabPane>
    </Tabs>
  </Content>
}