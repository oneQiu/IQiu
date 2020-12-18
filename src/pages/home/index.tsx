import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TUserState } from '@redux/user/types';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar';
import './index.less';

const { Sider, Header, Content } = Layout;
/**
 * 首页框架
 */
interface IProps {
    name?: string;
}
class Index extends Component<IProps> {
    render() {
        return (
            <Layout className="layout-warp">
                <Sider theme="light" width={300}>
                    <Sidebar title="测试" />
                </Sider>
                <Layout>
                    <Header color="black">Header</Header>
                    <Content>Content</Content>
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
