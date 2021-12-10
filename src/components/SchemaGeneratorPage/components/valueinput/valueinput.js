import { Input } from 'antd';
export default function(){
	return (
		<div style={{display:'flex',flexDirection:'row'}}>
			 <Input  placeholder="large size"  style={{width:120}}/>——
   			 <Input  placeholder="default size"  style={{width:120}}/>
		</div>
	)
}