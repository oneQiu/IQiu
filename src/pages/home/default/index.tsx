import React, { useEffect, useState } from 'react';
import { Button, Empty } from 'antd';
import './index.less';

const Default: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [defaultData, setDefaultData] = useState<any[]>([]);
    useEffect(() => {
        onLoad();
    }, []);
    const onLoad = () => {
        const data = ['v_vflqiu', 'qdsa', 'asd', 'a1eqw'].map((i) => ({
            title: i,
            subTitle: '1',
            id: i,
        }));
        console.log(data);
        setDefaultData(data);
    };

    return (
        <div className="home-content-warp default-box">
            {defaultData.length === 0 ? (
                <div className="empty-warp">
                    <Empty description="暂无数据">
                        <Button type="primary">Create Now</Button>
                    </Empty>
                </div>
            ) : (
                <div className="default-inner">12</div>
            )}
        </div>
    );
};
export default Default;
