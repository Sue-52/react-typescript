type Callback = () => void;

export class Eventing {
    // 存储事件处理函数
    events: { [key: string]: Callback[] } = {};
    // 绑定事件方法
    on = (eventName: string, callback: Callback): void => {
        // 通过事件名称获取已有事件监听程序
        // 如果不是第一次绑定事件, 得到的是 Callback 数组, 直接使用
        // 如果是第一次绑定, 得到的是 undefined, 利用逻辑短路思想, 放弃 undefined, 返回空数组
        const handlers = this.events[eventName] || [];
        // 将事件监听程序添加到数组中
        handlers.push(callback);
        //  将拥有结果的数组放入 events 中
        this.events[eventName] = handlers;
    }

    // 触发事件方法
    trigger = (eventName: string): void => {
        // 通过事件名称获取已有事件监听程序
        const handlers = this.events[eventName];
        // 1. 触发一个没有绑定的事件
        // 2. 触发已绑定，但是目前已解绑的事件
        if (!handlers || handlers.length === 0) return;
        // 依次处理事件
        handlers.forEach((callback) => callback());
    }
}