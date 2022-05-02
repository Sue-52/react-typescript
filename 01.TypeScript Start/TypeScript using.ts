import axios from "axios"
// ------------------------
var name: string = "TypeScript";

// ------------------------
function sum(x: number, y: number): number {
  return x + y;
}
sum(123, 123);

// ------------------------
function returnString(): string {
  return "Hello";
}

// ------------------------
interface todoItem {
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  // const todo: todoItem = response.data;
  // 断言
  const todo = response.data as todoItem;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  console.log(`
    任务的ID是: ${id},
    任务的名称是: ${title},
    任务是否完成: ${finished}
  `);
});