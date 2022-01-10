/* 搞错了 moment 的 format 中 时应该是 HH 而不是 hh */
import React from 'react'
import {TimePicker} from 'antd'
import moment from 'moment'
export default function TimeChoose(props){
    const {
        value,
        props:tProps,
        onChange
    }=props
    function handleChange(e){
        console.log(e)
        let t;
        t = moment(e).format("HH:mm:ss")
        console.log(e,t,'输出e')
        onChange(t)
    }
    console.log(moment(value||new Date(),"HH:mm:ss"))
    console.log(moment(value||new Date()).format("HH:mm:ss"))
    return <div>
        <TimePicker {...tProps} onChange={(e)=>handleChange(e)} defaultValue={moment(value||"00:00:00","HH:mm:ss")}></TimePicker>
    </div>
}