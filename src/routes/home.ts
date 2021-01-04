// 子路由
import { TRoute } from '@typings/route';
import { lazy } from 'react';
import Default from '@/pages/home/default';

const Setting = lazy(() => import('@pages/home/setting'));
const User = lazy(() => import('@pages/home/user'));
const Music = lazy(() => import('@pages/home/music'));

const homeRouteConfig: TRoute.TRouteConfig = [
    {
        key: 'Home_Index',
        path: '/home',
        exact: true,
        component: Default,
        sidebarOpts: {
            iconType: 'icon-shouye',
            menuText: '首页',
        },
    },
    {
        key: 'Home_Muisc',
        path: '/home/music',
        component: Music,
        sidebarOpts: {
            iconType: 'icon-yinle',
            menuText: '音乐',
        },
    },
    {
        key: 'Home_User',
        path: '/home/user',
        component: User,
        children: [
            {
                key: 'Home_User_A',
                path: '/home/user/A',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '测试雷声大',
                    disabled: true,
                },
            },
            {
                key: 'Home_User_B',
                path: '/home/user/B',
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
        key: 'Home_Setting',
        path: '/home/setting',
        component: Setting,
        sidebarOpts: {
            iconType: 'icon-iconguifanbeifen',
            menuText: '设置',
        },
        children: [
            {
                key: 'Home_Setting_A',
                path: '/home/setting/A',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '12312',
                },
            },
            {
                key: 'Home_Setting_B',
                path: '/home/setting/B',
                sidebarOpts: {
                    iconType: 'icon-yinle',
                    menuText: '44',
                },
            },
        ],
    },
];
export default homeRouteConfig;
