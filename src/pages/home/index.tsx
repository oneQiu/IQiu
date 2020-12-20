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
class Index extends Component<IProps> {
    render() {
        const { routes } = this.props;
        return (
            <Layout className="layout-warp">
                <Sider theme="light" width={300}>
                    <Sidebar title="测试" />
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
