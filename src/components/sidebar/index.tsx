import React, { useState } from 'react';
import IconFont from '@styles/icon';
// 引入路由
import homeRouteConfig from '@routes/home';
import './index.less';
import { keyToPath } from '@utils/public';
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {
    title: string;
}
const Sidebar: React.FC<IProps> = () => {
    const history = useHistory();
    const location = useLocation();
    // 当前路由高亮
    const [active, setActive] = useState('');
    const sidebarArr = homeRouteConfig.filter((i) => i.sidebarOpts);
    // 路由跳转
    const onToMenu = (key: string) => {
        const path = keyToPath(key);
        path && history.push(path);
    };
    console.log(location);
    return (
        <div className="sidebar-warp">
            <div className="logo-warp">
                <IconFont type="icon-dongtaied" className="logo-icon" />
                <div className="logo-name">QiuSound</div>
            </div>
            <div className="sidebar-menu">
                {sidebarArr.map(({ sidebarOpts, key }) => {
                    return (
                        sidebarOpts && (
                            <div className="sidebar-menu-item" key={key} onClick={() => onToMenu(key)}>
                                <div className="sidebar-menu-item-icon">
                                    <IconFont type={sidebarOpts.iconType} />
                                </div>
                                <div className="sidebar-menu-item-text">{sidebarOpts.menuText}</div>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
