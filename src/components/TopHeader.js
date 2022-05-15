import React, {useState} from "react";

import {Layout, Dropdown, Avatar, Menu} from 'antd'
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {Header} = Layout
const {Item} = Menu

export default function TopHeader() {
    // 函数组件本身没有状态，使用hooks注入状态
    const [collapse, setCollapse] = useState(false)
    const handleChangeCollapse = () => {
        setCollapse(!collapse)
    }
    const dropdownMenu = (
        <Menu>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </Menu>
    )
    return (
        <Header
            className="site-layout-background"
            style={{padding: '0px 16px'}}>
            {/*折叠icon*/}
            {collapse ?
                <MenuFoldOutlined onClick={handleChangeCollapse}/> :
                <MenuUnfoldOutlined onClick={handleChangeCollapse}/>}
            {/*右侧user信息*/}
            <div style={{float: 'right'}}>
                <span>Welcome, Admin</span>
                <Dropdown overlay={dropdownMenu}>
                    <Avatar></Avatar>
                </Dropdown>
            </div>
        </Header>
    )
}