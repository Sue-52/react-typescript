// 数值
let num: number = 100;
// 字符串
let str: string = 'hello';
// 布尔
let bool: boolean = true;

// --------内置数据类型----------
// 日期
let date: Date = new Date();
// 数组（字符串）
// let strArr: string[] = ['a', 'b', 'c'];
let strArr: Array<String> = ['a', 'b', 'c'];
// 数组（数字）
// let numArr: number[] = [1, 2, 3];
let numArr: Array<Number> = [1, 2, 3];
// 数组（布尔）
// let boolArr: boolean[] = [true, false, true];
let boolArr: Array<Boolean> = [true, false, true];
// 对象字面量
let obj: { [key: string]: any } = {
  name: 'zhangsan',
  age: 18,
}

// --------自定义数据类型----------
// 类可以作为类实例的类型
class person { }
let people: person = new person();

// 函数
let logNumber: (num: number) => void;
logNumber = (num) => {
  console.log(num);
  return "A"
}
logNumber(1);

// undefined
let u: undefined = undefined;
// null
let n: null = null;

// -----------------------------------
