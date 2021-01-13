import { Card } from 'antd';
import React from 'react';
import Marked, { Renderer } from 'marked';
import hljs from 'highlight.js';
import Md from '../../../md/test.md';
import 'highlight.js/styles/atom-one-dark.css';
import './index.less';

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

export default function MdDetails() {
    return (
        <div className="home-content-warp misty">
            <Card className="markdown-content">
                <div dangerouslySetInnerHTML={{ __html: Marked(Md) }}></div>
            </Card>
        </div>
    );
}
