import Index from 'zero-element-antd/lib/valueType/index';
// import Video from 'zero-element-antd/lib/valueType/Video';
import Plain from 'zero-element-antd/lib/valueType/plain';
import Join from 'zero-element-antd/lib/valueType/join';
import Map from 'zero-element-antd/lib/valueType/map';
import Tag from 'zero-element-antd/lib/valueType/tag';
// import Image from 'zero-element-antd/lib/valueType/image';
// import Thumb from 'zero-element-antd/lib/valueType/thumb';
// import Dot from 'zero-element-antd/lib/valueType/dot';
// import Currency from 'zero-element-antd/lib/valueType/currency';
// import Percentage from 'zero-element-antd/lib/valueType/percentage';
// import Url from 'zero-element-antd/lib/valueType/url';
// import Download from 'zero-element-antd/lib/valueType/download';
// import Ellipsis from 'zero-element-antd/lib/valueType/ellipsis';
// import Complex from 'zero-element-antd/lib/valueType/complex';
// import CountDown from 'zero-element-antd/lib/valueType/countDown';
// import InputNumber from 'zero-element-antd/lib/valueType/inputNumber';
// import InputText from 'zero-element-antd/lib/valueType/inputText';
// import InputSelect from 'zero-element-antd/lib/valueType/inputSelect';
// import InputSelectFetch from 'zero-element-antd/lib/valueType/inputSelectFetch';

export default {
    records: [
        { 
            id: 1, 
            label: 'index', 
            compx: Index, 
            type: '-',
            value: { 
                model: { 
                    listData:{ 
                        current: 1, 
                        pageSize: 10
                    }
                }, 
                data: { 
                    index: 1
                }
            },
            jsonFormat: '{ \n "label": "index",  \n "field": "Code",  \n "valueType": "index" \n }',
            describe: '索引'
        },
        { 
            id: 2, 
            label: 'plain', 
            compx: Plain, 
            type: 'string / number',
            value: { 
                data: { 
                    text: 'plain' 
                } 
            },
            jsonFormat: '{ \n "label": "plain",  \n "field": "Code",  \n "valueType": "plain" \n }',
            describe: ''
        },
        // { 
        //     id: 3, 
        //     label: 'video', 
        //     compx: Video, 
        //     value: { 
        //         data: { 
        //             text: '' 
        //         } 
        //     } 
        // },
        
        { 
            id: 4, 
            label: 'join', 
            compx: Join, 
            type: 'string / array',
            value: { 
                data: { 
                    text: ['join-1', 'join-2'] 
                } 
            },
            jsonFormat: '{ \n "label": "join",  \n "field": "Code",  \n "valueType": "join" \n }',
            describe: ''
        },

        { 
            id: 5, 
            label: 'map', 
            compx: Map, 
            type: 'object',
            value: { 
                options: {
                    map:{
                        "0":"否",
                        "1":"是" 
                    },
                },
                data: {
                    text: '-'
                }
            },
            jsonFormat: '{ \n "label": "map",  \n "field": "Code",  \n "valueType": "map", \n "options": { "0":"否", "1":"是" }\n }',
            describe: ''
        },
    ]
}