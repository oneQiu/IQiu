import React, { createRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { Progress } from 'antd';
import './index.less';
import { getElById } from '@/utils/dom';

interface TLoadingRef {
    test: () => void;
}
interface LoadingOptions {
    type?: 'show';
}
const Loading = forwardRef(function LoadingBar({}: LoadingOptions, ref: React.Ref<TLoadingRef>) {
    const [percent, setPercent] = useState(0);
    const [show, setShow] = useState(false);

    const test = () => {
        console.log('test');
    };
    useImperativeHandle(ref, () => ({ test }));

    useEffect(() => {
        setShow(true);
    }, []);

    const start = () => {
        setShow(true);
    };

    const end = () => {
        setPercent(100);
        setTimeout(() => setShow(false), 100);
    };
    return createPortal(
        <div className="mine-loading-box">
            <Progress
                percent={percent}
                strokeLinecap="square"
                showInfo={false}
                status={percent >= 100 ? 'success' : 'active'}
                size="small"
                style={{ display: show ? 'block' : 'none' }}
            />
        </div>,
        getElById('loadingBar'),
    );
});

const LoadingBar = () => {
    const ref = createRef<TLoadingRef>();
    console.log(ref);
    return <Loading ref={ref} />;
};
const loading = {
    start: () => {
        console.log('start');
    },
    hide: () => {
        const el = document.getElementById('loadingBar');
        if (el) {
            document.removeChild(el);
        }
    },
    LoadingBar,
};
export default loading;
