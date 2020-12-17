import React from 'react';

interface IProps {
    title: string;
}
const Sidebar: React.FC<IProps> = () => {
    return (
        <div>
            <div>
                <img src="./static/logo.png" alt="logo" width="80" />
                这里是Icons
            </div>
        </div>
    );
};

export default Sidebar;
