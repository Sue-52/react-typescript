import { User } from "./models/User";

const user = new User({
    name: "王五",
    age: 33
})

// console.log(user.get("name"))
user.on("change", () => {
    console.log("changed")
})

user.set({ name: "李四" })
user.fetch();

user.on("save", () => {
    console.log(user)
})
user.save();

console.log(user.get("name"))