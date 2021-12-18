import React from 'react'
import moment from 'moment'
export default function formatTime(props){
    const{
        data:{
            text="-"
        },
    }=props
    return <div>
        {moment(text).format("YYYY-MM-DD hh:mm:ss")}
    </div>
}