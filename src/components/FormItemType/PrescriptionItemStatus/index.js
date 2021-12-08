import React from 'react';
import global from 'zero-element/lib/config/global';
import { Tag } from 'antd';

function PrescriptionItemStatus(props) {

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
  } = props;


  const { index, text, record } = data;

  function handleTime(value){
    var date = new Date(value);
    var now = new Date();
    if(date < now) {
        return <Tag color="red">已过期</Tag>;
    }else {
        return <Tag color="green">使用中</Tag>;
    }
  }


  return text ? handleTime() : <div>-</div>;

}

export default PrescriptionItemStatus;