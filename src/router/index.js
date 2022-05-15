import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from "../views/Login/Login";
import NewsSandbox from "../views/NewsSandbox/NewsSandbox";

/*
* router@6中Switch更名为Routes
* */
function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/login'} component={Login}></Route>
                {/*判断是否授权，决定路由跳转*/}
                <Route
                    path={'/'}
                    render={() =>
                        localStorage.getItem('token') ?
                            (<NewsSandbox/>) : (<Redirect to={'/login'}/>)
                    }>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router