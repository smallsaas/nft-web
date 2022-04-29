/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { Button, Table, Tabs, Spin } from 'antd';
import ZEle from 'zero-element';
import config from './config';
import global from 'zero-element/lib/config/global';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBreadcrumb from '@/framework/useBreadcrumb';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

//会员级别
const levelMap = {
    "-1": "注册会员",
    "0": "激活",
    "10": "有效会员",
    "20": "普通会员",
    "1": "青铜有效会员",
    "2": "白银有效会员",
    "3": "黄金有效会员",
    "4": "钻石有效会员"
}

//状态
const statusMap = {
    "NORMAL": "正常",
    "FROZEN": "冻结",
    "REFUSED": "审核不通过",
    "PENDING": "待审核"
}

export default (props) => {

    const { location } = props;

    const { goBack } = global;

    const { TabPane } = Tabs;
    const [currentId, setCurrentId] = useState('')
    const [titleList, setTitleList] = useState('')
    const [listData, setListData] = useState('')
    const [currentKey, setCurrentKey] = useState('')
    const [loading, setLoading] = useState(false)

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '玩家管理', path: '/usermanage' },
        { title: '玩家', path: '/usermanage/newaccount' },
        { title: '查看直推团队' },
    ]);


    useDidMount(_ => {

        const searchList = location.search.split('=');
        const id = searchList[1];
        initUserData(id)
        
    })

    //获取玩家信息
    function initUserData(id) {
        const api = '/api/crud/oms/player/players/(id)';
        const formatApi = api.replace('(id)', id);
        const apiUrl = `${getEndpoint()}${formatApi}`
        let data;
        promiseAjax(apiUrl)
            .then(resp => {
                if (resp && resp.code === 200) {
                    data = resp.data
                    setCurrentKey(data.id+'')
                    setTitleList([{ id: data.id, name: data.name }])
                } else {
                    console.log('获取玩家数据失败 === ', resp)
                }
            })
            .finally(_=>{
                getChildrenById(data.id)
            })
    }

    //获取直推列表
    function getChildrenById(id) {
        setLoading(true)
        const api = '/api/crud/oms/player/profit/queryTeamReturnTreeChildren/(id)';
        const formatApi = api.replace('(id)', id);
        const apiUrl = `${getEndpoint()}${formatApi}`
        promiseAjax(apiUrl)
            .then(resp => {
                if (resp && resp.code === 200) {
                    const data = resp.data;
                    setListData(data)
                } else {
                    console.log('获取数据失败 === ', resp)
                }
            })
            .finally(_=>{
                setLoading(false)
            })
    }

    function handleGoBack() {
        goBack()
    }

    const columns = [
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            width: '120px',
            render: (text, item) => {
                if(item.recommendCount >= 1){
                    return <a href='#' onClick={() => showNextTeam(item)}>{text}</a>
                }else{
                    return text
                }
            },
        },
        {
            title: '手机号',
            dataIndex: 'mobilePhone',
            key: 'mobilePhone',
            width: '120px',
        },
        {
            title: '会员级别',
            dataIndex: 'level',
            key: 'level',
            width: '120px',
            render: (text, item) => {
                return levelMap[text]
            },
        },
        {
            title: '直推人数',
            dataIndex: 'recommendCount',
            key: 'recommendCount',
            width: '120px',
        },
        {
            title: '团队人数',
            dataIndex: 'teamSize',
            key: 'teamSize',
            width: '120px',
        },
        {
            title: '状态',
            dataIndex: 'level',
            key: 'level',
            width: '120px',
            render: (text, item) => {
                return statusMap[text]
            },
        },
    ];

    //添加table item 获取直推
    function showNextTeam(currentTtem){
        if(currentTtem.recommendCount >= 1){
            const nItem = {
                id: currentTtem.id,
                name: currentTtem.name
            }
            titleList.push(nItem)
            // titleList.map((item, index) => {
            //     if (index != titleList.length - 1) {
            //         item.arrow = ' > '
            //     }
            //     return item
            // })
            titleList.map((item, index) => {
                if(currentTtem.id == item.id){
                    setCurrentKey(currentTtem.id+'')
                }
            })
            setTitleList(titleList)
            getChildrenById(currentTtem.id)
        }
    }

    //点击导航获取直推
    function showCurrentTeam(cId){
        const newTitles = []
        for (let i = 0; i < titleList.length; i++) {
            newTitles.push(titleList[i])
            if (titleList[i].id == cId) {
                setCurrentKey(cId+'')
                // newTitles[i].arrow = ''
                break
            }
        }
        setTitleList(newTitles)
        getChildrenById(cId)
    }

    function TreeData() {
        return (
            <div style={{ margin: '0 16px' }}>
                <Table
                    columns={columns}
                    dataSource={listData}
                    pagination={false}
                    defaultExpandAllRows={true}
                />
            </div>
        );
    }
    
    return (
        <div className="ZEleA-Layout-Content" style={{ padding: '16px 0 0 0', marginBottom: '0' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottom: '1px solid #666',
                padding: '0 0 12px 0',
                margin: '0 16px 0 16px'
            }}>
                <div style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '1.5em', fontWeight: 500 }}>
                    查看直推团队
                </div>
                <Button onClick={handleGoBack}>返回</Button>
            </div>
            {/* <ZEle namespace="player_children_team" config={config} /> */}

            <Spin spinning={loading }>
            <Tabs
                activeKey= {currentKey}
                tabPosition={'top'}
                style={{ margin: '0 16px 0 16px' }}
                size={'large'}
                onTabClick={(e) => showCurrentTeam(e)}
            >
                {titleList && titleList.map(i => (
                    <TabPane tab={`${i.name}`} key={`${i.id}`}>
                        <TreeData />
                    </TabPane>
                ))}
            </Tabs>
            </Spin>

        </div>
    )
}
