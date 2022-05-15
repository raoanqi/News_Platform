import React from 'react'

import {Layout, Menu} from 'antd'
import {
    HomeOutlined
} from '@ant-design/icons'

const {Sider} = Layout
const {Item} = Menu

export default function SideMenu() {
    return (
        <Sider trigger={null} collapsible>
            <Menu
                theme={'dark'}
                mode={'inline'}
                defaultSelectedKeys={[1]}>
                <Item
                    key={1}
                    icon={<HomeOutlined/>}>
                    Home
                </Item>
                <Item
                    key={2}
                    icon={<HomeOutlined/>}>
                    News
                </Item>
            </Menu>
        </Sider>)
}

