import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/pageSetting.json';
    
export default () => {

  return <DetailsTemplate
    namespace="dynamicPage_detail"
    setting={setting}
    config={setting.viewConfig}
  />
}