import React from 'react';
import { Button, Col, Empty, Row, Card, Carousel } from 'antd';
import './index.less';

interface IStates {
    data: string[];
}
interface IProps {
    msg?: string;
}
export default class Default extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: ['asd'],
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="home-content-warp default-box">
                {data.length === 0 ? (
                    <div className="empty-warp">
                        <Empty description="暂无数据">
                            <Button type="primary">刷新</Button>
                        </Empty>
                    </div>
                ) : (
                    <div className="default-inner">
                        <div className="default-inner-left">
                            <div className="data-card-box">
                                <Card className="card-box-shadow card-base card-one">
                                    <div>21</div>
                                    <div className="card-one-">hi, v_vflqiu</div>
                                    <div>访客 查看</div>
                                </Card>
                                <Card className="card-box-shadow card-base card-favorites">我的收藏</Card>
                                <Card className="card-box-shadow card-base card-giveme-awesome">我收到的赞</Card>
                            </div>
                        </div>
                        <div>
                            <Carousel autoplay>
                                <div>
                                    <div style={{ height: '200px', background: '#FFA067' }}>1</div>
                                </div>
                                <div style={{ height: '200px', background: '#4D78CC' }}>12</div>
                            </Carousel>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
