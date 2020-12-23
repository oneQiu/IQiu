import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TUserState } from '@redux/user/types';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar';
import './index.less';
import { TRoute } from '@/typings/route';
import RouteView from '@/routes';

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
}
class Index extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        const { routes } = props;
        this.state = {
            menuData: this.onFormatMenuData(routes),
        };
    }

    onFormatMenuData(data: TRoute.TRouteConfig): TMenuData {
        const menuData = data.map((i) => ({
            key: i.key,
            iconType: i.sidebarOpts?.iconType || '',
            menuText: i.sidebarOpts?.menuText || '',
            hasChild: i.children && i.children.length > 0,
            toPath: i.path as string,
            children: i.children?.length ? this.onFormatMenuData(i.children) : [],
        }));
        return menuData;
    }

    render() {
        const { routes } = this.props;
        const { menuData = [] } = this.state;
        return (
            <Layout className="layout-warp">
                <Sider theme="light" width={300}>
                    <Sidebar menuData={menuData} />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
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
