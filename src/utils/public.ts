import { TRoute } from '@/typings/route';
import routeConfig from '@routes/config';

/**
 * keyToPath 推荐使用 以免路由页面变化
 */
export const keyToPath = (key: string, routeArr: TRoute.TRouteConfig = routeConfig): string => {
    console.log(key, routeArr);
    for (let i = 0; i < routeArr.length; i++) {
        const item = routeArr[i];
        if (item.key === key && item.path && typeof item.path === 'string') return item.path;
        if (item.children) {
            const chilPath = keyToPath(key, item.children as TRoute.TRouteConfig);
            if (chilPath) return chilPath;
        }
    }
    return '';
};
