import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import axios from "axios";
import './index.css'

import {Layout, Menu} from 'antd'
import {
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons'

const {Sider} = Layout
const {Item, SubMenu} = Menu

const iconListMap = {
    '/home': <HomeOutlined/>,
    '/user-manage': <UserOutlined/>,
    '/user-manage/list': <HomeOutlined/>,
    '/right-manage': <UserOutlined/>,
    '/right-manage/role/list': <HomeOutlined/>,
    '/right-manage/right/list': <HomeOutlined/>,
    '/news-manage': <UserOutlined/>,
    '/news-manage/add': <HomeOutlined/>,
    '/news-manage/draft': <HomeOutlined/>,
    '/news-manage/category': <HomeOutlined/>,
    '/audit-manage': <UserOutlined/>,
    '/audit-manage/audit': <HomeOutlined/>,
    '/audit-manage/list': <HomeOutlined/>,
    '/publish-manage': <UserOutlined/>,
    '/publish-manage/unpublished': <HomeOutlined/>,
    '/publish-manage/published': <HomeOutlined/>,
    '/publish-manage/sunset': <HomeOutlined/>,
}

function SideMenu(props) {
    const [menuList, setMenuList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/rights?_embed=children').then(res => {
            console.log(res.data)
            setMenuList(res.data)
        })
    }, [])

    // 记录当前激活的菜单
    const selectedKeys = [props.location.pathname]

    // 记录当前应该展开的一级菜单
    const openKeys = ['/' + props.location.pathname.split('/')[1]]

    const checkPermission = (item) => {
        // pagepermisson为1代表为页面权限
        return item.pagepermisson === 1
    }

    const renderMenu = (menuList) => {
        return (
            menuList.map(item => {
                if (item.children?.length && checkPermission(item)) {
                    // 遇到submenu使用递归进行渲染
                    return <SubMenu
                        key={item.key}
                        icon={iconListMap[item.key]}
                        title={item.title}>
                        {renderMenu(item.children)}
                    </SubMenu>
                } else {
                    return checkPermission(item) && <Item
                        key={item.key}
                        icon={iconListMap[item.key]}
                        onClick={() => props.history.push(item.key)}>
                        {item.title}
                    </Item>
                }
            })
        )
    }

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={false}>
            <div style={{display: 'flex', height: '100%', 'flexDirection': 'column'}}>
                <div className={'logo'}>
                    新闻管理系统
                </div>
                {/*菜单高度撑开出现滚动条之后，确保只有菜单项出现滚动条*/}
                <Menu
                    theme={'dark'}
                    mode={'inline'}
                    selectedKeys={selectedKeys}
                    defaultOpenKeys={openKeys}
                    style={{flex: 1, overflow: 'auto'}}>
                    {renderMenu(menuList)}
                </Menu>
            </div>
        </Sider>
    )
}

export default withRouter(SideMenu)

