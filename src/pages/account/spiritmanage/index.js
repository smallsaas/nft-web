import useBreadcrumb from '@/framework/useBreadcrumb';
import React, {useState} from 'react';
import ZEle from 'zero-element';
import config from './confignumber/indexnumber';
import configlittertwo from './configlittertwo/indexlittertwo';
import './index.css'

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/account/spiritmanage' },
    { title: '精灵处理' },
  ]);

  const [tap,setTap] = useState('场次')

  const whichTap = (e,v) => {
    console.log(e,v)
    setTap(v)
  }

  return <div>
    <div className="tabB"><div onClick={(e)=>whichTap(e,'场次')} className={tap == '场次' ? 'active' : ''}>场次</div><div className={tap == '小二' ? 'active' : ''} onClick={(e)=>whichTap(e,'小二')}>小二</div></div>
    {tap == '场次' ?   <ZEle
      namespace="spiritmanage"
      config={config}
    /> : <ZEle
    namespace="spiritmanage"
    config={configlittertwo}
  />}
  </div>
}