import React, { useState } from 'react';
import { Typography, Table, Modal, Popconfirm, Select, Form, Button, message, Spin } from 'antd';
import promiseAjax from '@/utils/promiseAjax';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

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

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [marketingSessionData, setMarketingSessions] = useState([]);
  const [currentKey, setCurrentKey] = useState('');

  useDidMount(_ => {
    getListAction()
    // getAllJobAndRecord()
  });

  useWillUnmount(_ => {
    setMarketingSessions([])
    setShowModal(false)
    setCurrentKey('')
  });

  //获取任务列表
  function getAllJobAndRecord () {
    const apiUrl = `${getEndpoint()}/api/crud/schedule/allJobAndRecord`;
    const queryData = {}
    promiseAjax(apiUrl, queryData)
      .then(resp => {
        console.log(resp, '获取任务列表信息')
        if (resp.code === 200) {
          const data = resp.data;
          if (data.records) {
            setMarketingSessions(data.records)
          }
        } else {
          console.error('获取任务列表失败')
        }
      })
  }

  //获取场次信息
  function getListAction () {
    const apiUrl = `${getEndpoint()}/api/crud/oms/marketingSession/marketingSessions`;
    const queryData = {}
    promiseAjax(apiUrl, queryData)
      .then(resp => {
        console.log(resp, '获取场次信息')
        if (resp.code === 200) {
          const data = resp.data;
          if (data.records) {
            setMarketingSessions(data.records)
          }
        } else {
          console.error('获取场次信息失败')
        }
      })
  }

  //升级精灵
  function upgradeAction () {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/wispInstance/wispInstances/upgrade`;
    const queryData = {}
    promiseAjax(apiUrl, queryData, { method: 'POST' })
      .then(resp => {
        // console.log(resp , '升级精灵操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('升级成功')
        } else {
          message.success('升级失败')
          console.error(resp, ' 升级失败 ')
        }
      })
  }

  //匹配场次
  function marketingSessionsExecute (sessionId) {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/marketingSession/marketingSessions/execute/${sessionId}`
    const queryData = {}
    promiseAjax(apiUrl, queryData, { method: 'POST' })
      .then(resp => {
        // console.log(resp , '匹配操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('匹配成功')
          setShowModal(false)
          onReset();
        } else {
          message.error('匹配失败')
          console.error(resp, '匹配操作失败')
        }
      })
  }

  //超时订单
  function paymentTimeout (sessionId) {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/marketingSession/marketingSessions/paymentTimeout/${sessionId}`;
    const queryData = {}
    promiseAjax(apiUrl, queryData, { method: 'POST' })
      .then(resp => {
        // console.log(resp , '超时订单操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('操作成功')
          setShowModal(false)
          onReset();
        } else {
          message.error('操作失败')
          console.error(resp, '操作失败')
        }
      })
  }

  //自动确认收款
  function autoReceive (sessionId) {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/marketingSession/marketingSessions/autoReceive/${sessionId}`;
    const queryData = {}
    promiseAjax(apiUrl, queryData, { method: 'POST' })
      .then(resp => {
        // console.log(resp , '自动确认收款操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('操作成功')
          setShowModal(false)
          onReset();
        } else {
          message.error('操作失败')
          console.error(resp, '操作失败')
        }
      })
  }

  //系统号统计
  function sysNumberStatistics () {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/manager/managers/autoRecord`;
    const queryData = {}
    promiseAjax(apiUrl, queryData, {})
      .then(resp => {
        // console.log(resp , '自动确认收款操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('操作成功')
          setShowModal(false)
          onReset();
        } else {
          message.error('操作失败')
          console.error(resp, '操作失败')
        }
      })
  }


  //场次数据记录
  function marketingSessionsRecord () {
    setLoading(true)
    const apiUrl = `${getEndpoint()}/api/crud/oms/marketingSession/marketingSessions/autoRecord`;
    const queryData = {}
    promiseAjax(apiUrl, queryData, {})
      .then(resp => {
        // console.log(resp , '自动确认收款操作')
        setLoading(false)
        if (resp.code === 200) {
          // const data = resp.data;
          message.success('操作成功')
          setShowModal(false)
          onReset();
        } else {
          message.error('操作失败')
          console.error(resp, '操作失败')
        }
      })
  }



  function showModalAction (key) {
    setShowModal(true)
    setCurrentKey(key)
  }

  function handleCancel () {
    onReset()
    setShowModal(false)
  }

  function onFinish (e) {
    // console.log(e, ' 执行 ')
    switch (currentKey) {
      case "1":
        break;
      case "2":
        marketingSessionsExecute(e.sessionId)
        break;
      case "3":
        paymentTimeout(e.sessionId)
        break;
      case "4":
        autoReceive(e.sessionId)
        break;
      case "5":
        break;
      case "6":
        break;
      default:
        break;
    }
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
        } else if (record.key === '5') {
          return (
            <Popconfirm title="确定立即执行系统号统计吗？" okText="确认" cancelText="取消" onConfirm={sysNumberStatistics}>
              <a href="#">执行</a>
            </Popconfirm>
          )
        } else if (record.key === '6') {
          return (
            <Popconfirm title="确定立即执行场次数据记录吗？" okText="确认" cancelText="取消" onConfirm={marketingSessionsRecord}>
              <a href="#">执行</a>
            </Popconfirm>
          )
        }
        else {
          return <a href="#" onClick={() => showModalAction(record.key)}>执行</a>
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
    },
    {
      key: '5',
      title: '系统号统计',
      description: "系统号统计线程立即执行"
    },
    {
      key: '6',
      title: '场次数据记录',
      description: "场次数据记录线程立即执行"
    }
    ,
    {
      key: '7',
      title: '记录场次信息',
      description: "记录场次信息线程立即执行"
    }
  ];


  const onGenderChange = (value) => {
    console.log(value, ' 选择 ')
  };

  // console.log(marketingSessionData, ' 场次 ')
  return (
    <div style={{ background: '#fff', padding: '20px' }}>
      <Title level={4}>{title}</Title>

      <Spin spinning={loading}>
        <Table
          rowKey="id"
          bordered
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Spin>
      <Modal title="选择场次" visible={showModal} footer={null} onCancel={handleCancel} >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

          <Form.Item name="sessionId" label="场次" rules={[{ required: true }]}>
            <Select
              placeholder="请选择"
              onChange={onGenderChange}
              allowClear
            >
              {marketingSessionData.length > 0 && marketingSessionData.map((item, index) => <Option key={`${index}_key`} value={item.id}>{item.title}</Option>)}

            </Select>
          </Form.Item>
          <Form.Item {...tailLayout} style={{ marginTop: '70px' }}>
            <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
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