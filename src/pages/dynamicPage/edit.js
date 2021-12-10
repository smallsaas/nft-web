/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ZEle from 'zero-element';
import config from './config/dynamicPage-edit';
import qs from 'qs';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function salesChancEdit({ location }) {
  const { id } = qs.parse(location.search.replace('?', ''));
  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '编辑'}
  ]);
  return <ZEle namespace="dynamicPage-edit" config={config}
    extraData={{
      id,
    }}
/>
}