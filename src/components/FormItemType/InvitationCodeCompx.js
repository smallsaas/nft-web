import React from 'react';
import { Input, Button, Space } from 'antd';

export default (props) => {

    const { ...rest } = props;

    const { dateFormat = {} } = global;
    const { value, options = {}, onChange,
      props: propsOpt,
      formdata,
      name,
      handle,
      // ...restProps
      defaultValue,
      data = {},
      field,
      bindfield,
    } = props;
  

    function send(){
        // console.log('formdata = ', formdata)
        // console.log('name = ', name)
        // console.log('handle = ', handle)
        // console.log('defaultValue = ', defaultValue)
        // console.log('data = ', data)
    }

    return (

        <Space>
            <Input {...rest} {...propsOpt} style={{ width:"240px" }} />
            <Button  fill='outline' color='primary' onClick={() => send()}>获取验证码</Button>
        </Space>
    )
}