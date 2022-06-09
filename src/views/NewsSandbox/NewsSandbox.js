import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom";

import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import Home from "./Home/Home";
import UserList from "./UserManage/UserList"
import RoleList from "./RightManage/RoleList"
import RightList from "./RightManage/RightList"
import NoPermission from './NoPermission/NoPermission'

import './NewsSandbox.css'

import {Layout} from 'antd'

const {Content} = Layout

export default function NewsSandbox() {
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}>
                    {/*这里没有顺利挂载*/}
                    <Switch>
                        <Route path={'/home'} component={Home}></Route>
                        <Route path={'/user-manage/list'} component={UserList}></Route>
                        <Route path={'/right-manage/role/list'} component={RoleList}></Route>
                        <Route path={'/right-manage/right/list'} component={RightList}></Route>
                        <Redirect from={'/'} to={'/home'} exact></Redirect>
                        <Route path={'*'} component={NoPermission}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}