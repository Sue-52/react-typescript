// 添加事件系统
import { Eventing } from "./Eventing";
// 添加请求系统
import { Sync } from "./Sync";
// 添加存储系统
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

// 获取到 UserProps 中所有的键名
type UserPropsKeys = keyof UserProps;

const rootUrl = "http://localhost:3000/users";

export class User {
    constructor(user: UserProps) {
        this.attributes = new Attributes<UserProps>(user);
    }

    // 添加事件系统
    public events: Eventing = new Eventing();
    // 添加请求系统
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    // 添加存储系统
    public attributes: Attributes<UserProps>;

    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }

    // User 类的 set 方法
    set(update: UserProps) {
        this.attributes.set(update);
        this.events.trigger("change");
    }
    // User 类的 fetch 方法
    fetch(): void {
        // 获取 id
        const id = this.get("id");
        // 如果 id 不存在，则报错
        if (typeof id !== "number") {
            // 提示报错信息
            throw new Error("User must have an id");
        }
        // 成功则发送请求
        this.sync.fetch(id).then((response: AxiosResponse) => {
            // 更新本地数据
            this.set(response.data);
        })
    }
    // User 类的 save 方法
    save(): void {
        this.sync.save(this.attributes.getAll())
            .then(() => this.trigger("save"))
            .catch(() => this.trigger("error"));
    }

}