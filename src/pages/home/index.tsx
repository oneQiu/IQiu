import React, { Fragment, ReactNode } from 'react';
import { Button, Col, Empty, Row, Card, Progress, Statistic, Carousel } from 'antd';
import './index.less';
import { RouteComponentProps } from 'react-router-dom';
import { keyToPath } from '@/utils/public';
import { Footer } from 'antd/lib/layout/layout';

interface IStates {
    data: string[];
    tabList: Array<{ key: string; tab: ReactNode }>;
    killData: RequestInfo[];
}
interface IProps extends RouteComponentProps {
    msg?: string;
}
export default class Home extends React.Component<IProps, IStates> {
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
        const { history } = this.props;
        return (
            <Fragment>
                <div className="home-content-warp home-box">
                    {data.length === 0 ? (
                        <div className="empty-warp">
                            <Empty description="暂无数据">
                                <Button type="primary">刷新</Button>
                            </Empty>
                        </div>
                    ) : (
                        <div className="home-inner">
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
                                                <Button
                                                    onClick={() => {
                                                        const href = keyToPath('MdDetails');
                                                        history.push({
                                                            pathname: '/mdDetails/12',
                                                        });
                                                        console.log(href);
                                                    }}
                                                >
                                                    Detail
                                                </Button>
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
                <Footer>123</Footer>
            </Fragment>
        );
    }
}
