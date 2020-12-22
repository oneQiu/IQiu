import React, { Fragment, useEffect, useState } from 'react';
import IconFont from '@styles/icon';
// 引入路由
import homeRouteConfig from '@routes/home';
import './index.less';
import { keyToPath } from '@utils/public';
import { useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { InitObject } from '@/typings';

interface TMenuItem {
    iconType: string;
    menuText: string;
    hasChild?: true;
    toPath?: string;
    children?: Array<TMenuItem>;
}
interface IProps {
    title: string;
    menuData: Array<TMenuItem>;
}
/**
 * 侧边栏 PS：目前只支持二级菜单
 */
const Sidebar: React.FC<IProps> = () => {
    const history = useHistory();
    const location = useLocation();
    const [showSubMenu, setShowSubMenu] = useState<InitObject<boolean>>({});
    // 当前路由高亮
    const [active, setActive] = useState('');
    const sidebarArr = homeRouteConfig.filter((i) => i.sidebarOpts);

    useEffect(() => {
        setActive(location.pathname);
    });

    useEffect(() => {
        // 针对二级菜单需要自动展开
        const currt = homeRouteConfig.find((i) => typeof i.path === 'string' && location.pathname.includes(i.path));
        const subMenuOpen: InitObject<boolean> = {};
        sidebarArr.forEach(({ children, key, path }) => {
            if (children && children.length > 0) {
                if (currt?.path === path) {
                    subMenuOpen[key] = true;
                    return;
                }
                subMenuOpen[key] = false;
            }
        });
        console.log(subMenuOpen);
        setShowSubMenu(subMenuOpen);
    }, []);

    interface PToMenu {
        key: string;
        hasChild?: boolean;
    }
    // 路由跳转
    const onToMenu = (opts: PToMenu) => {
        const { hasChild, key } = opts;
        console.log(key);
        if (hasChild) {
            openSubMenu(key);
            return;
        }
        const path = keyToPath(key);
        path && history.push(path);
    };

    // 展开收缩subMenu
    const openSubMenu = (parent: string, closeOther?: boolean) => {
        const subMenu = Object.assign({}, showSubMenu);
        for (const key in subMenu) {
            if (key === parent) {
                subMenu[key] = !subMenu[key];
            } else if (closeOther) {
                subMenu[key] = false;
            }
        }
        setShowSubMenu(subMenu);
    };

    return (
        <div className="sidebar-warp">
            <div className="logo-warp">
                <IconFont type="icon-dongtaied" className="logo-icon" />
                <div className="logo-name" onClick={() => history.push('/')}>
                    QiuSound
                </div>
            </div>
            <div className="sidebar-menu">
                {sidebarArr.map(({ sidebarOpts, key, path, children }) => {
                    return (
                        sidebarOpts && (
                            <Fragment key={key}>
                                <div
                                    className={['sidebar-menu-item', active === path ? 'active' : ''].join(' ')}
                                    onClick={() => onToMenu({ key, hasChild: !!(children && children.length > 0) })}
                                >
                                    <div className="sidebar-menu-item-icon">
                                        <IconFont type={sidebarOpts.iconType} />
                                    </div>
                                    <div className="sidebar-menu-item-text">{sidebarOpts.menuText}</div>
                                </div>
                                {children && (
                                    <CSSTransition
                                        unmountOnExit
                                        timeout={200}
                                        in={!!showSubMenu[key]}
                                        classNames="sub-menu"
                                    >
                                        <div>
                                            {children.map((i) => (
                                                <div
                                                    className={[
                                                        'sidebar-menu-item',
                                                        active === i.path ? 'active' : '',
                                                    ].join(' ')}
                                                    key={i.key}
                                                    onClick={() =>
                                                        onToMenu({
                                                            key: i.key,
                                                        })
                                                    }
                                                >
                                                    <div className="sidebar-menu-item-sub">
                                                        <IconFont type={sidebarOpts.iconType} />
                                                    </div>
                                                    children
                                                </div>
                                            ))}
                                        </div>
                                    </CSSTransition>
                                )}
                            </Fragment>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
