import { LocationDescriptor } from 'history';
import { RouteProps } from 'react-router-dom';
declare module '*.less';

/**
 * 路由type
 */
declare namespace TRoute {
    interface TSidebarOpts {
        /**
         * 图标
         */
        iconType: string;
        /**
         * 菜单名
         */
        menuText: string;
    }
    interface TMyRouteState {
        key: string;
        title?: string;
        /**
         * 重定向的路由
         */
        redirct?: string | LocationDescriptor;
        /**
         * 是否需要登录态 PS：后续加入角色权限
         */
        auth?: boolean;
        /**
         * 侧边栏选项
         */
        sidebarOpts?: TSidebarOpts;
    }
    export type TRouteConfig = Array<RouteProps & TMyRouteState>;
}
