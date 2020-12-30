// card-item
import React from 'react';
import { Image, Statistic } from 'antd';
import { FireOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons';
import './index.less';

interface IProps {
    imgUrl?: string;
    title?: string | number;
    subTitle?: string | number;
    views?: number;
    forwards?: number;
    loves?: number;
}

const Card: React.FC<IProps> = ({ imgUrl, title, subTitle, views = 0, forwards = 0, loves = 0 }) => {
    const iconValueStype = {
        fontSize: 16,
        marginRight: 10,
    };
    return (
        <div className="card-warp">
            <Image
                src={imgUrl}
                width={150}
                height={150}
                fallback="https://pikaq-1257508274.cos.ap-shenzhen-fsi.myqcloud.com/123.png"
            />
            <div className="card-details-warp">
                <div className="card-details-title">{title || '--'}</div>
                <div className="card-details-subtitle">{subTitle || '--'}</div>
                <div className="card-details-icons">
                    <Statistic value={views} prefix={<FireOutlined />} valueStyle={iconValueStype} />
                    <Statistic value={loves} prefix={<HeartOutlined />} valueStyle={iconValueStype} />
                    <Statistic value={forwards} prefix={<DownloadOutlined />} valueStyle={iconValueStype} />
                </div>
            </div>
        </div>
    );
};

export default Card;
