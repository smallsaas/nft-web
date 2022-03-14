import React, { useState } from 'react';
import { history } from 'umi';
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { Avatar, Menu, Dropdown, Modal } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SwapOutlined,
} from '@ant-design/icons';

// import { TestUserSelection } from 'zero-element-plugins';

const { SubMenu } = Menu;

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
    useVisible(false);
    history.push('/login');
    removeToken();
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
      <Menu.Item onClick={handleRouteToProfile}>
        <AppstoreOutlined />
        <span className="ZEleA-margin-left">个人中心</span>
      </Menu.Item>
      <Menu.Divider />
      {process.env.NODE_ENV === 'development' ? (
        <>
          <Menu.Item onClick={_ => useUVisible(true)}>
            <SwapOutlined />
            <span className="ZEleA-margin-left">切换账号</span>
          </Menu.Item>
          <Menu.Divider />
        </>
      ) : null}
      <Menu.Item onClick={handleLogOut}>
        <LogoutOutlined />
        <span className="ZEleA-margin-left">退出账号</span>
      </Menu.Item>
    </Menu>
  );
  
  const userMenu = (
    <Menu>
      <Menu.Item style={{ padding: 0 }} key="userMenu">
        {/* <TestUserSelection onItemClickHandle={handleOnItemClickHandle} /> */}
      </Menu.Item>
    </Menu>
  )

  const messageMenu = (
    <Menu>
      <Menu.Item key="1">
        消息消息
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        消息
      </Menu.Item>
    </Menu>
  )

  return <div>
    <Dropdown
      trigger={['click']}
      overlay={messageMenu}
    >
      <BellOutlined />
    </Dropdown>
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      visible={visible}
      onVisibleChange={handleVisibleChange}
      overlay={uVisible ? userMenu : visible ? menu : <></>}
    >
      <div>
        <span>{getUserName()}</span>
        <span>{getExtra()}</span>
        <Avatar src={getAvatar()} icon={<UserOutlined />} size={40} />
      </div>
    </Dropdown>
  </div>
}