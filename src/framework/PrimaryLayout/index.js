import React, { useContext, useMemo, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useModel } from 'zero-element/lib/Model';
import { useDocumentVisibility } from 'ahooks';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import './index.less';

import GlobalContext from '@/framework/GlobalContext';

import selectNavStyle from './utils/selectNavStyle';
const appLogo = require( '../../../public/applogo.png');

const { Header, Content } = Layout;

export default function PrimaryLayout({
  location, children,
  menuData, breadcrumb,
}) {
  const { style } = useContext(GlobalContext);
  const { nav } = style;
  const [switchLeftNav, setSwitchLeftNav] = useState();

  const globalModel = useModel('global');
  const { permissions } = globalModel;
  const documentVisibility = useDocumentVisibility();

  useEffect(_ => {
    if (documentVisibility === 'visible') {
      globalModel.queryPerm();
    }
  }, [permissions, documentVisibility]);

  const [
    TopNav, TopNavData,
    LeftNav, LeftNavData
  ] = useMemo(_ => {
    return selectNavStyle(nav, menuData, location.pathname, switchLeftNav);
  }, [nav, menuData, location.pathname, switchLeftNav, permissions]);

  // 当导航类型为 both 时, 应该在 top 渲染第一级菜单, left 渲染第二级
  // 此时, 点击 top 的导航时需要替换 left, 但不应该被路由
  function handleSwitchLeftNav(path) {
    setSwitchLeftNav(path);
  }

  const aloneView = ['/', '/login', '/columnEdit', '/menuEidt'].includes(location.pathname);

  return <Layout>
    {aloneView ? null : (
      <Header className="header topNav">
        <div className="logo">
        <div  style={{height:"64px",position:"relative"}}>
        <a href="/"  style={{position:"absolute",top:"45%",left:"5%",transform:"translate(-50%,-50%)"}}>
          <div>
            <img width={40} src={appLogo} style={LeftNavData&&LeftNavData.length>1?{}:{display:"none"}}></img>
          </div>
      {/* SmallSaaS低代码开发平台 */}
      </a>
    </div>
        </div>
        <TopNav
          path={location.pathname}
          menuData={TopNavData}
          navType={nav}
          onClick={nav === 'both' ? handleSwitchLeftNav : undefined}
        />
        <div className="login">
          <Login />
        </div>
      </Header>
    )}
    <Layout className="pageContainer">
      {aloneView && LeftNav ? null : (
        <LeftNav navType={nav} path={location.pathname} menuData={LeftNavData} />
      )}
      <Layout id="contentContainer" className="contentContainer" style={
        aloneView ? undefined : { padding: '0 24px 24px' }
      }>
        {aloneView ? null : (
          <Breadcrumb path={location.pathname} breadcrumb={breadcrumb} />
        )}
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}