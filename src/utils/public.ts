import routeConfig from '@routes/config';

/**
 * keyToPath 推荐使用 以免路由页面变化
 */
export const keyToPath = (key: string): string => {
    console.log(key, routeConfig);
    const route = routeConfig.find((i) => {
        if (i.children) {
        }
        return i.key === key;
    });
    return '';
};
