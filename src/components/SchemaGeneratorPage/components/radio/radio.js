import { Radio } from 'antd';
export default function(){
	return (
    <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>是</Radio>
        <Radio value={2}>否</Radio>
    </Radio.Group>
    )
}