import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Progress } from 'antd';
import './index.less';

const ProgressTop: React.FC = () => {
    const [percent, setPercent] = useState(0);
    const [show, setShow] = useState(false);
    const start = () => {
        setShow(true);
    };
    return (
        <div className="mine-progress-box">
            <Progress
                percent={percent}
                strokeLinecap="square"
                showInfo={false}
                status={percent >= 100 ? 'success' : 'active'}
                size="small"
                style={{ display: show ? 'block' : 'none' }}
            />
            <Button
                onClick={() => {
                    setShow(true);
                    if (percent >= 100) {
                        setPercent(0);
                    } else {
                        setPercent(percent + 10);
                    }
                }}
            >
                Add
            </Button>
        </div>
    );
};
const div = document.createElement('div');
div.id = 'progress';
document.body.appendChild(div);
ReactDOM.createPortal(React.createElement(ProgressTop), div);
console.log(ReactDOM.createPortal(React.createElement(ProgressTop), div));

export default ProgressTop;
