import React, { useState } from 'react';
import { history } from 'umi';
import { message } from 'antd';
import qs from 'qs';
import { getToken, saveToken } from 'zero-element/lib/utils/request/token';
// import { useModel } from 'zero-element/lib/Model';

import { useDidMount, useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

export default function (props) {

    // const model = useModel('global');

    const [ getThirdToken, setThirdToken ] = useState();

    
    useDidMount(_ => {

        const { location } = props;
        const { token } = qs.parse(location.search.replace('?', ''));

        handleRequest(token)

    });

    function handleRequest (token) {
        
        const apiUrl = `${getEndpoint()}/auth/oauth/convert`

        const queryData = {
            token
        }

        promiseAjax(apiUrl, queryData)
            .then(resp => {

                if (resp && resp.user_id > 0) {
                    setThirdToken(resp.encryptedData);
                } else {
                    console.log('获取token信息失败')
                }
            })
    }

    if(getThirdToken){
        saveToken({
            token: getThirdToken,
        })
        // model.queryPerm(false);
        // window.localStorage.setItem('stopPerm', false)
        history.push('/admin');
    }

  return <div></div>
}
