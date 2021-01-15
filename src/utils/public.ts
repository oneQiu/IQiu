import { TRoute } from '@/typings/route';
import routeConfig from '@routes/config';

/**
 * keyToPath 推荐使用 以免路由页面变化
 */
export const keyToPath = (key: string, routeArr: TRoute.TRouteConfig = routeConfig): string => {
    for (let i = 0; i < routeArr.length; i++) {
        const item = routeArr[i];
        if (item.key === key && item.path && typeof item.path === 'string') return item.path;
        if (item.children) {
            const chilPath = keyToPath(key, item.children);
            if (chilPath) return chilPath;
        }
    }
    return '';
};

/**
 * 获取路由参数
 */
export const getUrlParams = (key: string | Array<string>, url: string = location.href): boolean => {
    const urlInstance = new URL(url);
    console.log(typeof urlInstance.searchParams);
    return false;
};

/**
 * 深拷贝
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepCopy = (data: any): any => {
    if (!['object'].includes(typeof data) || data === null) return data;
    if (data instanceof Array) {
        return data.map((i) => deepCopy(i));
    } else if (data instanceof Object) {
        // const aData: { [key: string]: any } = {};
    }
};

/**
 * 防抖函数 固定时间内再次执行 执行最后一次
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn: Function, timeout = 100) => {
    let timer: number | null = null;
    return (...arg: unknown[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...arg);
        }, timeout);
    };
};

/**
 * 节流函数 固定时间内再次执行无效
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const throttle = (fn: Function, timeout = 100) => {
    const lastTime: number = +new Date();
    return (...arg: unknown[]) => {
        const now = +new Date();
        if (now - lastTime > timeout) {
            console.log('-----');
        }
        fn(...arg);
    };
};
