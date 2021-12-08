import React, { useRef, useMemo, useState } from 'react';
import { Form } from 'antd';
import qs from 'qs';
import { formatAPI } from 'zero-element/lib/utils/format';
import useBaseForm from 'zero-element/lib/helper/form/useBaseForm';
import { useDidMount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { Spin, Button } from 'antd';
import { getFormItem } from 'zero-element-antd/lib/utils/readConfig';
import { Render } from 'zero-element/lib/config/layout';
import global from 'zero-element/lib/config/global';
import useFormHandle from 'zero-element-antd/lib/container/Form/utils/useFormHandle';

export default function ChildrenFormFetch(props) {
  const [form] = Form.useForm();

  const forceUpdate = useForceUpdate();
  const { namespace, config, index, onClose, onSubmit } = props;
  const {
    API = {},
    layout = 'Empty', layoutConfig = {},
    fields,
    requestOptions,
  } = config;
  const { layoutType = 'inline' } = layoutConfig;
  const formProps = useBaseForm({
    namespace,
    modelPath: 'formData',
  }, config);

  const {
    onFormatValue,
    handleFormatValue,
    onSaveOtherValue,
    onValuesChange,
    onExpect,
  } = useFormHandle(form, {
    namespace,
    config,
  });

  const { router, goBack } = global;

  const { loading, data, model, handle } = formProps;
  const initData = useRef(props.data || {});
  const { onGetOne, onCreateForm, onUpdateForm, onClearForm } = handle;
  const [destroy, setDestroy] = useState(false);

  const [ currentId, setCurrentId ] = useState('');
  const [ currentVideoSrc, setCurrentVideoSrc ] = useState('');

  // useMemo(recordDefaultValue, [fields]);
  useDidMount(_ => {
    const { id, vidoSrc } = data;
    setCurrentId(id);
    setCurrentVideoSrc(vidoSrc);
    if (API.getAPI) {
      setDestroy(true);
      onGetOne({}).then(({ code, data }) => {
        if (code === 200) {
          initData.current = data;
          forceUpdate();
        }
      })
        .finally(_ => setDestroy(false))
    }
    recordDefaultValue();
  });

  

  function recordDefaultValue() {
    fields.forEach(item => {
      const { field, value } = item;
      if (value !== undefined && initData.current[field] === undefined) {
        initData.current[field] = value;
      }
    });
    form.setFieldsValue({ ...initData.current });
    forceUpdate();
  }
  function handleSubmitForm(values) {
    const submitData = {
      ...values,
    };
    
    handleFormatValue(submitData);
    
    submitData.coachingActionId = currentId;
    submitData.vidoSrc = currentVideoSrc;
    submitData.hasData = true;
    if(onSubmit){
      if(API.createAPI){
        onCreateForm({
          fields: submitData,
          options: requestOptions,
        }).then((e)=>{
          submitData.id = e.data || e.id;
          onSubmit(submitData);
          if (onClose) {
            onClose(e);
          }
        });
      }
    }

    // if(API.updateAPI){
    //   onUpdateForm({
    //     fields: submitData,
    //     options: requestOptions,
    //   }).then((e)=>{
    //     // onSubmit(index, submitData);
    //     if (onClose) {
    //       onClose(e);
    //     }
    //   });
    // }

    // window.location.href = ''

    // if (onSubmit) {
    //   if (index !== undefined) {
    //     // 一对多的编辑
    //     onSubmit(index, submitData);
    //   } else {
    //     // 一对多的新增
    //     onSubmit(submitData);
    //   }
    //   if (onClose) {
    //     onClose();
    //   }
    //   return false;
    // }
  }

  function handleReset() {
    form.resetFields();
  }
  function renderFooter() {
    function onSubmit() {
      form.submit();
    }
    return <div className="ant-modal-footer">
      <Button onClick={handleReset}>重置</Button>
      <Button type="primary" htmlType="submit" onClick={onSubmit}>保存</Button>
    </div>
  }

  return <Spin spinning={loading}>
    <div className={fields.length ? 'ant-modal-body' : undefined}>
      {destroy ? null : (
        <Form
          form={form}
          layout={layoutType}
          initialValues={initData.current}
          onValuesChange={onValuesChange}
          onFinish={handleSubmitForm}
        >
          <Render n={layout} {...layoutConfig}>
            {fields.map(field => getFormItem(field, model, {
              namespace,
              form,
              // vailFormData: form.getFieldsValue(),
              childformdata: model.record,
              handle: {
                onFormatValue,
                onSaveOtherValue,
                onExpect,
              },
            }))}
          </Render>
        </Form>
      )}
    </div>
    {renderFooter()}
  </Spin>
}