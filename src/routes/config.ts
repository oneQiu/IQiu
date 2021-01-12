/**
 * 一级路由配置页面
 */
import { lazy } from 'react';
import { TRoute } from '@typings/route';
import { defaultPath } from '@configs/index';
import UserConfig from './user';
import SetterConfig from './setter';
// 引入页面
import Home from '@pages/home';

const Music = lazy(() => import('@pages/music'));

const routeConfig: TRoute.TRouteConfig = [
    {
        key: 'Home',
        path: '/',
        exact: true,
        component: Home,
        sidebarOpts: {
            iconType: 'icon-shouye',
            menuText: '首页',
        },
    },
    {
        key: 'Muisc',
        path: '/music',
        component: Music,
        sidebarOpts: {
            iconType: 'icon-yinle',
            menuText: '音乐',
        },
    },
    UserConfig,
    SetterConfig,
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
