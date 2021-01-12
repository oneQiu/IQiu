/**
 * 一级路由配置页面
 */

import { TRoute } from '@typings/route';
// 引入页面
// import Home from '@pages/home/index';
import Default from '@/pages/home/default';
// import homeRouteConfig from './home';
import { defaultPath } from '@configs/index';
import { lazy } from 'react';

const Setting = lazy(() => import('@pages/home/setting'));
const User = lazy(() => import('@pages/home/user'));
const Music = lazy(() => import('@pages/home/music'));

const routeConfig: TRoute.TRouteConfig = [
    {
        key: 'Index',
        path: '/',
        exact: true,
        component: Default,
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
    {
        key: 'User',
        path: '/user',
        component: User,
        children: [
            {
                key: 'User_A',
                path: '/user/A',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '测试雷声大',
                    disabled: true,
                },
            },
            {
                key: 'User_B',
                path: '/user/B',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: 'asd2',
                },
            },
        ],
        sidebarOpts: {
            iconType: 'icon-yonghuming',
            menuText: '用户',
        },
    },
    {
        key: 'Setting',
        path: '/setting',
        component: Setting,
        sidebarOpts: {
            iconType: 'icon-iconguifanbeifen',
            menuText: '设置',
        },
        children: [
            {
                key: 'Setting_A',
                path: '/setting/A',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '12312',
                },
            },
            {
                key: 'Setting_B',
                path: '/setting/B',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '44',
                },
            },
        ],
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
