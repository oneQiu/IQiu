import { lazy } from 'react';

const Setting = lazy(() => import('@pages/setting'));

export default {
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
};
