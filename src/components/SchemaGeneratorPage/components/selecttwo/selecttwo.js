
import { Select } from 'antd'
export default function(){
    function handleChange(value) {
        console.log(`selected ${value}`);
      }

	return  (
        <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
            <Option value="审核通过">审核通过</Option>
            <Option value="审核中">审核中</Option>
            <Option value="审核不通过">审核不通过</Option>
        </Select>
    )
}