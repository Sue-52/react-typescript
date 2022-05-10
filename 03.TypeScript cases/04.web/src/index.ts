// console.log("hello")
import { User } from "./models/User";

// const user = new User({ name: "里斯", age: 18 });
const user = new User({ id: 2, name: "李四", age: 22 });
console.log(user)
user.on("click", () => {
    console.log("click")
});

user.trigger("click");

// 保存数据
user.save();

console.log(user.get("name"));