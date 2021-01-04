import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TUserState } from '@redux/user/types';
import { Layout } from 'antd';
import Sidebar from '@/components/sidebar';
import './index.less';
import { TRoute } from '@/typings/route';
import RouteView from '@/routes';
import Head from '@components/header';

const { Sider, Header, Content } = Layout;
/**
 * 首页框架
 */
interface IProps {
    name?: string;
    routes: TRoute.TRouteConfig;
}

interface IStates {
    menuData?: TMenuData;
    siderCollapsed: boolean;
}
class Index extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        const { routes } = props;
        this.state = {
            menuData: this.onFormatMenuData(routes),
            siderCollapsed: false,
        };
    }

    onFormatMenuData(data: TRoute.TRouteConfig): TMenuData {
        const menuData = data
            .filter((i) => i.sidebarOpts)
            .map((i) => ({
                key: i.key,
                iconType: i.sidebarOpts?.iconType || '',
                menuText: i.sidebarOpts?.menuText || '',
                hasChild: !!(i.children && i.children.length > 0),
                toPath: i.path as string,
                children: i.children?.length ? this.onFormatMenuData(i.children) : [],
                disabled: i.sidebarOpts?.disabled,
            }));
        return menuData;
    }

    onCloseMenu = () =>
        this.setState({
            siderCollapsed: !this.state.siderCollapsed,
        });

    render() {
        const { routes } = this.props;
        const { menuData = [], siderCollapsed } = this.state;
        return (
            <Layout className="layout-warp">
                <Sider theme="light" trigger={null} width={256} collapsed={siderCollapsed}>
                    <Sidebar menuData={menuData} onClose={this.onCloseMenu} />
                </Sider>
                <Layout className="layout-right layout-white-bg">
                    <Header className="layout-white-bg layout-header">
                        <Head />
                    </Header>
                    <Content className="layout-content">
                        <RouteView routes={routes} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state: TUserState) => {
    return {
        ...state,
    };
};
export default connect(mapStateToProps)(Index);
