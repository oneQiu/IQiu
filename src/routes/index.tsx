import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TRouteConfig } from './config';
interface IProps {
    /**
     * 路由原信息 参数优先级大于routers
     */
    defaultConfig?: TRouteConfig;
    /**
     * 子路由信息传递下去
     */
    routers?: TRouteConfig;
}

interface IState {
    redirctRoutes: TRouteConfig;
    basisRoutes: TRouteConfig;
}

/**
 * 路由集
 */
export default class RouteView extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const { defaultConfig, routers } = this.props;
        const config = (defaultConfig ? defaultConfig : routers) || [];
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
                </Switch>
            </Suspense>
        );
    }
}
