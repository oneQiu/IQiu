import { RedirectProps, RouteProps } from 'react-router-dom';

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
        /**
         * 是否禁用
         */
        disabled?: boolean;
    }

    /**重定向配置 */
    interface TMyRouteState {
        key: string;
        title?: string;
        /**
         * 是定向
         */
        redirct?: RedirectProps;
        /**
         * 是否需要登录态 PS：后续加入角色权限
         */
        auth?: boolean;
        /** 隐藏侧边栏 */
        hideHeader?: boolean;
        /** 隐藏顶部栏 */
        hideSideBar?: boolean;
        /**
         * 侧边栏选项
         */
        sidebarOpts?: TSidebarOpts;
        children?: TRouteConfig;
    }

    export type TRouteConfig = Array<RouteProps & TMyRouteState>;
}
