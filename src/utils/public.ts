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
