import { lazy } from 'react';
const User = lazy(() => import('@pages/user'));

export default {
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
};
