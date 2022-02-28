import React from 'react'
import moment from 'moment'
export default function formatTime(props){
    const{
        data:{
            text="-"
        },
    }=props

    function handleFormatDate(){
        if(typeof text === 'number'){
            return moment(text).format("YYYY-MM-DD hh:mm:ss")
        }else{
            return text
        }
    }

    return <div>
        {handleFormatDate(text)}
    </div>
}