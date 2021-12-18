import React from 'react'
import moment from 'moment'
export default function formatTime(props){
    const {
        value,
    }=props
	console.log(value)
    console.log(moment(value||new Date(),"hh:mm:ss"))
    console.log(moment(value||new Date()).format("yyyy-mm-dd hh:mm:ss"))
    return <div>
        {moment(value||new Date()).format("hh:mm:ss")}
    </div>
}