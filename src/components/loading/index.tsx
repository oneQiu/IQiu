import React, { createRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import { Progress } from 'antd';
import './index.less';
import { getElById } from '@/utils/dom';

interface TLoadingRef {
    start: () => void;
}
interface LoadingOptions {
    type?: 'show';
}
const Loading = forwardRef(function LoadingBar({}: LoadingOptions, ref: React.Ref<TLoadingRef>) {
    const [percent, setPercent] = useState(0);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(0); // 0 未加载 1 加载中 2 加载停滞 3 加载完成
    useImperativeHandle(ref, () => ({ start }));
    useEffect(() => {
        setShow(true);
    }, []);

    const start = () => {
        const timer = setInterval(() => {
            console.log(percent);
            setPercent(percent + 10);
        }, 20);
        if (percent >= 80) clearInterval(timer);
    };

    const end = () => {
        setPercent(100);
        setTimeout(() => setShow(false), 100);
    };
    return (
        <div className="mine-loading-box">
            <Progress
                percent={percent}
                strokeLinecap="square"
                showInfo={false}
                status={percent >= 100 ? 'success' : 'active'}
                size="small"
            />
        </div>
    );
});

const loading = () => {
    const ref = createRef<TLoadingRef>();
    const show = () => {
        render(<Loading ref={ref} />, getElById('loadingBar'));
    };
    return {
        start: async () => {
            if (!ref.current) {
                await show();
            }
            console.log('start', ref.current);
            setTimeout(() => {
                ref.current?.start();
            });
        },
        end: () => {
            console.log('load');
        },
        hide: () => {
            const el = document.getElementById('loadingBar');
            console.log(el);
            if (el) {
                unmountComponentAtNode(el);
                // el.remove();
                // document(el);
            }
        },
    };
};
export default loading();
