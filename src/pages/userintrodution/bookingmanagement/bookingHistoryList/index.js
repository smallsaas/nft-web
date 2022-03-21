import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  return <div>
    <ZEle
      namespace="booking_history"
      config={config}
    />
  </div>
}