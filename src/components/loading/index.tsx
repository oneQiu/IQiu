import React, { createRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Progress } from 'antd';
import './index.less';
import { getElById } from '@/utils/dom';

interface TLoadingRef {
    start: (value?: number) => void;
    end: () => Promise<void>;
    hide: () => void;
    status: number;
}
interface LoadingOptions {
    type?: 'show';
}
const Loading = forwardRef(function LoadingBar({}: LoadingOptions, ref: React.Ref<TLoadingRef>) {
    const [percent, setPercent] = useState(0);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(0); // 0 未加载 1 加载中 2 加载停滞 3 加载完成

    useImperativeHandle(ref, () => ({ start, end, hide, status }));
    useEffect(() => {
        setShow(true);
    }, []);

    const start = (value?: number) => {
        if (typeof value === 'number') {
            setPercent(value >= 100 ? 100 : value <= 0 ? 0 : value);
            return;
        }
        setStatus(1);
        setPercent(80);
    };

    const end = (): Promise<void> => {
        return new Promise(async (resolve) => {
            await setPercent(100);
            await setStatus(3);
            setTimeout(() => resolve(), 800);
        });
    };

    const hide = () => {
        setShow(false);
        setStatus(0);
        setPercent(0);
    };

    return (
        <div className="mine-loading-box" style={{ display: show ? 'block' : 'none' }}>
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
        start: async (value?: number) => {
            if (!ref.current) {
                await show();
            }
            setTimeout(() => ref.current?.start(value));
        },
        end: async () => {
            const el = document.getElementById('loadingBar');
            if (el && ref.current) {
                await ref.current.end().then(() => ref.current?.hide());
                unmountComponentAtNode(el);
            }
        },
    };
};
export default loading();
