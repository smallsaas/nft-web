
import { TimePicker } from 'antd';
import moment from 'moment';
function onChange(time, timeString) {
    console.log(time, timeString);
  }
export default function(){
	return (
       <div>
           <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />——<TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
       </div>
    )
}