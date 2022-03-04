/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { history } from 'umi';
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { Avatar, Menu, Dropdown } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SwapOutlined,
} from '@ant-design/icons';

// import { TestUserSelection } from 'zero-element-plugins';

import { LS } from 'zero-element/lib/utils/storage';

import './index.less'


export default (props) => {

  const [visible, useVisible] = useState(false);
  const [uVisible, useUVisible] = useState(false);

  function handleVisibleChange(visible) {
    useVisible(visible);
    if (!visible) {
      useUVisible(false)
    }
  }

  function handleOnItemClickHandle() {
    useVisible(false);
    useUVisible(false);
  }

  function handleLogOut() {
    LS.del('menuList');
    useVisible(false);
    removeToken();
    history.push('/login');
  }

  function handleRouteToProfile() {
    history.push('/profile/baseInfo');
    useVisible(false);
  }

  const menu = (
    <Menu>
      {/* <Menu.Item disabled>
        <div style={{ textAlign: 'center', cursor: 'default', color: '#666' }}>{getUserName()}</div>
      </Menu.Item> */}
      <Menu.Item style={{ width: 200, height: 180, position: "relative", cursor: 'default' }}>
        <Avatar src={getAvatar()} style={{ position: 'absolute', left: '50%', top: 35, transform: ' translate(-50%)' }} icon={<UserOutlined style={{ fontSize: 60, paddingTop: 8, paddingLeft: 5 }} />} size={90} />

        <span style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bolder', position: 'absolute', bottom: 20, left: '50%', transform: ' translate(-50%)' }}>{getUserName()}</span>
      </Menu.Item>
      <Menu.Item onClick={handleRouteToProfile}>
        <AppstoreOutlined style={{ paddingLeft: 10 }} />
        <span className="ZEleA-margin-left">个人中心</span>
      </Menu.Item>
      <Menu.Divider />
      {process.env.NODE_ENV === 'development' ? (
        <>
          <Menu.Item onClick={_ => useUVisible(true)}>
            <SwapOutlined style={{ paddingLeft: 10 }} />
            <span className="ZEleA-margin-left">切换账号</span>
          </Menu.Item>
          <Menu.Divider />
        </>
      ) : null}
      <Menu.Item onClick={handleLogOut}>
        <LogoutOutlined style={{ paddingLeft: 10 }} />
        <span className="ZEleA-margin-left">退出账号</span>
      </Menu.Item>

    </Menu>
  );


  const MoreMenu = (
    <Menu>
      <Menu.Item key="More1">
        <a href="/designpage/design">设计</a>
      </Menu.Item>
    </Menu>
  )

  const userMenu = (
    <Menu>
      <Menu.Item style={{ padding: 0 }} key="userMenu">
        {/* <TestUserSelection onItemClickHandle={handleOnItemClickHandle} /> */}
      </Menu.Item>
    </Menu>
  )

  return (
    <div style={{ 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center' }}>
      {/* <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        overlay={MoreMenu}
      >
        <a href="Tag/TagView" className="RightNav more"></a>
      </Dropdown>
      <a href="http://docs.smallsaas.cn" className="RightNav docs"></a> */}

      {/* <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        overlay={messageMenu}
      >
        <BellOutlined style={{ fontSize: 25, paddingRight: 20 }} />
      </Dropdown> */}
      
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        visible={visible}
        onVisibleChange={handleVisibleChange}
        overlay={uVisible ? userMenu : visible ? menu : <></>}
        >
        <div>
          <span style={{ fontSize: 22 }}>|</span>
          <span style={{ paddingRight: 15, paddingLeft: 15, fontSize: 17 }}>{getUserName()}</span>
          <span style={{ fontSize: 0 }}>{getExtra()}</span>
          <Avatar src={getAvatar()} icon={<UserOutlined style={{ fontSize: 24 }} />} size={36} />
        </div>
      </Dropdown>
    </div>
  )

}
