import React from 'react';
import { Input, Button, Space } from 'antd';

export default ({ props, ...rest }) => {

    function send(){
        console.log('props = ', props)
        console.log('rest = ', rest)
    }

    return (

        <Space>
            <Input {...rest} {...props} style={{ width:"240px" }} />
            <Button  fill='outline' color='primary' onClick={() => send()}>获取验证码</Button>
        </Space>
    )
}