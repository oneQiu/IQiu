import React, { ReactNode } from 'react';
import { Button, Col, Empty, Row, Card, Progress, Statistic, Carousel } from 'antd';
import './index.less';

interface IStates {
    data: string[];
    tabList: Array<{ key: string; tab: ReactNode }>;
    killData: RequestInfo[];
}
interface IProps {
    msg?: string;
}
export default class Default extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: ['asd'],
            tabList: [
                {
                    key: 'test',
                    tab: 'Top',
                },
            ],
            killData: [],
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
                        <Row gutter={40}>
                            <Col span={16}>
                                <div className="inner-card-left">
                                    <div className="card-left-top">
                                        <Card
                                            className="card-left-mine-info"
                                            title="List of Skills"
                                            headStyle={{ border: 'none' }}
                                        >
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={50} status="active" />
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={70} status="exception" />
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={100} />
                                        </Card>
                                        <Card
                                            className="card-left-carousel"
                                            title="asdad"
                                            headStyle={{ border: 'none' }}
                                        >
                                            <Carousel className="carousel">
                                                <div>
                                                    <h3
                                                        style={{
                                                            height: 250,
                                                            width: 600,
                                                            backgroundColor: 'goldenrod',
                                                        }}
                                                    >
                                                        1
                                                    </h3>
                                                </div>
                                                <div>
                                                    <h3
                                                        style={{
                                                            height: 250,
                                                            width: 600,
                                                            backgroundColor: 'greenyellow',
                                                        }}
                                                    >
                                                        2
                                                    </h3>
                                                </div>
                                            </Carousel>
                                        </Card>
                                    </div>
                                    <div className="card-left-content">
                                        <Card className="content-box">
                                            <Button>Detail</Button>
                                        </Card>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <Card className="inner-card-right">11</Card>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}
