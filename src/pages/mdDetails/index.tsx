import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Marked, { Renderer } from 'marked';
import hljs from 'highlight.js';
import Md from '../../../md/test.md';
import 'highlight.js/styles/atom-one-dark.css';
import './index.less';
import { debounce, throttle } from '@/utils/public';

// 初始化marked
Marked.setOptions({
    renderer: new Renderer(),
    highlight: (code) => hljs.highlightAuto(code).value,
    gfm: true, // github标准的md
    sanitize: false, // 输出过滤html代码
    smartLists: true,
    smartypants: false,
    silent: true,
});

type NavData = { text: string; target: string; leval: number; paddingLeft: number }[];
const baseMenuPaddingLeft = 20;

const MdDetails: React.FC = () => {
    const [navData, setNavData] = useState<NavData>([]);
    const [hash, setHash] = useState(decodeURI(location.hash));
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(Marked(Md), 'text/html');
        const data: NavData = [];

        Array.from(dom.body.children).map((i) => {
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h5'].includes(i.tagName.toLocaleLowerCase())) {
                const leval = +i.tagName.toLocaleLowerCase().split('h')[1];
                data.push({
                    leval,
                    text: i.innerHTML,
                    target: '#' + i.id,
                    paddingLeft: (() => {
                        const len = data.length;
                        if (len === 0 || data[len - 1].leval > leval) return 0;
                        if (data[len - 1].leval === leval) return data[len - 1].paddingLeft;
                        return data[len - 1].paddingLeft + 20;
                    })(),
                });
            }
        });
        setNavData(data);
        // 监听滚动
        contentScrollListen();
    }, []);

    useEffect(() => {
        setHash(decodeURI(location.hash));
    });

    const contentScrollListen = () => {
        contentRef.current?.addEventListener('scroll', (e) => {
            // debounce(() => {
            //     console.log(e.currentTarget);
            // });
        });
    };

    return (
        <div ref={contentRef} className="md-details">
            <div
                className="home-content-warp vue md-details-inner"
                onClick={throttle(function x() {
                    console.log(45);
                }, 500)}
            >
                <Card className="markdown-content">
                    <div
                        dangerouslySetInnerHTML={{ __html: Marked(Md) }}
                        onClick={() => {
                            // console.log((contentRef.current?.getBoundingClientRect().top || 0) - 54);
                        }}
                    ></div>
                </Card>
                <Card className="md-navigation">
                    <ul className="md-nav-ul">
                        {navData.map((i) => (
                            <li className={['md-nav-li', hash === i.target ? 'active' : ''].join(' ')} key={i.target}>
                                <a
                                    href={i.target}
                                    title={i.text}
                                    className={!i.paddingLeft ? 'leval1' : ''}
                                    style={{
                                        paddingLeft: !i.paddingLeft ? i.paddingLeft : baseMenuPaddingLeft,
                                    }}
                                >
                                    {i.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default MdDetails;