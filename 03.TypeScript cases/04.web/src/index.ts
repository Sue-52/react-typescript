import { User } from "./models/User";

const user = new User({
    name: "ηδΊ",
    age: 33
})

// console.log(user.get("name"))
user.on("change", () => {
    console.log("changed")
})

user.set({ name: "ζε" })
user.fetch();

user.on("save", () => {
    console.log(user)
})
user.save();

console.log(user.get("name"))