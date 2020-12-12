/**
 * 公司管理路由
 * path: "/account/admin",
 * component: Admin,
 * role: 'user',       // 当前路由需要的角色权限
 * backUrl: '/login'   // 不满足权限跳转的路由
 */

import Admin from '../pages/account/Admin';
import Control from '../pages/account/Control';

const company = [
    {
        path: "/account/admin",
        component: Admin,
        role: 'user',       // 当前路由需要的角色权限
    },
    {
        path: "/account/control",
        component: Control,
        role: 'ccc',
    },
];

export default company;