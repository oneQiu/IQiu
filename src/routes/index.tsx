import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TRoute } from '@typings/route';

const _404 = lazy(() => import('@components/404'));
interface IProps {
    /**
     * 路由原信息 参数优先级大于routes
     */
    defaultConfig?: TRoute.TRouteConfig;
    /**
     * 子路由信息传递下去
     */
    routes?: TRoute.TRouteConfig;
}

interface IState {
    redirctRoutes: TRoute.TRouteConfig;
    basisRoutes: TRoute.TRouteConfig;
}

/**
 * 路由集
 */
export default class RouteView extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const { defaultConfig, routes } = this.props;
        const config = (defaultConfig ? defaultConfig : routes) || [];
        // 筛选具有重定向的路由
        const redirctRoutes = config.filter((route) => route.redirct);
        // 筛选不具有重定向的基础路由
        const basisRoutes = config;
        this.state = {
            redirctRoutes,
            basisRoutes,
        };
    }

    render() {
        const { redirctRoutes, basisRoutes } = this.state;
        const renderRedirct = redirctRoutes.map((i) => i.redirct && <Redirect key={i.key} to={i.redirct} />);
        return (
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    {/* PS：需要使用render 否则component会导致页面的回流 */}
                    {basisRoutes.map((i) => (
                        <Route
                            key={i.key}
                            path={i.path}
                            exact={i.exact}
                            strict={i.strict}
                            render={(routeProps) => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const Comp: any = i.component;
                                // 动态title
                                i.title && (document.title = i.title || 'IQ_Q');
                                return <Comp {...routeProps} routes={i.children}></Comp>;
                            }}
                        />
                    ))}
                    {renderRedirct}
                    {/* 404组件 */}
                    <Route path="/*" component={_404} />
                </Switch>
            </Suspense>
        );
    }
}
