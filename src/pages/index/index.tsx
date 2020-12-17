import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TUserState } from '@redux/user/types';
import { Button } from 'antd';

/**
 * 首页框架
 */
interface IProps {
    name?: string;
}
class Index extends Component<IProps> {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h2>首页</h2>
                <Button type="dashed">Click</Button>
            </div>
        );
    }
}

const mapStateToProps = (state: TUserState) => {
    return {
        ...state,
    };
};
export default connect(mapStateToProps)(Index);
