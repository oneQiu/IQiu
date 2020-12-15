/**
 * 一级路由配置页面
 */

import { lazy } from "react";
import { RouteProps } from "react-router-dom";

interface TMyRouteState {
  key: string
  title?: string
  redirct?: string // 重定向的路由
  auth?: boolean // 是否需要登录态 PS：后续加入角色权限
}
export type TRouteConfig = Array<RouteProps & TMyRouteState>;
const routeConfig: TRouteConfig = [
  {
    key: 'Index',
    path: '/index',
    exact: true,
    title: '首页',
    component: lazy(() => import('@pages/index'))
  }
];
export default routeConfig;