/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { formatAPI } from 'zero-element/lib/utils/format';
import './index.less';

export default function valueTypePlainPopover(props) {
  const { namespace, options = {}, data: { index, text = '', record }, } = props;
  const { style, format, placeholder = '-', placement='topLeft'  } = options;
  const [t, setT] = useState([]);

  useEffect(_ => {
    if (format) {
      const rst = [];
      if (Array.isArray(format)) {
        format.forEach(f => {
          rst.push(formatAPI(f, { namespace, placeholder, data: record }))
        })
      } else {
        rst.push(formatAPI(format, { namespace, placeholder, data: record }))
      }
      setT(rst);

    } else {
      setT([String(text)]);
    }
  }, [record, format]);

  if (format) {
    return <div>
      {t.map((text, i) => {
        const rst = /^(?<label>\S+(:|：))(?<value>[\ \S]+)/.exec(text);
        if (rst && rst.groups) {
          const { groups } = rst;
          const { label, value } = groups;
          return <div className="ZEle-valueType-plain" key={i}>
            <span className="label">{label}</span>
            <span>{value}</span>
          </div>
        }
        return <div className="ZEle-valueType-plain" key={i}>{text}</div>;
      })}
    </div>
  }

  let echoText = text;
  if (!text && text !== 0) {
    echoText = placeholder;
  }
  return ( echoText ? 
    <Popover placement={placement} title="" content={`${record.mobilePhone ? record.mobilePhone : placeholder}`} arrowPointAtCenter>
      <span style={style}>{echoText}</span>
    </Popover> : <span style={style}>{echoText}</span>
  )
}