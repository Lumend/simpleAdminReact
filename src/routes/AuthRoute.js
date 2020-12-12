/**
 * 作者：小耿学前端
 * 链接：https://juejin.cn/post/6857055615739985933
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const AuthRoute = (props) => {
    const userRole = "user";
    const {
        role: routeRole,
        backUrl,
        ...otherProps
    } = props;

    if (!routeRole || (userRole && userRole.indexOf(routeRole) > -1)) {
        // 如果用户有权限，就渲染对应的路由
        return <Route {...otherProps} />
    } else {
        // 如果没有权限，返回配置的默认路由
        console.warn('没有权限');
        return <Redirect to={backUrl || '/auth'} />
    }

}

export default AuthRoute;
