import { RootReducer } from '@/redux/reducers';
import IconFont from '@/styles/icon';
import { Badge, Input, Button, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useCallback, useState } from 'react';
import { setName } from '@/redux/user/actionCreate';
import { useSelector, useDispatch } from 'react-redux';
import './index.less';

const { Search } = Input;

interface IProps {
    onSearch?: () => void;
}

const Header: React.FC<IProps> = () => {
    // redux hooks
    const userInfo = useSelector((state: RootReducer) => state.userInfo);
    const dispatch = useDispatch();
    const setNameCb = useCallback((name: string) => dispatch(setName(name)), [dispatch]);
    const [loading, setLoading] = useState(false);
    // 性别 1 男 2 女
    const [gender] = useState(2);
    const [avatarUrl] = useState('');

    const onSearch = (e: string) => {
        if (e) {
            setLoading(true);
        }
        console.log(e);
        setLoading(false);
    };

    const getAvatarDom = () => {
        if (avatarUrl) return '';
        return <IconFont type={gender === 1 ? 'icon-nan' : 'icon-nv'} className="icon-default-size" />;
    };

    // 登录
    const onShowSignIn = () => {
        setNameCb('v_vflqiu');
    };

    return (
        <div className="header-warp">
            <div className="header-input-warp">
                <Search
                    allowClear
                    placeholder="Place Enter The Content to be Search"
                    enterButton="Search"
                    bordered={false}
                    onSearch={(val) => onSearch(val)}
                    loading={loading}
                />
            </div>
            <div className="user-warp">
                {userInfo.username ? (
                    <div className="user-login">
                        <Badge count={1}>
                            <IconFont type="icon-tongzhi" className="user-login-notify" color="red" />
                        </Badge>
                        <Avatar
                            className="user-login-avatar"
                            src={avatarUrl}
                            style={{ background: 'none' }}
                            size={38}
                            icon={getAvatarDom()}
                        />
                        <Tag color="#2db7f5">{userInfo.username}</Tag>
                    </div>
                ) : (
                    <Button shape="round" size="large" onClick={onShowSignIn}>
                        Sign In
                    </Button>
                )}
            </div>
        </div>
    );
};
export default Header;
