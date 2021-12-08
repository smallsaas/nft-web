import React, { useRef, useMemo, useEffect, useState } from 'react';
import { formatTableFields } from 'zero-element-antd/lib/container/List/utils/format';
import { getActionItem } from 'zero-element-antd/lib/utils/readConfig';
import { Render } from 'zero-element/lib/config/layout';
import { useWillMount } from 'zero-element/lib/utils/hooks/lifeCycle';
import TableSelect from 'zero-element-antd/lib/formItemType/TableSelect';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { message } from 'antd';

/**
 * mode
 * - append 由用户手动附加数据 作为一对多子项
 * - records 由用户从 api 中返回的数据中选取数据 作为一对多子项
 */
export default function OneMary(props) {
  const {
    name, namespace, value, options = {},
    handle,
    onChange,
    hooks = {},
    model,
    formdata,
    location
  } = props;
  const {
    API,
    childrenApi,
    layout = 'Empty',
    fields, operation, actions = [],
    props: propsCfg = {}, layoutConfig = {},
    actionLayout = 'Row',
    actionLayoutConfig = {},
    JSONString,
    map,

    value: optValue = 'id',
    pagination = false,
    rowSelection = false,
    searchFields = false,
    searchCol,
    type = 'checkbox',

    mode = API ? 'records' : 'append',

    effectField,
    saveData,
  } = options;
  const { onFormatValue, onSaveOtherValue } = handle;
  const { removeChildAfter } = hooks;
  const countRef = useRef(0);
  const effectFieldValue = useMemo(_ => {
    return countRef.current++;
  }, getValues(formdata, effectField));

  const idRef = useRef(1);
  const v = useMemo(_ => {
    if (JSONString && typeof value === 'string' && value.length) {
      return JSON.parse(value);
    }
    return value;
  }, [value])

  useWillMount(_ => {
    if (map) {
      onFormatValue(name, 'map', map);
    }
    if (JSONString) {
      onFormatValue(name, 'JSONString');
    }
  });

  useEffect(_ => {
    if (effectField) {
      handleChange();
    }
  }, [effectFieldValue]);

  function handleChangeTableData(data) {
    onChange(data);
  }

  function handleChange(selectedRows, selectedRowKeys) {
    if (saveData && selectedRows && type === 'radio') {
      const rst = {};
      const data = selectedRows[0];
      if (data) {
        Object.keys(saveData).forEach(key => {
          rst[key] = data[saveData[key]];
        });

        onSaveOtherValue(rst);
      }
    }
    onChange(selectedRows);
  }
  function handleCreate(data) {
    const rst = Array.isArray(v) ? v : [];
    rst.push({
      ...data,
      '_id': idRef.current++,
    })
    onChange([...rst]);
  }
  function handleCreateList(data) {
    if (!Array.isArray(data)) return false;

    const rst = Array.isArray(v) ? v : [];
    rst.push(...data.map(item => ({
      ...item,
      '_id': idRef.current++,
    })));
    onChange([...rst]);
  }
  
  function handleEdit(index, data) {
    if (v) {
      v[index] = data;
      onChange([...v]);
    }
  }
  
  function handleEditChild(index, data) {
    const { record } = data;
    const subData = {
      ...record,
      coachingActionId: formdata.id,
      vidoSrc: formdata.vidoSrc,
      hasData: true
    }
    const updateAPI = childrenApi.updateAPI;
    const formatApi = updateAPI.replace('(id)', record.id);

    const apiUrl = `${getEndpoint()}${formatApi}`
    promiseAjax(apiUrl, subData, { method: 'put' })
      .then(resp => {
        if (resp && resp.code === 200) {
          message.success('更新成功')
        } else {
          message.error('更新失败')
        }
      })
    
  }
  function handleRemove({ record, options = {} }) {



    if(childrenApi.deleteAPI){
      const deleteAPI = childrenApi.deleteAPI;
      const formatApi = deleteAPI.replace('(id)', record.id);
  
      const apiUrl = `${getEndpoint()}${formatApi}`
      promiseAjax(apiUrl, {}, { method: 'delete' })
        .then(resp => {
          if (resp && resp.code === 200) {
            message.success('删除成功')

            const temp = v.filter(item => {
              if (item._id !== undefined) {
                return item._id !== record._id;
              }
              return item.id !== record.id;
            });
        
            onChange([...temp]);
        
            if (typeof removeChildAfter === 'function') {
              removeChildAfter(record, props);
            }
            
          } else {
            message.error('删除失败')
          }
        })
    }
  }

  const { columns } = formatTableFields(fields, operation, {
    onRemoveChild: handleRemove,
    onEdit: handleEdit,
    onEditChild: handleEditChild
  }, {
    namespace,
    model,
  });

  return <Render n={layout} {...layoutConfig}>
    <Render n={actionLayout} {...actionLayoutConfig}>
      {actions.map((action, i) => getActionItem({
        key: i,
        ...action,
        value: v,
      }, {}, {
        onCreate: handleCreate,
        onCreateList: handleCreateList,
        onEdit: handleEdit,
      }, {
        namespace,
      }))}
    </Render>
    <TableSelect
      onChange={handleChange}

      onChangeTableData={API ? handleChangeTableData : undefined}
      mode={mode}

      namespace={namespace}
      extraData={formdata}
      forceInitList={effectFieldValue}
      data={mode === 'append' ? v : undefined}
      value={mode === 'records' ? v : undefined}
      columns={columns}
      options={{
        API,
        fields,
        type,
        pagination: pagination,
        rowSelection: rowSelection,
        searchFields,
        searchCol,
        value: optValue,
        rowKey: getKey.bind(null, optValue),
      }}
    />
  </Render>
}

function getValues(data, arr) {
  let fields;
  if (Array.isArray(arr)) {
    fields = arr;
  } else {
    fields = [arr];
  }
  return fields.map(field => data[field]);
}

function getKey(optValue, record) {
  if (record[optValue] || record[optValue] === 0) {
    return String(record[optValue]);
  }
  return record.id || record._id || record._index;
}