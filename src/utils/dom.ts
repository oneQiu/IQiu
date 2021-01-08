/**
 * 创建dom节点
 */
export function getElById(id: string): HTMLElement {
    let el: HTMLElement | null = document.getElementById(id);
    if (!el) {
        el = document.createElement('div');
        el.id = id;
        document.body.appendChild(el);
    }
    return el;
}
