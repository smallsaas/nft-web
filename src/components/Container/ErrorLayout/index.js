import React from 'react';
import { history } from 'umi';
import { Row, Button } from 'antd';
import { removeToken } from 'zero-element/lib/utils/request/token';

import './index.less';

// import img_401 from '../../../../public/error_img.png';

export default function ErrorLayout(props) {

  const { config } = props;
  const { status } = config;

  function handleLogOut() {
    history.push('/login');
    removeToken();
  }

  return <div className='errorBody'>

    <Row align='center' justify='center'>
        <img  src='error_img.png'/>
        <div className='errorContent'>
            <div className='title textItem'>{status}</div>
            <div className='subTitle textItem'>抱歉, 你无法访问该页面</div>
            <div className='btn textItem'>
              <Button type="primary" onClick={handleLogOut}>转至登录页</Button>
            </div>
        </div>
    </Row>

  </div>
}