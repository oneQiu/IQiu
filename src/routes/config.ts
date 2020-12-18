/**
 * 一级路由配置页面
 */

import { TRoute } from '@typings/route';
// 引入页面
import Index from '@pages/home/index';
import homeRouteConfig from './home';

const routeConfig: TRoute.TRouteConfig = [
    {
        key: 'Index',
        path: '/',
        exact: true,
        component: Index,
        children: homeRouteConfig,
    },
];

export default routeConfig;
