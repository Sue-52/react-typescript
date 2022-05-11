import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasId {
    id?: number;
}

export class Sync<T extends HasId> {
    constructor(public rootUrl: string) { }

    // 创建方法拥有模拟服务端数据交换
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }
    // 用于创建用户和修改用户
    save(data: T): AxiosPromise {
        const { id } = data;
        if (typeof id !== "undefined") {
            // patch 方法只能修改部分数据
            return axios.patch(`${this.rootUrl}/${id}`, data)
        } else {
            // post 方法用于创建新数据
            return axios.post(this.rootUrl, data)
        }
    }
}