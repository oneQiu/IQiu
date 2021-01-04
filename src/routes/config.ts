/**
 * 一级路由配置页面
 */

import { TRoute } from '@typings/route';
// 引入页面
import Home from '@pages/home/index';
import homeRouteConfig from './home';
import { defaultPath } from '@configs/index';

const routeConfig: TRoute.TRouteConfig = [
    {
        key: 'Home',
        path: '/home',
        component: Home,
        children: homeRouteConfig,
    },
    {
        key: 'Default',
        redirct: {
            path: '/',
            exact: true,
            to: defaultPath,
        },
    },
];

export default routeConfig;
