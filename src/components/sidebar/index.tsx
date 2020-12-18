import React from 'react';
import IconFont from '@styles/icon';
// 引入路由
import homeRouteConfig from '@routes/home';
import './index.less';
import { keyToPath } from '@utils/public';

interface IProps {
    title: string;
}
const Sidebar: React.FC<IProps> = () => {
    const sidebarArr = homeRouteConfig.filter((i) => i.sidebarOpts);
    // 路由跳转
    const onToMenu = (path?: string | string[]) => {
        console.log(path);
        keyToPath('');
    };
    return (
        <div className="sidebar-warp">
            <div className="logo-warp">
                <IconFont type="icon-dongtaied" className="logo-icon" />
                <div className="logo-name">QiuSound</div>
            </div>
            <div className="sidebar-menu">
                {sidebarArr.map(({ sidebarOpts, key, path }) => {
                    return (
                        sidebarOpts && (
                            <div className="sidebar-menu-item" key={key} onClick={() => onToMenu(path)}>
                                <div className="sidebar-menu-item-icon">
                                    <IconFont type={sidebarOpts.iconType} />
                                </div>
                                <div className="sidebar-menu-item-text">{sidebarOpts.menuText}</div>
                            </div>
                        )
                    );
                })}
                <div className="sidebar-menu-item">
                    <div className="sidebar-menu-item-icon">
                        <IconFont type="icon-icon_A" />
                    </div>
                    <div className="sidebar-menu-item-text">文章</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
