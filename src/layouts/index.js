import React, { useReducer, useState, useEffect } from 'react';
import PrimaryLayout from '@/framework/PrimaryLayout';
import GlobalContext from '@/framework/GlobalContext';
import window from 'zero-element/lib/utils/window';
import { BackTop } from 'antd';

import router from '@/config/router.config';
import profileMenuData from '@/config/profile.config';
import router403Data from '@/config/403.config';
import router401Data from '@/config/401.config';
import devMenuData from '@/config/dev.config';
import { useDocumentVisibility } from 'ahooks';
import { useModel, getModel } from 'zero-element/lib/Model';
// import { LS } from 'zero-element/lib/utils/storage';

let menuData = [...router];

if (process.env.NODE_ENV === 'development') {
  menuData.push(...devMenuData);
}

function reducer(state, { type, payload }) {
  const method = {
    save() {
      return {
        ...state,
        ...payload,
      }
    },
    clearBc() {
      return {
        ...state,
        breadcrumb: [],
      }
    },
    defaults() {
      console.warn(`未定义的方法: ${type}`);
      return state;
    }
  };
  return (method[type] || method['defaults'])();
};

function BasicLayout(props) {
  const { location } = props;
  const { pathname } = location;

  const documentVisibility = useDocumentVisibility();
  // const menuConfigModel = useModel('menuConfig');
  // const [ menuFirstRequest, setMenuFirstRequest ] = useState(0);
  // const [ menuFirstPush, setMenuFirstPush ] = useState(0);
  
  // useEffect(_ => {
    
  //   if (documentVisibility === 'visible') {
  //     menuConfigModel.queryMenu();
  //     setMenuFirstRequest(1);
  //   }
  // }, [menuTree, documentVisibility]);

  const [state, dispatch] = useReducer(reducer, {
    breadcrumb: [],
    style: {
      nav: window.ZEle.nav,
      theme: window.ZEle.theme,
    },
    OnBreadcrumb: handleBreadcrumb,
    OnBreadcrumbClear: handleBreadcrumbClear,
  });

  function handleBreadcrumb(breadcrumb) {
    dispatch({
      type: 'save',
      payload: {
        breadcrumb,
      },
    });
  }
  function handleBreadcrumbClear() {
    dispatch({
      type: 'clearBc',
    });
  }

  // console.log('menuTree = ', menuTree)
  //更新菜单信息
  // const menuTree = LS.get('menuList');
  // if(menuFirstRequest == 1 && menuFirstPush == 0 && menuTree.length > 0){
  //   if(Array.isArray(menuTree)){
  //     menuData = menuTree;
  //     setMenuFirstPush(1)
  //   }
  // }

  return (
    <GlobalContext.Provider value={state}>
      <BackTop
        target={_ => document.getElementById('contentContainer')}
      />
      <PrimaryLayout
        {...props}
        breadcrumb={state.breadcrumb}
        menuData={switchMenuData(pathname)}
      >
      </PrimaryLayout>
    </GlobalContext.Provider>
  );
}

const reg = /^\/profile\//;
const reg3 = /^\/401\//;
function switchMenuData(pathname) {
  if (reg.test(pathname)) {
    return profileMenuData;
  }

  if(reg3.test(pathname)){
    return router401Data;
  }
  if(pathname === '/403'){
    return router403Data;
  }
  return menuData;

}

export default BasicLayout;
