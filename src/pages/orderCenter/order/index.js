// import React from 'react';
// import ZEle from 'zero-element';
// import config from './config/orderReport';
// import useBreadcrumb from '@/framework/useBreadcrumb';

// export default function AgentReport() {

//   useBreadcrumb([
//     { title: '结算中心',path:'/orderCenter' },
//     { title: '订单收益结算' },
//   ]);

//   return <ZEle namespace='orderReport' config={config} />;
// }

import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {
  
  useBreadcrumb([
    { title: '结算中心',path:'/orderCenter' },
    { title: '订单收益结算' },
  ]);

  return <div>
    <ZEle
      namespace="orderReport"
      config={config}
    />
  </div>
}