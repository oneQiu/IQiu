import React, { ReactNode } from 'react';
import { Button, Col, Empty, Row, Card, Progress, Statistic } from 'antd';
import './index.less';

interface IStates {
    data: string[];
    tabList: Array<{ key: string; tab: ReactNode }>;
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
        };
    }

    render() {
        const { data, tabList } = this.state;
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
                        <Row gutter={40} style={{ height: '100%' }}>
                            <Col span={16}>
                                <div className="card-box-shadow inner-card-left inner-card-base">
                                    <div className="card-left-top">
                                        <Card
                                            className="card-left-mine-info"
                                            title="Mine Study Plan"
                                            headStyle={{ border: 'none' }}
                                        >
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={50} status="active" />
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={70} status="exception" />
                                            <Statistic title="Active Users" value={112893} />
                                            <Progress percent={100} />
                                        </Card>
                                        <Card className="card-left-carousel">222</Card>
                                    </div>
                                    <div className="card-left-content">
                                        <Card className="card-box-shadow content-box">Inner</Card>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <Card className="card-box-shadow  inner-card-right inner-card-base">11</Card>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }
}
