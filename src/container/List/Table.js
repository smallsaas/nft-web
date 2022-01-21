import React from 'react';
import { Table } from 'antd';
import { Render } from 'zero-element/lib/config/layout';
import useListHandle from 'zero-element-antd/lib/container/List/utils/useListHandle';
import tableFooter from 'zero-element-antd/lib/container/List/components/TableFooter';
import canPortal from 'zero-element-antd/lib/utils/canPortal';

export default function BaseTable(props) {
  const { namespace, config, extraData, extraEl } = props;
  const {
    layout = 'Empty', layoutConfig = {},
    props: propsCfg = {},
  } = config;

  const [
    tableProps, tableData, handle, actionsItems,
    {
      operationData,
      renderBatchOperation,
    }
  ] = useListHandle({
    namespace,
    extraData,
    config,

    props,
  });

  function handleRowClassName(record) {
    if (record.id && operationData.id === record.id) {
      return 'ZEleA-table-selected';
    }
  }

  function footerContent () {
    return (
      <>
      <div>转入: 0元</div>
      <div>转出: 0元</div>
      <div>总金额: 0元</div>
      </>
    )
  }

  console.log('props.data = ', props.data)
  console.log('tableData = ', tableData)

  return <Render n={layout} {...layoutConfig}
    handle={handle}
    namespace={namespace}
  >
    {canPortal(extraEl, <>
      <Render n={'Row'}>
        {renderBatchOperation()}
        {actionsItems}
      </Render>
    </>)}
    <Table
      rowKey="id"
      size="middle"
      rowClassName={handleRowClassName}
      dataSource={props.data || tableData}
      showSorterTooltip={false}
      {...tableProps}
      {...propsCfg}
      footer={
        footerContent
      }
    />
  </Render>
}