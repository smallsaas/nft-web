import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';

import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import promiseAjax from '@/utils/promiseAjax';

import {message} from 'antd'
export default function () {
    useBreadcrumb([
      { title: '首页', path: '/' },
      { title: '测试动态页面加载' },
    ]);
    
    const [pageConfig, setPageConfig] = useState('')
    const [pageId,setPageId] = useState(0)
    let pageEndpoint = "/api/crud/lowMainPage/lowMainPages"
    let id;
    const getParams = () =>{
      var array = window.location.href.split("?");   
      if ((parseInt(array.length) - parseInt(1)) > 0) {   
           var array1 = array[1].split("&");   
           if (array1.length > 0) {   
              //  console.log(array1)
               for(var i in array1){
                 console.log(array1[i])
                 if(array1[i].indexOf("id=")!==-1){
                 console.log(array1[i].split("id=")[1])
                 id = array1[i].split("id=")[1]
                 }
               }
           }   
       } 
    }
    getParams()

    useDidMount(_ => {
      // const apiUrl = `/api/config`;
      // const apiUrl = `https://api.mock.smallsaas.cn/data`;
      const apiUrl = `http://192.168.3.239:8000/api/config`;
      const queryData = {
        id:1
      };
      promiseAjax(apiUrl, queryData)
        .then(resp => {
          console.log(resp,111111)
          if (resp.status===1) {
            const data = resp.data;
            setPageConfig(data)
          } else {
            console.error('获取页面配置信息失败')
          }
        })
      // let endpoint = getEndpoint()
      // const pageUrl = `${endpoint}${pageEndpoint}/${id}`;
      // const pageUrl = `${endpoint}${apiUrl}`;

      // promiseAjax(pageUrl,{})
      // .then(resp => {
      //   if (resp && resp.code === 200) {
      //     const Listdata = resp.data;
      //     // message.success("加载成功")
      //     setPageId(Listdata.id)
      //   } else {
      //     message.error('获取页面配置信息失败')
      //   }
      // }).catch(err=>{
      //     // message.error('获取页面配置信息失败')
      // })
    });

    if(pageConfig){
      const config = {
        layout: pageConfig.layout.table,
        title: pageConfig.pageName.table,
        items: [
          {
            component: 'Search',
            config: {
              type:"default",
              fields: pageConfig.searchFields,
            },
          },
          {
            component: 'Table',
            config: {
              API: {
                listAPI: pageConfig.listAPI,
                deleteAPI: pageConfig.deleteAPI,
              },
              actions: pageConfig.tableActions,
              fields: pageConfig.tableFields,
              operation: pageConfig.tableOperation,
            },
          },
        ],
      }
      return <ZEle namespace="dynamic_page" config={config} />;
    }else{
      return null
    }
 } 
