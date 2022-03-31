import React from 'react'
import _ from 'lodash'
export default function formatTime (props) {
  const {
    field,
    handle,
    data: { index, text = '', record },
  } = props;
  const gggg = _.get(record, field, '')

  // var date1 = new Date(gggg * 1000);
  // console.log(date1.getMinutes() + '时' + date1.getSeconds() + '秒' + date1.getMilliseconds() + '毫秒');
  function MillisecondToDate () {
    if (null != gggg && "" != gggg) {
      var time = parseFloat(gggg) / 1000;
      if (time > 60 && time < 60 * 60) {
        time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
          parseInt(time / 60.0)) * 60) + "秒";
      } else if (time >= 60 * 60 && time > 60 * 60 * 24) {
        time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
          parseInt(time / 3600.0)) * 60) + "分钟" +
          parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
            parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
      } else {
        time = parseInt(time) + "秒";
      }
    } else {
      time = "-";
    }
    return time;

  }
  console.log(MillisecondToDate());

  return <div>
    {MillisecondToDate(props)}
  </div>
}