import React from 'react';
import ZEle from 'zero-element';
import config from './config/agentReport';

export default function AgentReport() {
  return <ZEle namespace='agentReport' config={config} />;
}