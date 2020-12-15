/**
 * 一级路由配置页面
 */

import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { LocationDescriptor } from 'history';

// 引入页面
const Index  = lazy(() => import('@pages/index'))
const _404 = lazy(() => import('@components/404'))

interface TMyRouteState {
  key: string
  title?: string
  /**
   * 重定向的路由
   */
  redirct?: string | LocationDescriptor
  /**
   * 是否需要登录态 PS：后续加入角色权限
   */
  auth?: boolean
}
export type TRouteConfig = Array<RouteProps & TMyRouteState>;

const routeConfig: TRouteConfig = [
  {
    key: 'Index',
    path: '/',
    exact: true,
    title: '首页',
    component: Index,
  },
  {
    key: '404',
    path: '/404',
    exact: true,
    title: 'Oh,404?',
    component: _404,
    redirct: '/404'
  },
];
export default routeConfig;