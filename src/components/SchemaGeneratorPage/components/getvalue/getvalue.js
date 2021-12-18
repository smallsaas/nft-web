import React from "react";
export default function getvalue(props){
    const{
        options={},
        data:{
            text="-"
        },
    }=props
    const {
        useField
    }=options
    return text?(useField?<div>{text[useField]}</div>:<div>
        无使用的子项字段
    </div>):<></>
}