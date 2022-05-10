import axios, { AxiosResponse } from "axios";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    constructor(private data: UserProps) { }
    // 存储事件处理函数
    events: { [key: string]: Callback[] } = {};
    // 供用户获取用户信息
    get(propName: string): string | number {
        return this.data[propName];
    }
    // 供用户设置用户信息
    set(update: UserProps) {
        // 合并对象
        // 通过 UserProps 接口规范的对象才可以合并
        Object.assign(this.data, update)
    }

    // 绑定事件方法
    on(eventName: string, callback: Callback): void {
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
    trigger(eventName: string): void {
        // 通过事件名称获取已有事件监听程序
        const handlers = this.events[eventName];
        // 1. 触发一个没有绑定的事件
        // 2. 触发已绑定，但是目前已解绑的事件
        if (!handlers || handlers.length === 0) return;
        // 依次处理事件
        handlers.forEach((callback) => callback());
    }

    // 创建方法拥有模拟服务端数据交换
    fetch() {
        return axios.get(`http://localhost:3000/users/${this.get("id")}`)
            .then((res: AxiosResponse) => { this.set(res.data) })
    }
    // 用于创建用户和修改用户
    save() {
        const id = this.get("id");
        if (id) {
            // patch 方法只能修改部分数据
            return axios.patch(`http://localhost:3000/users/${id}`, this.data)
        } else {
            // post 方法用于创建新数据
            return axios.post(`http://localhost:3000/users`, this.data)
        }
    }
}