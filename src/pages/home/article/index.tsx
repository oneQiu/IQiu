import React, { useEffect, useState } from 'react';
import Card from '@components/card';
import { Button, Empty } from 'antd';
import './index.less';

const Article: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [articleData, setArticleData] = useState<any[]>([]);
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
        setArticleData(data);
    };

    return (
        <div className="home-content-warp article-box">
            {articleData.length === 0 ? (
                <div className="empty-warp">
                    <Empty description="暂无数据">
                        <Button type="primary">Create Now</Button>
                    </Empty>
                </div>
            ) : (
                <div className="article-inner">
                    <div className="article-list">
                        {articleData.map((i) => (
                            <Card imgUrl="" key={i.id} title={i.title} subTitle={i.subTitle} />
                        ))}
                    </div>
                    <div className="article-top">1</div>
                </div>
            )}
        </div>
    );
};
export default Article;
