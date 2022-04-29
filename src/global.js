/* eslint-disable no-unused-vars */
import model from '@/models';
import zeroAntd from './zero-antd-dep';

import { history } from 'umi';
import { getModel } from 'zero-element/lib/Model';

import { set as golbalSet } from 'zero-element/lib/config/global';
import { set as APIConfig } from 'zero-element/lib/config/APIConfig';

import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { saveToken, removeToken } from 'zero-element/lib/utils/request/token';

import { set as LayoutSet } from 'zero-element/lib/config/layout';
import { set as CSet } from 'zero-element/lib/config/container';
import { set as LASet } from 'zero-element/lib/config/listAction';
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import { set as VTSet } from 'zero-element/lib/config/valueType';


// import onPath from '@/listAction/onPath';

import path from '@/actionItemType/path';
import tabs from '@/actionItemType/tabs';

import vPath from '@/valueType/path';

import { message } from 'antd';

import Content from '@/../zero-antd-dep/layout/Content';

import './rewrite.less';

//自定义组件--未使用
import Setting from '@/container/Setting';
import FieldListAdd from '@/pages/workFlowManageFR/activitiesFR/components/FieldListAdd';
import FieldModalCheckbox from '@/pages/workFlowManageFR/activitiesFR/components/FieldModalCheckbox';
import TreeSelectFetch from '@/components/TreeSelectFetch';
//自定义组件--已使用
import CSet_CustomForm from '@/components/CustomForm';
import CSet_CustomFormFR from '@/components/CustomFormFR';
import CSet_DataManageFormAdd from '@/pages/sys/activitiesCustom/config/dataManage/components/Form';
import CSet_DataReportTreeList from '@/pages/sys/dataReport/components/DataReportTreeList';
import VTSet_InputSwitch from '@/components/ValueType/InputSwitch';
import FITSet_group_title from '@/components/FormItemType/Group';
import FITSet_dynamic_radio from '@/components/FormItemType/DynamicRadio';
import FITSet_local_radio from '@/components/FormItemType/LocalRadio';
import FITSet_modal_radio from '@/components/FormItemType/ModalRadio';
import FITSet_Perm from '@/formItemType/Perm';

import FITSet_UploadImageCard from '@/formItemType/UploadImageCard';
import FITSet_Agree_Agreement from '@/formItemType/AgreeAgreement'
import FITSet_Fetch_Commit from '@/components/FormItemType/fetchCommit'
import Dictionary from '@/container/Dictionary';
import FITSet_upload_file_single from '@/components/FormItemType/UploadFileSingle';
import FITSet_download_file from '@/components/FormItemType/DownloadFile';
import FITSet_normal_download_file from '@/components/FormItemType/NormalDownloadFile';
import CSet_activity_fields_form from '@/components/ActivityFieldsForm';
import CSet_print_config_form from '@/components/PrintConfigForm';
import FITSet_field_table from '@/pages/workFlowManageFR/activitiesFR/components/FieldTable';
import CSet_load_html_page from '@/components/LoadHtmlPage';
import AITSet_export_file from '@/actionItemType/ExportFile';
import FITSet_input_box from '@/components/FormItemType/InputBox';
import FITSet_invitation_code_compx from '@/components/FormItemType/InvitationCodeCompx';
import FITSet_link_button from '@/components/FormItemType/LinkButton';
import VTSet_TimeConvert from '@/components/ValueType/TimeConvert';
import VTSet_SecoundToHms from '@/components/ValueType/SecoundToHms';
import FITSet_InputFetch from '@/components/FormItemType/InputFetch';
import FITSet_TimeSelection from '@/components/FormItemType/TimeSelection';
import FITSet_InputNumAndUnit from '@/components/FormItemType/InputNumAndUnit';
import FITSet_PlainNumAndUnit from '@/components/FormItemType/PlainNumAndUnit';
import FITSet_PlainTag from '@/components/FormItemType/PlainTag';
import FITSet_TimeSelectionAndDisaible from '@/components/FormItemType/TimeSelectionAndDisaible';
import CSet_ChildrenFormFetch from '@/components/Container/Form/ChildrenFormFetch';
import FITSet_CustomOneMary from '@/components/FormItemType/CustomOneMary';
import CSet_ErrorLayout from '@/components/Container/ErrorLayout';
import FITSet_PrescriptionItemStatus from '@/components/FormItemType/PrescriptionItemStatus';
import FITSet_ConfigItemsCheckboxFetch from '@/formItemType/ConfigItemsCheckboxFetch';
//nft组件
import CodeBtn from '@/components/SchemaGeneratorPage/components/btn/codebtn'
// import Select from '@/components/SchemaGeneratorPage/components/select/select'
import ImgUpload from '@/components/SchemaGeneratorPage/components/imgupload/imgupload'
import Text from '@/components/SchemaGeneratorPage/components/text/text'
import Img from '@/components/SchemaGeneratorPage/components/img/img'
import ValueInput from '@/components/SchemaGeneratorPage/components/valueinput/valueinput'
import Approved from '@/components/SchemaGeneratorPage/components/approved/approved'
import Unseal from '@/components/SchemaGeneratorPage/components/unseal/unseal'
import AutomaticDelivery from '@/components/SchemaGeneratorPage/components/automaticdelivery/automaticdelivery'
import TimeInput from '@/components/SchemaGeneratorPage/components/timeinput/timeinput'
import Radio from '@/components/SchemaGeneratorPage/components/radio/radio'
import SelectTwo from '@/components/SchemaGeneratorPage/components/selecttwo/selecttwo'
import HandApply from '@/components/SchemaGeneratorPage/components/handapply/handapply'

import ValueInputTwo from '@/components/SchemaGeneratorPage/components/valueinputtwo/valueinputtwo'
import ValueInputThree from '@/components/SchemaGeneratorPage/components/valueinputthree/valueinputthree'
import ValueInputFour from '@/components/SchemaGeneratorPage/components/valueinputfour/valueinputfour'

import GetValue from '@/components/SchemaGeneratorPage/components/getvalue/getvalue'

import CSet_Table_test from '@/container/List/Table';


import VTSet_PlainPopover from '@/components/ValueType/PlainPopover';
import VTSet_Timeformat from '@/components/SchemaGeneratorPage/components/TimeFormat/timeformat'

//listAction
import AITSet_RedirectPath from '@/listAction/onRedirectPath'

//Test
import CSet_new_tree_list from '@/components/TList';

//配置 
import { Config } from './devConfig'
const globalModel = getModel('global');

APIConfig({
  'DEFAULT_current': 1,
  'DEFAULT_pageSize': 10,

  'REQUEST_FIELD_current': 'pageNum',
  'REQUEST_FIELD_pageSize': 'pageSize',
  'REQUEST_FIELD_field': 'orderBy',
  'REQUEST_FIELD_order': 'sort',
  'REQUEST_FIELD_ascend': 'ASC',
  'REQUEST_FIELD_descend': 'DESC',

  'RESPONSE_FIELD_current': 'current',
  'RESPONSE_FIELD_pageSize': 'size',
  'RESPONSE_FIELD_total': 'total',
  'RESPONSE_FIELD_records': 'records',
});
golbalSet({
  router: (path) => {
    history.push(path);
  },
  goBack: () => {
    history.goBack();
  },
  Unauthorized: (data) => {
    // console.log(`Unauthorized data = `, data);
    removeToken();
    history.push('/401');
  },
  getPerm () {
    return globalModel.getPerm();
  },
  RequestError: ({ data = {} }) => {
    // console.log(`error data = `, data);
    if (data.errors && data.errors.length) {
      data.errors.forEach(msg => {
        message.error(JSON.stringify(msg));
      })
    } else {
      if (data.status === 403) {
        history.push('/403');
      } else {
        message.error(data.message || '无法连接服务器');
      }
    }
  },
});

/** 
 * @开发环境配置
 * @关于Config配置 配置来源 src/devConfig.js > endpoint 项
 * @优先级 src/devConfig.js 中 endpoint 高于 public/config.js 中 window.ZEle.endpoint
 * @说明 此地方不设置生产环境endpoint设置 默认为public/config.js 中的 window.ZEle.endpoint 值
*/

if (process.env.NODE_ENV === 'development') {
  // # $ cat /c/Windows/System32/drivers/etc/hosts
  // # 192.168.3.239:8090 demo.smallsaas.cn:8080
  // setEndpoint('http://cn1.utools.club:58116');
  setEndpoint(Config.endpoint);
  // setEndpoint('http://localhost:8080');
  // saveToken({
  //   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjE4IiwidXNlcklkIjoiNiIsInRlbmFudE9yZ0lkIjoxOCwiYWNjb3VudCI6ImFkbWluIiwidXNlclR5cGUiOjAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NDk4MjAwOTgsImp0aSI6IjYiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MDA3OTI5OH0.oX7TMmjFRFL1GFyhY3-2j-Y9QND1i9AWKwfUcRW9Gs6OsLpQJ24pjha0QpMjGDr9AHubyX0ViJ1Se2eDg_BoOA',
  // });
} else {
  // setEndpoint('http://localhost:8080');
  // setEndpoint(Config.endpoint);  //取消注释后为devConfig.js中值
}

LayoutSet({
  Content,
});

CSet({
  'custom_form': CSet_CustomForm,
  'Setting': Setting,
  'custom_form_fr': CSet_CustomFormFR,
  'Dictionary': Dictionary,
  'data_manage_form_add': CSet_DataManageFormAdd,
  'activity_fields_form': CSet_activity_fields_form,
  'print_config_form': CSet_print_config_form,
  'data_report_tree_list': CSet_DataReportTreeList,
  'LoadHtmlPage': CSet_load_html_page,
  'NewTreeList': CSet_new_tree_list,
  'children_form_fetch': CSet_ChildrenFormFetch,
  'ErrorLayout': CSet_ErrorLayout,
  'Table_test': CSet_Table_test,
});

//添加列表操作按钮
LASet({
  // 'onPath': onPath,
  'onExportFile': AITSet_export_file,
  'onRedirectPath': AITSet_RedirectPath
});

//表单组件
FITSet({
  'upload-image-card': FITSet_UploadImageCard,
  'agree-agreement': FITSet_Agree_Agreement,
  'perm': FITSet_Perm,
  'FieldListAdd': FieldListAdd,
  'FieldModalCheckbox': FieldModalCheckbox,
  'tree-select-fetch': TreeSelectFetch,
  'group-title': FITSet_group_title,
  'dynamic_radio': FITSet_dynamic_radio,
  'local_radio': FITSet_local_radio,
  'local_modal_radio': FITSet_modal_radio,
  'upload_file_single': FITSet_upload_file_single,
  'field_table': FITSet_field_table,
  'download_file_btn': FITSet_download_file,
  'normal_download_file': FITSet_normal_download_file,
  'inputBox': FITSet_input_box,
  'invitationCodeCompx': FITSet_invitation_code_compx,
  'LinkButton': FITSet_link_button,
  'inputFetch': FITSet_InputFetch,
  'secound_to_hms': VTSet_SecoundToHms,
  'time-convert': VTSet_TimeConvert,
  'time_selection': FITSet_TimeSelection,
  'input_num_and_unit': FITSet_InputNumAndUnit,
  'plain_num_and_unit': FITSet_PlainNumAndUnit,
  'plain_tag': FITSet_PlainTag,
  'time_selection_and_disaible': FITSet_TimeSelectionAndDisaible,
  'custom_one_mary': FITSet_CustomOneMary,
  //nft
  'codebtn': CodeBtn,
  // 'select':Select,
  'imgupload': ImgUpload,
  'text': Text,
  'img': Img,
  'valueinput': ValueInput,
  'approved': Approved,
  'unseal': Unseal,
  'automaticdelivery': AutomaticDelivery,
  'timeinput': TimeInput,
  'Radio': Radio,
  'selecttwo': SelectTwo,
  'handapply': HandApply,
  'getvalue': GetValue,
  'valueinputtwo': ValueInputTwo,
  'config_items_checkbox_fetch': FITSet_ConfigItemsCheckboxFetch,
  "fetch_commit": FITSet_Fetch_Commit
});

AITSet({
  path,
  tabs
});

//列表 & 详情
VTSet({
  'path': vPath,
  'input-switch': VTSet_InputSwitch,
  'time-convert': VTSet_TimeConvert,
  'secound_to_hms': VTSet_SecoundToHms,
  'time_selection': FITSet_TimeSelection,
  'input_num_and_unit': FITSet_InputNumAndUnit,
  'plain_num_and_unit': FITSet_PlainNumAndUnit,
  'time_selection_and_disaible': FITSet_TimeSelectionAndDisaible,
  'prescription_item_status': FITSet_PrescriptionItemStatus,
  'getvalue': GetValue,
  'valueinput': ValueInput,
  'valueinputtwo': ValueInputTwo,
  'valueinputthree': ValueInputThree,
  'valueinputfour': ValueInputFour,
  'plain_popover': VTSet_PlainPopover,
  'Time_format': VTSet_Timeformat
});
