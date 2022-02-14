import React, { useState } from 'react';
import { Typography, Table, Modal, Popconfirm, Select, Form, Button, message } from 'antd';
import promiseAjax from '@/utils/promiseAjax';

const { Title } = Typography;
const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

const tailLayout = {
  wrapperCol: { offset: 16, span: 8 },
};

export default function (props) {

  const { title = '定时任务' } = props;

  const [form] = Form.useForm();

  const [showModal, setShowModal] = useState(false);

  function upgradeAction() {
    const apiUrl = '/api/crud/oms/marketingSession/marketingSessions';
    const queryData = {}
    promiseAjax(apiUrl, queryData)
    .then(resp => {
      console.log(resp , '升级精灵操作')
      if (resp.status===1) {
        const data = resp.data;
      } else {
        console.error('升级失败')
      }
    })
  }

  function showModalAction(record) {
    setShowModal(true)
  }

  function handleCancel() {
    setShowModal(false)
  }

  function onFinish(e) {
    console.log(e, ' 执行 ')
    setShowModal(false)
    onReset();
  }

  const onReset = () => {
    form.resetFields();
  };


  const columns = [
    {
      dataIndex: 'title', title: '名称',
      render: (text, record) => text || record.title
    },
    { dataIndex: 'description', title: '描述' },
    {
      dataIndex: 'operation', title: '操作',
      render: (text, record, index) => {
        if (record.key === '1') {
          return (
            <Popconfirm title="确定立即执行精灵升级吗？" okText="确认" cancelText="取消" onConfirm={upgradeAction}>
              <a href="#">执行</a>
            </Popconfirm>
          )
        } else {
          return <a href="#" onClick={showModalAction}>执行</a>
        }
      }
    },
  ];

  const data = [
    {
      key: '1',
      title: '升级',
      description: "升级线程立即执行"
    },
    {
      key: '2',
      title: '匹配',
      description: "匹配线程立即执行"
    },
    {
      key: '3',
      title: '超时订单处理',
      description: "超时订单处理线程立即执行"
    },
    {
      key: '4',
      title: '自动确认收款',
      description: "自动确认收款线程立即执行"
    }
  ];


  const onGenderChange = (value) => {
    console.log(value, ' 选择 ')
  };

  return (
    <div>
      <Title level={4}>{title}</Title>
      <Table
        rowKey="id"
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Modal title="选择场次" visible={showModal} footer={null} onCancel={handleCancel} >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

          <Form.Item name="gender111" label="场次" rules={[{ required: true }]}>
            <Select
              placeholder="请选择"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout} style={{marginTop: '70px'}}>
            <Button htmlType="button" onClick={onReset} style={{marginRight: '10px'}}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )

}