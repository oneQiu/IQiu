import React, { ReactNode } from 'react';
import { Menu, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import IconFont from '@/styles/icon';
import './index.less';

const { SubMenu } = Menu;

interface IProps {
    /** 菜单项 */
    menuData: TMenuData;
}
const SideBar: React.FC<IProps> = ({ menuData }) => {
    const history = useHistory();
    console.log(menuData);
    // 渲染Item
    const menuItemRender = (item: TMenuItem): ReactNode => {
        console.log(item);
        return (
            <Menu.Item icon={<IconFont type={item.iconType} />} key={item.key}>
                {item.menuText}
            </Menu.Item>
        );
    };
    return (
        <div className="sidebar-box">
            <div className="logo-warp" onClick={() => history.push('/')}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 26 }} />} />
            </div>
            <Menu mode="inline">
                {menuData.map((i) => {
                    if (i.hasChild && i.children && i.children.length > 0) {
                        return (
                            <SubMenu key={i.key} title={i.menuText} icon={<IconFont type={i.iconType} />}>
                                {i.children.map((it) => (
                                    <Menu.Item key={it.key}>{it.key}</Menu.Item>
                                ))}
                                {/* {menuItemRender(i.children[0])} */}
                            </SubMenu>
                        );
                    } else {
                        return menuItemRender(i);
                    }
                })}
            </Menu>
        </div>
    );
};

export default SideBar;
