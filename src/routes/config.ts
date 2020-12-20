/**
 * 一级路由配置页面
 */

import { TRoute } from '@typings/route';
// 引入页面
import Home from '@pages/home/index';
import homeRouteConfig from './home';

const routeConfig: TRoute.TRouteConfig = [
    {
        key: 'Home',
        path: '/',
        component: Home,
        children: homeRouteConfig,
    },
];

/**
 * 默认一级路由
 */
export const defaultPath = '/';

export default routeConfig;
