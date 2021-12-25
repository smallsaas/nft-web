import React from 'react'
import moment from 'moment'
export default function formatTime(props){
    const{
        data:{
            text="-"
        },
    }=props
    function refact(string){
        let stringObj = string.split(':')
        string = stringObj.join("时")
        string = string.substring(0,5)
        return string+"分"
      }
    return <div>
        {refact(text)}
    </div>
}