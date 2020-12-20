// 子路由
import { TRoute } from '@typings/route';
import { lazy } from 'react';
import Article from '@pages/home/article';

const Setting = lazy(() => import('@pages/home/setting'));
const User = lazy(() => import('@pages/home/user'));
const Music = lazy(() => import('@pages/home/music'));

const homeRouteConfig: TRoute.TRouteConfig = [
    {
        key: 'Home_Article',
        path: '/home/article',
        component: Article,
        sidebarOpts: {
            iconType: 'icon-icon_A',
            menuText: '文章',
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
    },
];
export default homeRouteConfig;
