import React from 'react'
export default function formatTime (props) {
  const {
    data: {
      text = "-"
    },
  } = props
  function refact (string) {
    if (string) {
      let value = `${string}`
      if (value.indexOf(':') != -1) {
        let stringObj = value.split(':')
        value = stringObj.join("时")
        value = value.substring(0, 5)
        return value + "分"
      } else {
        return `${value}分钟`
      }
    } else {
      return '-'
    }
  }
  return <div>
    {refact(text)}
  </div>
}