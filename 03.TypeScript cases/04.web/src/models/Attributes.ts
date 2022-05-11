export class Attributes<T> {
    constructor(private data: T) { }

    // 供用户获取用户信息
    get = <K extends keyof T>(key: K) => {
        return this.data[key];
    }

    // 供用户设置用户信息
    /** Attributes 中的 set 方法 用于合并用户信息
     * 
     * @param update 接收用户信息
     */
    set(update: T) {
        // 合并对象
        // 通过 UserProps 接口规范的对象才可以合并
        Object.assign(this.data, update)
    }

    // 供用户获取用户信息
    getAll = (): T => {
        return this.data;
    }
}