import React, { Fragment, useEffect, useState } from 'react';
import IconFont from '@styles/icon';
import './index.less';
import { keyToPath } from '@utils/public';
import { useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

interface IProps {
    menuData: TMenuData;
}
/**
 * 侧边栏 PS：目前只支持二级菜单
 */
const Sidebar: React.FC<IProps> = ({ menuData }) => {
    const history = useHistory();
    const location = useLocation();
    const [showSubMenu, setShowSubMenu] = useState<InitObject<boolean>>({});
    // 当前路由高亮
    const [active, setActive] = useState('');

    useEffect(() => {
        setActive(location.pathname);
    });

    useEffect(() => {
        // 针对二级菜单需要自动展开
        const currt = menuData.find((i) => typeof i.toPath === 'string' && location.pathname.includes(i.toPath));
        const subMenuOpen: InitObject<boolean> = {};
        menuData.forEach(({ children, key, toPath }) => {
            if (children && children.length > 0) {
                if (currt?.toPath === toPath) {
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
                {menuData.map(({ iconType, menuText, key, toPath, children }) => {
                    return (
                        <Fragment key={key}>
                            <div
                                className={['sidebar-menu-item', active === toPath ? 'active' : ''].join(' ')}
                                onClick={() => onToMenu({ key, hasChild: !!(children && children.length > 0) })}
                            >
                                <div className="sidebar-menu-item-icon">
                                    <IconFont type={iconType} />
                                </div>
                                <div className="sidebar-menu-item-text">{menuText}</div>
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
                                                    active === i.toPath ? 'active' : '',
                                                ].join(' ')}
                                                key={i.key}
                                                onClick={() =>
                                                    onToMenu({
                                                        key: i.key,
                                                    })
                                                }
                                            >
                                                <div className="sidebar-menu-item-sub">
                                                    <IconFont type={iconType} />
                                                </div>
                                                children
                                            </div>
                                        ))}
                                    </div>
                                </CSSTransition>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
