// import React,{useState} from 'react'
// import {Button,message,Input} from 'antd'
// import { get as getEndpoint} from 'zero-element/lib/utils/request/endpoint'
// import { getToken } from 'zero-element/lib/utils/request/token';

// const { TextArea } = Input;
// export default function FetchCommit(props){
//     const {
//         value,
//         options,
//     }=props
//     const {
//         fieldName,
//         inputField,
//         api,
//         method,
//         buttonText,
//         placeholder,
//         props:aProps
//     }=options
//     const [fetchData,setFetchData] = useState()
//     const [inputData,setInputData] = useState()
//     const endpoint = getEndpoint()
//     const handleFetch = () =>{
//         let theData = {
//             [inputField]:inputData,
//             [fieldName]:value
//         }
//         let token = getToken()
//         const requestData = new Request(endpoint+api,{
//             method:method,
//             body:JSON.stringify(theData),
//             headers:{
//                 Authorization:`Bearer ${token}`
//             }
//         })
//         fetch(requestData).then(res=>{
//             console.log(res)
//             // res.json()
//             if(res.status === 200){
//                 message.success("更改成功")
//                 window.location.reload()
//             }
//         }).catch(err=>{
//             message.error(err.msg)
//         })
//     }
//     const handleInput = (e) =>{
//         setInputData(e.target.value)
//     }
//     return <>
//         <TextArea onInput={handleInput} placeholder={placeholder} {...aProps}></TextArea>
//         <div style={{"width":"100%","display":"flex","justifyContent":"flex-end","marginTop":"20px"}}>
//         <Button onClick={handleFetch} type="primary">
//             {buttonText||"提交"}
//         </Button>
//         </div>
//     </>
// }


import React,{useState} from 'react'
import {Button,message,Input} from 'antd'
import { get as getEndpoint} from 'zero-element/lib/utils/request/endpoint'
import { getToken } from 'zero-element/lib/utils/request/token';

const { TextArea } = Input;
export default function FetchCommit(props){
    const {
        value,
        options,
        isGoBack = false
    }=props
    const {
        fieldName,
        inputField,
        api,
        method,
        buttonText,
        placeholder,
        props:aProps
    }=options
    const [fetchData,setFetchData] = useState()
    const [inputData,setInputData] = useState()
    const endpoint = getEndpoint()
    const handleFetch = () =>{
        let newAPI = api;
        let isUseField = false
        if(api.indexOf("@fieldName")!==-1){
            newAPI = api.replace(/@fieldName/g,value)
            isUseField = true
        }else{
            newAPI = api
        }
        let theData = isUseField?{
            [inputField]:inputData
        }:{
            [inputField]:inputData,
            [fieldName]:value
        }
        let token = getToken()
        const requestData = new Request(endpoint+newAPI,{
            method:method,
            body:JSON.stringify(theData),
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        fetch(requestData).then(res=>{
            console.log(res)
            // res.json()
            if(res.status === 200){
                message.success("更改成功")
                if(isGoBack){
                    //返回上一页
                    window.history.back();
                }else{
                    window.location.reload()
                }
            }
        }).catch(err=>{
            message.error(err.msg)
        })
    }
    const handleInput = (e) =>{
        setInputData(e.target.value)
    }
    return <>
        <TextArea onInput={handleInput} placeholder={placeholder} {...aProps}></TextArea>
        <div style={{"width":"100%","display":"flex","justifyContent":"flex-end","marginTop":"20px"}}>
        <Button onClick={handleFetch} type="primary">
            {buttonText||"提交"}
        </Button>
        </div>
    </>
}