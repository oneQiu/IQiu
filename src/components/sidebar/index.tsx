import React, { ReactNode } from 'react';
import { Menu, Spin, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import IconFont from '@/styles/icon';
import './index.less';
import { keyToPath } from '@/utils/public';
const { SubMenu } = Menu;

interface IProps {
    /** 菜单项 */
    menuData: TMenuData;
    /** 收缩事件 */
    onClose?: () => void;
}
const SideBar: React.FC<IProps> = ({ menuData, onClose }) => {
    const history = useHistory();
    const location = useLocation();
    const defaultKeys: { defaultSelectedKeys: string[]; defaultOpenKeys: string[] } = {
        defaultOpenKeys: [],
        defaultSelectedKeys: [],
    };

    const findMenuKey = (data: TMenuData, upperMenu?: string) => {
        // 寻找路由默认key选择
        data.forEach((i) => {
            if (i.toPath === location.pathname) {
                if (upperMenu) {
                    defaultKeys.defaultOpenKeys = [upperMenu];
                }
                defaultKeys.defaultSelectedKeys = [i.key];
            } else if (i.children) {
                console.log();
                findMenuKey(i.children, i.key);
            }
        });
    };
    findMenuKey(menuData);

    // 渲染Item
    const menuItemRender = (item: TMenuItem): ReactNode => (
        <Menu.Item
            icon={<IconFont type={item.iconType} style={{ fontSize: 18 }} />}
            key={item.key}
            disabled={item.disabled}
        >
            {item.menuText}
        </Menu.Item>
    );

    // 路由跳转
    const onMenuToPath = (key: string | number) => {
        const path = keyToPath(String(key));
        history.push(path);
    };

    return (
        <div className="sidebar-box">
            <div className="logo-warp">
                {false ? <Spin indicator={<LoadingOutlined style={{ fontSize: 22 }} />} /> : <div>Logo</div>}
            </div>
            <Menu
                mode="inline"
                defaultOpenKeys={defaultKeys.defaultOpenKeys}
                defaultSelectedKeys={defaultKeys.defaultSelectedKeys}
                onSelect={(e) => onMenuToPath(e.key)}
            >
                {menuData.map((i) => {
                    if (i.hasChild && i.children && i.children.length > 0) {
                        return (
                            <SubMenu
                                key={i.key}
                                title={i.menuText}
                                icon={<IconFont className="icon-default" type={i.iconType} disabled={i.disabled} />}
                            >
                                {i.children.map((child) => menuItemRender(child))}
                            </SubMenu>
                        );
                    } else {
                        return menuItemRender(i);
                    }
                })}
            </Menu>
            <div>{onClose && <Button onClick={onClose}>Close</Button>}</div>
        </div>
    );
};

export default SideBar;
