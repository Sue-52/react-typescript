# TypeScript 教程

## 1. TypeScript 概述

### 1.1 TypeScript 是什么

- TypeScript 是一门基于 JavaScript 的编程语言，它是具有类型系统的 JavaScript。
  - 所有的 JavaScript 代码都是合法的 TypeScript 代码。
  - TypeScript 是强类型的，变量、参数、返回值等都必须有固定的类型。
  
  <img src="./images/02.png" align="left" width="50%"/>
  
- TypeScript 不能在浏览器环境或者 Node 环境直接运行，它在执行前需要先被转换为 JavaScript。
  - TypeScript 提供的类型系统只在开发阶段发挥作用，因为只有在开发阶段开发者才需要借助它进行类型上的约束。
  
  <img src="./images/03.png" align="left" width="50%"/>
  
- TypeScript 由微软发布，第一个正式版的发布时间为是2013年6月19日。

  <img src="./images/01.png" />

### 1.2 什么是类型

类型是人类的思考方式，当事物确定了类型以后，它就是已知的，就是在可控范围内的，就是不被惧怕的。

如果将类型带入程序中，开发者就可以通过类型的方式进行思考，进行编码，那么程序中的任何事物都会变得可控，程序自然就会变得健壮。

程序中的数据类型是值的简要的表述方式。

<img src="./images/04.png" align="left" width="25%"/>

### 1.2 类型系统带来的好处

类型系统为编辑器带来了更加精准的代码提示，以此来提升开发人员的编程体验。

```typescript
app.get("/", function (req, res) {
  res.
    send
    sendDate
    sendfile
    sendFile
    sendStatus
});
```

在声明变量时明确告知编译器它的类型，编译器就知道该变量可以调用哪些属性和方法，当开发者调用了错误的属性或方法时，编译器会及时给出提示。

```typescript
var name: string = "张三";
name.toFixed(2); // 属性"toFixed"在类型"string"上不存在
```

在声明函数时明确告知编译器参数的类型，当开发者调用该函数时如果传递的参数的类型不正确，编译器会及时给出提示。

```typescript
function sum(x: number, y: number) {}
sum(10, "a"); // 类型"string"的参数不能赋给类型"number"的参数。
```

在声明函数时明确告知编译器返回值的类型，当开发者返回的值的类型错误时，编译器会及时给出提示。

```typescript
function sayHello(): string {
  return 100; // 不能将类型"number"分配给类型"string"。
}
```

在声明对象时告知编译器该对象下有哪些属性，当开发者访问了对象中不存在的属性时，编译器会及时给出提示。

```typescript
const person = { name: "张三" };
person.age; // 类型"{name: string}"上不存在属性"age"。
```

类型系统使代码变得可预测，能够让开发者更早的发现代码存在的问题和潜在问题。

```typescript
for (let i = 0; i < 5; i++) { }
console.log(i); // 编译器会捕获到错误: cannot find name "i"
```

当重复声明同名变量时，编译器会立即给出提示。

```typescript
let colors = ["red", "green", "blue"];
// 无法重新声明块范围变量"colors"。
let colors = ["red", "green", "blue"];
```

## 2. TypeScript 初体验

### 2.1 第一个 TypeScript 应用

> 需求：向服务端发送请求获取 ID 为 1 的任务对象。
>
> 目标：将 TypeScript 编译为 JavaScript。

------

- [ ] 安装 TypeScript 编译器，用于将 TypeScript 代码编译为 JavaScript 代码
- [ ] 安装 axios 库，用于发送请求
- [ ] 新建 index.ts 文件，用于编写代码
- [ ] 将 TypeScript 代码编译为 JavaScript 代码并执行

------

第一步：安装 TypeScript 编译器，用于将 TypeScript 代码编译为 JavaScript 代码

```bash
# 全局安装 typescript 编译器
npm install -g typescript
# 通过查看 typescript 编译器版本验证编译器是否安装成功
tsc -version
```

第二步：安装 axios 库，用于发送请求。

```bash
# 安装 axios 用于发送请求
npm install axios
```

第三步：新建 index.ts 文件用于编写代码，TypeScript 程序文件的后缀名为 `.ts`。

```typescript
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log(response.data);
});
```

第四步：将 TypeScript 代码编译为 JavaScript 代码并执行。

```bash
# 编译 index.ts 文件, 编译后在同级目录下会多出 index.js 文件, 该文件存储的就是编译后的 JavaScript 代码
tsc index.ts
# 执行 JavaScript 代码
node index.js
```

### 2.2 优化工作流

> 目标：监控 TypeScript 文件的变化，实现自动编译、自动执行代码

------

- [ ] 安装 nodemon、ts-node

- [ ] 创建应用启动脚本
- [ ] 通过应用启动脚本启动应用

------

```bash
# nodemon: 监听文件的变化, 当 TypeScript 文件内容发生变动后调用 ts-node
# ts-node: 1. 调用 tsc 将 TypeScript 代码编译为 JavaScript 代码 2. 调用 node 执行 JavaScript 代码
npm install -g nodemon ts-node
```

```json
"scripts": {
  "start": "nodemon index.ts"
},
```

```bash
npm start
```

### 2.3 体验类型带来的好处

需求：将任务ID、任务名称、任务是否完成分别输出到控制台中。

```typescript
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const todo = response.data;
  const id = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;
  console.log(`
    任务的ID是: ${id},
    任务的名称是: ${title},
    任务是否完成: ${finished}
  `);
});
```

以上代码执行后，输出的结果都是 undefined，发生了什么？

```bash
任务的ID是: undefined,
任务的名称是: undefined,
任务是否完成: undefined
```

通过查看得知，任务 ID 对应的属性名称是 id，任务名称对应的属性名称是 title，任务是否完成对应的属性名称是 completed，原来是属性名称写错了。

目前的问题是在书写代码的过程中并没有任何的错误提示，只有代码运行以后开发者才能够知道代码中存在错误，这个问题应该怎么解决呢？

显式告知 TypeScript 编译器 response.data 中存储的数据的类型，编译器会实时检测你写的代码是否符合类型上的要求。

以下代码展示的是通过 TypeScript 约束对象中可以存在的属性，当访问了不存在的属性时编译器会实时进行提示。

```typescript
import axios from "axios";

// interface 意为接口, 可以约束对象中可以有哪些属性, 约束对象中属性的类型 
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const todo = response.data as Todo;
  const id = todo.ID; // 属性"Id"在类型"Todo"上不存在。你是否指的是"id"?
  const title = todo.Title; // 属性"Title"在类型“Todo"上不存在。你是否指的是"title"?
  const finished = todo.finished; // 属性"finished"在类型"Todo"上不存在。
  console.log(`
    任务的ID是: ${id}, 
    任务的名称是: ${title}, 
    任务是否结束: ${finished}
  `);
});
```

以下代码展示的是通过 TypeScript 约束函数参数的类型，调用函数时如果传入的参数类型错误，编译器会实时进行提示。

```typescript
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(title, id, completed); // 类型"string"的参数不能赋给类型"number"的参数。
});

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
  任务的ID是: ${id},
  任务的名称是: ${title},
  任务是否结束: ${completed}
`);
}
```

## 3. 类型注释

在 TypeScript 中，开发者可以通过类型注释告知 TypeScript 编译器变量中存储的值的类型。

### 3.1 类型注释

```typescript
// 数值
let apples: number = 5;
// 字符串
let speed: string = "fast";
// 布尔
let hasName: boolean = true;

// 内置对象
let date: Date = new Date();
// 字符串数组
let colors: string[] = ["red", "green", "blue"];
// 数值数组
let numbers: number[] = [100, 200, 300];
// 布尔数组
let bools: boolean[] = [true, true, false];
// 对象字面量
let point: { x: number; y: number } = { x: 100, y: 200 };

// 自定义类
class Car {}
let car: Car = new Car();

// 函数
let logNumber: (n: number) => void;
logNumber = (n) => {
  console.log(n);
};

// undefined 
let nothing: undefined = undefined;
// null
let nothingMuch: null = null;
```

### 3.2 何时使用类型注释

TypeScript 编译器具备类型推断功能，在没有显式设置变量类型的情况下，编译器将变量初始值的类型作为该变量的类型。

```typescript
// let score: number
let score = 89;
```

也就是说当 TypeScript 编译器能够正确的推断出变量的类型时，开发者是不需要显式设置类型注释。

那么在哪些情况下 TypeScript 编译器不能正确推断出变量的类型呢？

如果变量声明后没有被立即初始化，TypeScript 编译器不能正确的推断出它的类型。

```typescript
// 此时 TypeScript 编译器认为它是 Any 类型，即在该变量中可以存储任意类型的数据。
// 该变量失去了 TypeScript 中的类型检查功能
// let anything: any;
let anything;
anything = 12;
anything = "hello";
anything = true;
```

```typescript
let colors = ["red", "green", "blue"];
// let foundColor: any
// 解决办法是要么设置初始值, 要么显式指定变量类型
let foundColor;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "green") {
    foundColor = true;
  }
}
```

```typescript
let foundColor: boolean;
```

当调用的函数返回值为 Any 类型时，我们应该使用类型注释显式声明它的类型。

```typescript
// let json: string;
let json = '{"name": "张三"}';
// let person: any => let person: {name: string}
let person = JSON.parse(json);
```

```typescript
// let json: string;
let json = "true";
// let isMarray: any => let isMarry: boolean
let isMarray = JSON.parse(json);
```

```typescript
// let json: string;
let json = "100";
// let num: any => let num: number
let num = JSON.parse(json);
```

```typescript
let json = '{"name": "张三"}';
let person: { name: string } = JSON.parse(json);
```

当变量可能有多个类型的值时。

```typescript
let numbers = [-10, -1, 20];
let target = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // 不能将类型"number"分配给类型"boolean"
    target = numbers[i];
  }
}
```

```typescript
let target: boolean | number = false;
```


### 3.3  函数类型注释

通过类型注释告诉 TypeScript 编译器函数将要接收的参数的类型，函数将要返回的值的类型。

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
add(10, 20);
```

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

函数类型推断：TypeScript 编译器会试图推断函数返回值的类型，函数参数的类型 TypeScript 是推断不出来的。

注意：使用函数返回值类型推断时，在编写函数内部代码时就失去了类型检测功能，所以函数返回值类型推荐明确指定。

```typescript
// const add: (a: number, b: number) => number
const add = (a: number, b: number) => {
  return a + b;
};
```

```typescript
// const add: (a: number, b: number) => void
const add = (a: number, b: number) => {};
```

```typescript
// const add: (a: number, b: string) => string
const add = (a: number, b: string) => {
  return a + b;
};
```

```typescript
// const add: () => string
const add = () => {
  return "a";
};
```

```typescript
// const find: (name: string) => string | false
const find = (name: string) => {
  if (name) {
    return name;
  } else {
    return false;
  }
};
```

如果函数的返回值是 undefined 或者 null，可以指定函数的返回值为 void。

```typescript
const logger = (message: string): void => {
  console.log(message);
  // return undefined;
  // return null;
};
```

如果一个函数永远都不会有返回值，可以指定函数的返回值类型为 never。

```typescript
const throwError = (message: string): never => {
  throw new Error("error");
};
```

```typescript
// const throwError: (message: string) => void
const throwError = (message: string) => {
  if (!message) throw new Error("error");
};
```

在定义函数时，如果形参被定义为解构语法，则使用下面的方式为函数形参设置类型。

```typescript
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date, weather);
};

const today = {
  date: new Date(),
  weather: "sunny",
};

logWeather(today);
```

```typescript
const profile = {
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

### 3.4 数组类型注释

通过为数组添加类型注释，可以对数组中的元素进行类型约束。

```typescript
// const carMakers: any[]
const carMakers = [];
```

```typescript
// const carMakers: string[]
const carMakers = ["宝马", "比亚迪"];
```

```typescript
const carMakers: string[] = [];
```

```typescript
const carMakers: string[][] = [["宝马", "比亚迪"]];
```

```typescript
const importDates: (string | Date)[] = [new Date(), "2022-08-24"];
importDates.push(new Date());
importDates.push("2040-04-11");
// 类型"number"的参数不能赋给类型"string | Date"的参数
importDates.push(100);
```

为什么要对数组中的元素进行类型约束？

1. 从数组中取值时可以帮助 TypeScript 编译器进行类型推断

   ```typescript
   // const value: string
   const value = carMakers[0];
   ```

   ```typescript
   // const value: string
   const value = carMakers.pop();

2. 防止我们向数组中添加不兼容的值

   ```typescript
   // 类型"number"的参数不能赋给类型"string"的参数。
   carMakers.push(100);
   ```

3. 在使用数组方法时可以帮助 TypeScript 编译器进行类型推断

   ```typescript
   carMakers.map((car: string): string => {
     return car.toLocaleUpperCase();
   });
   ```

### 3.5 元组

观察下列代码中存在的问题。

在 employee 数组中我们约定在数组中下标为0的位置存储员工姓名，在下标为1的位置存储员工的年龄。

```typescript
var employee = ["张三", 20];
employee[0] = 30;
employee[1] = "李四";
```

以上代码存在的问题是 employee 数组没有被类型系统约束，没有约束每个数组元素对应的类型，导致在错误位置修改元素值时没有错误提示。

元组是 TypeScript 引入的一种新数据类型，它像数组一样工作但是有一些额外的限制：元组中元素个数是固定，元组中元素类型已知。

元组用来存储一些以特定顺序出现且相关关联的数据，通过元组可以约束元素个数及元素类型。

```typescript
const employee: [string, number] = ["张三", 20];
// 不能将类型"number"分配给类型"string"
employee[0] = 30;
// 不能将类型"string"分配给类型"number"
employee[1] = "李四";
```

```typescript
// 使用元组存储 RGB 颜色值及透明度
var bgColor: [number, number, number, number] = [0, 255, 255, 0.5];
```

```typescript
// 创建元组数组(二维数组)
var employees: [number, string][] = [
  [1, "Steve"],
  [2, "Tom"],
];
```

### 3.6 接口

接口用于对复杂的数据结构进行类型描述，TypeScript 编译器通过接口定义的规范对值进行类型检查。

先来看一段代码，代码没有使用接口，观察它里面存在什么问题。

```typescript
function printPerson(person: { name: string; age: number; isMarray: boolean }) {
  console.log(person);
}
```

以上代码中存在的问题是约束函数参数类型的代码被写在了函数参数的后面，导致代码变得冗长，约束类型的代码也不利于复用。

通过接口可以像声明变量一样声明约束类型的代码，从而使代码看起来更加清晰，使代码可以进行复用。

```typescript
interface Person {
  name: string;
  age: number;
  isMarray: boolean;
}

function printPerson(person: Person) {
  console.log(person);
}
```

接口中定义的规范默认情况下都是必须被实现的，也就是说你定义的变量的值必须符合接口规范，少一个都不行。

```typescript
interface Person {
  name: string;
  age: number;
  isMarray: boolean;
  summary(): string;
}

function printPerson(person: Person) {
  console.log(person);
}

const person = {
  name: "张三",
  age: 20,
  isMarray: false,
};

// 类型"{ name: string; age: number; isMarray: boolean; }"的参数不能赋给类型"Person"的参数
// 类型"{ name: string; age: number; isMarray: boolean; }"中缺少属性 "summary", 但类型"Person"中需要该属性
printPerson(person);
```

在实现了接口规范的情况下，规范以外的值默认是允许存在的。

```typescript
interface Reportable {
  summary(): string;
}

function printSummary(item: Reportable): void {
  console.log(item.summary());
}

const person = {
  name: "张三",
  summary() {
    return `您好, 我的名字叫${this.name}`;
  },
};

const drink = {
  color: "棕色",
  summary() {
    return "我喝的咖啡是${brow}的";
  },
};

printSummary(person);
printSummary(drink);
```

### 3.7 类

#### 3.7.1 类与对象

在现实世界中，类表示的是类别、分类、归类，是物以类聚的类，我们经常根据事物的特征将其进行分类，比如鸡鸭鹅狗猫，它们都属于动物的类别，再比如汽车、火车、高铁、飞机，它们都属于交通工具的类别。

在程序世界中，仍然使用类来描述一类具有相同特征的事物。

```typescript
class Vehicle {
  drive() {
    console.log("run");
  }
  honk() {
    console.log("didi");
  }
}
```

类是抽象的不代表具体的事物，通过类可以创建对象，对象才代表具体类别下的事物。

```typescript
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
```

类和对象就是现实世界中图纸与房子的关系，图纸是对房子的描述，不是具体的房子，根据图纸创建出来的房子才是真实的。

可以将类理解为生成对象的"模板"，通过类可以批量生成对象。

#### 3.7.2 继承

在现实世界中为事物进行分类，通常会对类别进行细化，比如汽车分类，在这个分类下还会包含轿车和面包车。这种细化关系在程序世界中应该如何表示呢？

在程序世界中，我们会分别创建汽车分类，轿车分类、面包车分类。在汽车分类下描述所有汽车的通用特征，在细化分类下只描述该分类独有的特征。

```typescript
// 汽车分类
class Vehicle {
  drive() {
    console.log("run");
  }
}
```

```typescript
class Car {
  brand = "BMW";
}
```

```typescript
class Van {
  brand = "五菱宏光";
}
```

虽然我们目前对类别进行了细化，但随之也出现了问题，在使用类创建对象时，比如创建轿车对象，在创建出来的轿车对象中只包含了轿车的独有特征，没有包含汽车的通用特性，就是说创建出来的轿车对象是不完整的对象，完整的对象应该是既包含汽车的通用特征又包含轿车的独有特性。

```typescript
const van = new Van();
console.log(van); // { brand: "五菱宏光"}
```

可以使用继承关系解决上述问题。既然汽车分类包含了细化分类的通用特征，那么汽车分类就被叫做父类，下面的细化分类就被叫做子类，子类通过继承父类就可以拥有汽车分类中的通用特征了，再加上子类中定义了其独有的特征，最终通过细化分类创建出来的对象就是拥有完整特性的对象了。

```typescript
class Car extends Vehicle {
  brand = "BMW";
}

var car = new Car(); // {brand: "BMW", drive: Function}
```

子类在继承父类后，还可以通过重写父类方法对功能进行扩展。

```typescript
class Car extends Vehicle {
  drive() {
    console.log("run run run");
  }
}
```

#### 3.7.3  访问权限修饰符

通过访问权限修饰符可以指定类中的属性、方法能够在哪些范围内被使用。

| 修饰符    | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| public    | 被 public 关键字修饰的类属性和类方法可以在任何地方使用 (当前类、子类、实例) |
| private   | 被 private 关键字修饰的类属性和类方法只能在当前类中使用      |
| protected | 被 protected 关键字修饰的类属性和类方法可以在当前类和子类中使用 |

##### 1. public

类属性和类方法在不加任何权限修饰符的情况下，它就是可以在任何地方被访问的，也就是说 public 修饰符是可以被省略的。

```typescript
class Vehicle {
  constructor() {
    // 1. 在本类中的其他方法中使用
    this.drive();
  }
  public drive() {
    console.log("run");
  }
}

class Car extends Vehicle {
  drive() {
    // 2. 在子类中使用
    super.drive();
  }
}

const car = new Car();
// 3. 在实例对象中使用
car.drive();
```

##### 2. private

```typescript
class Vehicle {
  constructor() {
    // 在本类中的其他方法中使用
    this.drive();
  }
  private drive() {
    console.log("run");
  }
}

class Car extends Vehicle {
  drive() {
    // 属性"drive"为私有属性，只能在类"Vehicle"中访问
    super.drive();
  }
}

const vehicle = new Vehicle();
// 属性"drive"为私有属性，只能在类"Vehicle"中访问
vehicle.drive();
```

##### 3. protected

```typescript
class Vehicle {
  constructor() {
    // 1. 在本类中的其他方法中使用
    this.drive();
  }
  protected drive() {
    console.log("run");
  }
}

class Car extends Vehicle {
  drive() {
    // 2. 在子类中使用
    super.drive();
  }
}

const vehicle = new Vehicle();
// 属性"drive"受保护, 只能在类"Vehicle"及其子类中访问
vehicle.drive();
```

#### 3.7.4 构造函数参数

```typescript
class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}

const vehicle = new Vehicle("orange");
vehicle.color;
```

```typescript
class Vehicle {
  constructor(public color: string) {}
}

const vehicle = new Vehicle("orange");
vehicle.color;
```

```typescript
class Vehicle {
  constructor(public color: string) {}
}

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }
}

const car = new Car(4, "orange");
car.wheel;
car.color;
```

## 4. 地图标记案例

需求：随机创建用户和公司，并将他们的位置标注到地图中。

### 4.1 案例准备

#### 1. 安装依赖

[parcel](https://parceljs.org/) 是前端构建工具，类似 webpack，parcel 的最大特点是打包速速非常快而且零配置开箱即用。

```bash
npm install parcel@2.4.1 -g 
```

使用 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) 可以随机创建模拟数据，当前案例中用于随机生成用户和公司信息。

```bash
npm install @faker-js/faker@6.1.1
```

[@types/google.maps](https://www.npmjs.com/package/@types/google.maps) 是谷歌地图的 TS 类型声明文件。

```bash
npm install @types/google.maps@3.48.3
```

#### 2. 创建应用

```bash
# 创建 maps 目录并切换至 maps 目录
mkdir maps && cd maps
# 创建项目工程文件
npm init -y
# 详见应用源码目录
mkdir src
# 创建应用页面入口
touch index.html
# 切换至应用源码目录并创建应用逻辑入口
cd src && touch index.ts
```

```html
<!-- 在应用页面入口文件中导入应用逻辑入口文件 -->
<!-- 当 parcel 检测到引入的是 TS 文件时, parcel 会先将其转换为 JS, 再将 TS 文件替换为转换后的 JS  -->
<script src="./src/index.ts" type="module"></script>
```

```bash
# 开启 dev server, 运行应用
parcel index.html
```

### 4.2 创建用户

```typescript
// src/User.ts
import faker from "@faker-js/faker";

export class User {
  // 姓名
  name: string;
  // 位置
  location: {
    // 纬度
    lat: number;
    // 经度
    lng: number;
  };
  constructor() {
    // 随机创建用户姓名
    this.name = faker.name.firstName();
    // 随机创建用户位置
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
```

```typescript
// src/index.ts
// 导入 User 类
import { User } from "./User";
// 创建用户
const user = new User();
// 测试:在控制台中输出用户信息
console.log(user);
```

### 4.3 创建公司

```typescript
// src/Company.ts
import faker from "@faker-js/faker";

export class Company {
  // 公司名称
  companyName: string;
  // 公司口号
  catchPhrase: string;
  // 公司位置
  location: {
    // 纬度
    lat: number;
    // 经度
    lng: number;
  };
  constructor() {
    // 随机创建公司名称
    this.companyName = faker.company.companyName();
    // 随机创建公司口号
    this.catchPhrase = faker.company.catchPhrase();
    // 随机创建公司位置
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
```

```typescript
// src/index.ts
// 导入 Company  类
import { Company } from "./Company";
// 创建公司
const company = new Company();
// 测试: 在控制台中输出公司信息
console.log(company);
```

### 4.4 创建地图

<img src="./images/06.png" />

第一步：在应用页面入口文件中添加 Google Map API。

```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"></script>
```

第二步：在应用入口文件中创建用户放置地图的容器。

```html
<style>
  html, body, #map {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
<div id="map"></div>
```

第三步：创建地图

```typescript
new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
```

### 4.5 封装地图类

目标：创建 Map 类，在类中封装和地图的相关的业务逻辑，以后在创建地图时，只需要对该类进行实例化即可。

```typescript
// src/Map.ts
export class Map {
  // 用于存储地图实例
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    // 创建地图
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
```

```typescript
// src/index.ts
import { Map } from "./Map";
// 创建地图
new Map("map");
```

### 4.6 地图标记

<img src="./images/05.png" />

```typescript
// src/Map.ts
import { Company } from "./Company";
import { User } from "./User";

export class Map {
  // 在地图中标记用户位置
  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  // 在地图中标记公司位置
  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
```

```typescript
// src/index.ts
const map = new Map("map");
map.addUserMarker(user);
map.addCompanyMarker(company);
```

### 4.7 消除重复代码

在目前的代码中，addUserMarker 和 addCompanyMarker 两个方法中的代码是一模一样的，为消除重复代码，现决定将两个方法进行合并。

```typescript
import { Company } from "./Company";
import { User } from "./User";

export class Map {
  // 在地图中标记位置
  addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
```

因为在 addMarker 方法中，使用的是 User 实例和 Company 实例中的公共属性 location，所以将参数类型设置为 User | Company 是可行的。

###  4.8 增加程序扩展性

虽然重复代码被消除了，但是这不利于程序的扩展性，如果要在地图中标记其他物体的位置信息，那么就只能在参数后面不断的罗列其他物体的类型信息了。

```typescript
addMarker(mappable: User | Company | Park | School) {}
```

解决问题的方式是定义通用的类型接口，不论是什么类型只要满足接口规范即可，从而解决程序扩展性问题。

```typescript
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
```

```typescript
addMarker(mappable: Mappable) {}
```

在目前的代码中，不论是 User 类的实例还是 Company 类的实例，都是满足 Mappable 接口规范的。

### 4.9 创建标记弹框

```typescript
// src/Map.ts
export class Map {
  // 在地图中标记位置
  addMarker(mappable: Mappable) {
    // 创建标记
    const marker = new google.maps.Marker();
    // 为标记绑定点击事件
    marker.addListener("click", () => {
      // 创建弹窗
      const infoWindow = new google.maps.InfoWindow({
        content: "Hello I am marker content",
      });
      // 打开弹框并指定弹框在哪个地图的哪个的标记的位置上弹出
      infoWindow.open(this.googleMap, marker);
    });
  }
}
```

### 4.10 使用接口约束类

```typescript
// src/Map.ts
export interface Mappable {
  markerContent(): string;
}
```

```typescript
// src/Map.ts
const infoWindow = new google.maps.InfoWindow({
  content: mappable.markerContent(),
});
```

```typescript
// src/User.ts
import { Mappable } from "./Map";

export class User implements Mappable {
  markerContent(): string {
    return `用户名: ${this.name}`;
  }
}
```

```typescript
// src/Company.ts
import { Mappable } from "./Map";

export class Company implements Mappable {
  markerContent(): string {
    return `
      <h2>公司名称: ${this.companyName}</h2>
      <h4>公司口号: ${this.catchPhrase}</h4>
    `;
  }
}
```

## 5. 排序案例

### 5.1 概述

目标：实现一个通用的排序算法，使它能够对数值数组进行排序、能够对字符串进行排序等。

```typescript
// 数值数组排序
[10, 5, 18, -3] => [-3, 5, 10, 18]
```

```typescript
// 字符串排序
"PoaJB" => "aBJoP"
```

### 5.2 配置编译器

```bash
# 创建项目目录
mkdir sort
# 创建项目源码目录
cd sort && mkdir src build
# 创建 ts 配置文件
tsc --init
```

```json
{
  "compilerOptions": {
    // 配置应用源码目录
    "rootDir": "./src",
    // 配置编译输出目录
    "outDir": "./build",
  }
}
```

```bash
# 监控文件变化, 重新编译
tsc -w
```

### 5.3 并行编译配置

```bash
npm init -y
npm install nodemon concurrently
```

```json
"scripts": {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
}
```

```bash
npm start
```

### 5.4 复习冒泡排序(升序)

核心思想：数组中的值进行两两比较，如果第一个值比第二个值大，将两个值交换位置。

比较轮数: 数组长度 - 1

每一轮比较次数: 数组长度 - 1 - i

```typescript
原始值 => [10, 5, 18, -3]
第一轮 => [5, 10, -3, 18] => 3次
第二轮 => [5, -3, 10, 18] => 2次
第三轮 => [-3, 5, 10, 18] => 1次
```

```typescript
const arr = [10, 5, 18, -3];
// 外层循环控制比较的轮数
for (var i = 0; i < arr.length - 1; i++) {
  // 内层循环控制比较的次数
  for (var j = 0; j < arr.length - 1 - i; j++) {
    // 将数组中的值进行两两比较
    if (arr[j] > arr[j + 1]) {
      // 交换位置
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
```

### 5.5 创建排序类

```typescript
class Sorter {
  // 接收排序值
  constructor(public collection: number[]) {}
  // 排序方法
  sort(): void {
    const { length } = this.collection;
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          var leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 5, 18, -3]);
sorter.sort();
console.log(sorter.collection);
```

我们已经初步实现了排序, 但目前它只能排序数值数组，我们希望如果 collection 是字符串，sort 方法依然可以进行排序。

但是字符串是不可变数据结构，不能通过交换字符串中的字符位置对字符串进行排序, 所以以上排序方法并不适合字符串。

```typescript
var string = "Xaa";
// 编译器提示: 类型 "String" 中的索引签名仅允许读取。
string[0] = "Y";
```

### 5.6  类型守卫

在以上代码中，将 collection 参数的类型指定为联合类型，即参数既可以数值数组也可以是字符串。

在排序方法中使用类型守卫对不同的类型进行不同的处理，即在进行排序之前先判断数据类型，然后再决定用什么方式进行排序。

```typescript
class Sorter {
  constructor(public collection: number[] | string) {}
  sort(): void {
    // 由于数组和字符串都有 length 属性, 所以此处代码没有问题
    // 就是说在 sort 方法中, 默认情况下只能调用数组和字符串下的公有的属性和方法
    const { length } = this.collection;
    // 通过类型守卫明确数据类型后再进行处理
    // 如果 collection 是数组类型
    if (this.collection instanceof Array) {
      // 针对数组进行处理, 可以调用数组下面的属性和方法
    } else if (typeof this.collection === "string") {
      // 针对字符串进行处理, 可以调用字符串下面的属性和方法
    }
  }
}
```

虽然通过类型守卫可以让 Sorter 类支持多种数据排序，但这种方式并不理想。如果以后要想对其它数据类型排序，我们不得不回到 Sorter 类中，在参数中继续添加联合类型，在 sort 方法中继续编写判断数据类型的方法，而且每种数据类型排序中大概率会有重复代码。

### 5.7 创建数值数组排序类

通过对排序逻辑进行拆分可以让 Sorter 类支持多种数据结构的排序，那么如何对排序逻辑进行拆分呢？

排序逻辑可以拆分为通用排序逻辑和针对不同数据结构的特定排序逻辑，两种类别的逻辑要被编写在不同的类中。

通用的排序逻辑编写在 Sorter 类中，不同数据结构的特定排序逻辑编写在用于排序特定数据结构的排序类中。

对于数值数组可以为它创建 NumbersCollection 排序类，对于字符串可以为它创建 CharacterCollection 排序类。

冒泡排序的通用逻辑是指控制比较轮数的第一层for循环和控制比较次数的第二层for循环，该逻辑应该放在 Sort 类中。

冒泡排序的非通用逻辑是指数据两两比较的逻辑，数据交换位置的逻辑，获取数据长度的逻辑，这是特定数据结构排序类中要编写的代码。

```typescript
// src/NumbersCollection.ts
// 创建数值数组排序类, 提供数值数组的两两比较逻辑和数据交互逻辑以及数组长度
export class NumbersCollection {
  // 接收数值数组
  constructor(public data: number[]) {}
  // 返回数值数组的长度
  get length(): number {
    return this.data.length;
  }
  // 声明比较方法
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  // 声明交换元素位置的方法
  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
```

```typescript
// src/Sorter.ts
// 创建排序类, 提供公共的排序逻辑
import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  // 接收其他数据类的实例对象
  constructor(public collection: NumbersCollection) {}
  // 排序方法
  sort(): void {
    // 获取数据长度, 根据长度进行遍历
    const { length } = this.collection;
    // 根据数据长度定义比较轮数
    for (var i = 0; i < length - 1; i++) {
      // 根据数据长度定义比较次数
      for (var j = 0; j < length - 1 - i; j++) {
        // 使用数据类实例提供的比较逻辑进行比较
        if (this.collection.compare(j, j + 1)) {
          // 实例数据类实例提供的交换数据位置的方法对数据位置进行交换
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
```

```typescript
// src/index.ts
// 导入数值数组排序类
import { NumbersCollection } from "./NumbersCollection";
// 导入排序类
import { Sorter } from "./Sorter";

// 使用数值数组排序类创建数值数组排序实例
var numbersCollection = new NumbersCollection([5, 10, -3, 18]);
// 创建排序类实例，并传入数值数组排序类实例
var sorter = new Sorter(numbersCollection);
// 调用排序方法对数值数组进行排序
sorter.sort();
// 输出排序结果
console.log(numbersCollection.data);
```

### 5.8 定义排序接口

在以上的代码中存在一个问题，就是 Sorter 类中的 collection 参数的类型被固定为了 NumbersCollection，其他数据类型的排序类实例传递不进来了。

解决该问题的方法是定义一个通用接口规范用于约束 collection 参数的类型，只要其他的数据类型符合该接口，就可以使用 Sorter 类进行排序。

```typescript
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // 在实例化 Sorter 类时传递的参数的类型必须符合 Sortable 接口规范
  constructor(public collection: Sortable) {}
}
```

### 5.9 创建字符串排序类

```typescript
// src/CharacterCollection.ts
// 创建字符串排序类
export class CharacterCollection {
  // 接收要排序的字符串
  constructor(public data: string) {}
  // 返回字符串长度
  get length(): number {
    return this.data.length;
  }
  // 比较
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }
  // 位置交换
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join("");
  }
}
```

提示：字符串比较内部使用的是 Unicode 编码，根据编码的大小决定排序结果。

```typescript
var string = "Xaa";
console.log(string.charCodeAt(0)); // 88
console.log(string.charCodeAt(1)); // 97
```



```typescript
import { CharacterCollection } from "./CharacterCollection";
import { Sorter } from "./Sorter";

var characters = new CharacterCollection("zyx");
var sorter = new Sorter(characters);
sorter.sort();
console.log(characters.data);
```

### 5.10 简化排序类使用方式

目前在对数据进行排序时，需要分别实例化数据排序类和 Sorter 类，不是特别友好。

如果仅实例化数据类就可以对数据进行排序就比较理想了，要实现这个目标只需要让数据类继承 Sorter 类即可。

```typescript
// 以下代码为最终的调用方式
var numbersCollection = new NumbersCollection([5, 10, -3, 18]);
numbersCollection.sort();
console.log(numbersCollection.data);
```

```typescript
// src/NumbersCollection.ts
import { Sorter } from "./Sorter";
// 数据类继承 Sorter 类, 让数据类型拥有 sort 方法
export class NumbersCollection extends Sorter {
  // 接收数值数组
  constructor(public data: number[]) {
    super();
  }
  // 返回数值数组的长度
  get length(): number {
    return this.data.length;
  }
  // 声明比较方法
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  // 声明交换元素位置的方法
  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
```

当数据排序类继承了 Sorter 类以后，Sorter 类就不需要被直接实例化了，所以也不需要接收 collection 参数了，也不需要 Sortable 接口了。

在去除了 collection 参数以后，在 sort 方法中，通过 this 获取 length、compare、swap。

因为数据排序类继承了 Sorter 类，其实就是将父类中的方法添加到了子类的实例对象中，sort 方法在执行是， this 指向子类实例对象。

```typescript
// src/Sorter.ts
export class Sorter {
  // 排序方法
  sort(): void {
    // 获取数据长度, 根据长度进行遍历
    const { length } = this;
    // 根据数据长度定义比较轮数
    for (var i = 0; i < length - 1; i++) {
      // 根据数据长度定义比较次数
      for (var j = 0; j < length - 1 - i; j++) {
        // 使用数据类实例提供的比较逻辑进行比较
        if (this.compare(j, j + 1)) {
          // 实例数据类实例提供的交换数据位置的方法对数据位置进行交换
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

但是对于以上代码 TypeScript 编译器会报错，因为它在解析 Sorter 类时没有找到 length、compare、swap，它是期望本类中有这些属性和方法的。

可以使用抽象类解决编译器报错问题，那么到底什么是抽象类？

### 5.11 抽象类

在抽象类的方法中可以调用本类中不存在的属性或者方法，但是这些不存在的属性或方法需要被定义为抽象方法，通过这种方式告诉 TypeScript 编译器虽然当前类中没有这些方法，但是在继承了抽象类的子类中一定是有这些属性或方法的，这样 TypeScript 编译器就不会报错了。

```typescript
// abstract 关键字用于定义抽象类和抽象类成员
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  
  sort() {}
}
```

抽象类是专供子类继承使用的，继承了抽象类的类必须实现抽象类中定义的属性和方法，通过抽象类可以约束子类中必须实现特定的属性和方法。

如果子类在继承抽象类以后，没有实现抽象类中要求的属性和方法，TypeScript 就会在子类中报错。

抽象类不能被直接实例化，这也是符合我们的场景的，因为 Sorter 类目前不再需要被直接实例化。

```typescript
// src/CharacterCollection.ts
import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  // 接收要排序的字符串
  constructor(public data: string) {
    super();
  }
}
```

```typescript
// src/index.ts
var characters = new CharacterCollection("zyx");
characters.sort();
console.log(characters.data);
```

在当前案例中，我们通过继承的方式从父类中获取了公共的 sort 方法，因为 sort 方法在执行后要调用子类的一些特定方法，所有又通过抽象类的方法约束了子类必须实现的一些属性和方法。

## 6. 统计数据案例

### 6.1 概述

需求：从 CSV 格式的文件中读取足球比赛信息，并将它转换为程序支持的数据格式，分析数据（比如找出哪支球队赢得最多或者输的最多、每场比赛的平均进球数），生成报告（在控制台或其他地方输出分析结果）。

<img src="./images/07.png" align="left" width="62%"/>

H： 表示主队胜利、A：表示客队胜利、D：表示平局

### 6.2 项目设置

```bash
mkdir stats && cd stats
mkdir src build
npm init -y
tsc --init
npm install nodemon concurrently @types/node
```

```json
// tsconfig.json
{
  "compilerOptions": {
    // 配置应用源码目录
    "rootDir": "./src",
    // 配置编译输出目录
    "outDir": "./build",
  }
}
```

```json
// package.json
"scripts": {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
}
```

### 6.3 需求 -> CSV 数据解析

```typescript
// src/index.ts
import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));
```

```typescript
// 解析结果
const matches = [
  ["27/10/2021", "Watford", "Huddersfield", "3", "0", "H", "M Dean"],
  ["28/10/2021", "Burnley", "Chelsea", "0", "4", "A", "C Pawson"],
];
```

### 6.4 需求 -> 求曼联赢赛的次数

计算曼联球队(Man United)赢得比赛的次数，无论曼联球队是主场(H)还是客场(A)。

```typescript
// src/index.ts
let manUnitedWins = 0;

for (let match of matches) {
  // 曼联球队为主场赢得比赛的情况
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
    // 曼联球队为客场赢得比赛的情况
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}
```

### 6.5 提升程序可阅读性

#### 6.5.1 问题

在以上代码中，在判断曼联球队是否赢得比赛时，我们使用了 H 和 A 进行判断，这个代码是我们刚刚写完的，我们完全知道它代表什么含义，H 表示主场球队赢得了比赛，A 表示客场球队赢得了比赛。但是，当另外一个程序员来看这个代码的时候，他并不清楚 H 和 A 分别代表什么，或者在将来的某一个时间点，我们自己再回来看这个代码的时候，也不一定清楚的记得它们的含义。所以从代码的可阅读角度来看，直接使用字符串 H 和 A 进行判断是不明智的，它使代码的阅读变得困难。

或许我们可以声明两个变量来存储H和A，让变量的名字变得有含义，通过变量进行判断来提高程序的可阅读性，像下面这样。

```typescript
const homeWin = "H";
const awayWin = "A";

if (match[1] === "Man United" && match[5] === homeWin) {
  manUnitedWins++;
} else if (match[2] === "Man United" && match[5] === awayWin) {
  manUnitedWins++;
}
```

通过以上的更改确实提高了代码的可阅读性但还是存在一个问题，比赛结果除了有H、A、还有 D，就是表示平局的D。在以上代码中由于目前没有用到 D，所以就没写，但是没写并不等于没有，当另外一个程序员来看这个代码的时候，他并不知道还有 D 这个比赛结果，这也是不尽人意的地方。那好，那我们就将 D 写在哪里，像下面这样。

```typescript
const homeWin = "H";
const awayWin = "A";
const draw = "D";
```

虽然将 D 写出来，其他人能够猜出比赛结果可能有三个，但由于 draw 变量没有被使用，这时别人可能认为它是无用的代码，很可能随手就把它删掉了，这也是代码中存在的潜在问题。

#### 6.5.2  枚举

在 JavaScript 中，以上问题的解决方案是将三种比赛结果放在一个对象中，这样既提高了代码的可阅读性，又完整的表述了比赛的三种结果。

```typescript
const matchResult = {
  homeWin: "H",
  awayWin: "A",
  draw: "D",
};

if (match[1] === "Man United" && match[5] === matchResult.homeWin) {}
else if (match[2] === "Man United" && match[5] === matchResult.awayWin) {}
```

在 TypeScript 中，可以使用枚举解决上述问题。

枚举表示可能的结果，是一组密切相关的值，可以限定值的范围，比如比赛结果，考试成绩，颜色种类，性别等等。

所以从代码可阅读的角度出发，以上问题的最佳解决方案就是使用枚举， 对象并没有明确的限定值的范围的含义。

枚举在编译后本质上仍然是 JavaScript 对象，但是在源码中它提升了代码的可阅读性。

```typescript
enum MatchResult {
  homeWin = "H",
  awayWin = "A",
  draw = "D",
}

if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {} 
else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {}
```

枚举也可以作为类型检查的依据。

```typescript
const result: "A" | "H" | "D" = "A";

function printMatchResult(): MatchResult {
  switch (result) {
    case "H":
      return matchResult.homeWin;
    case "A":
      return matchResult.awayWin;
    case "D":
      return matchResult.draw;
  }
}
```

#### 6.5.3 何时使用枚举

| 场景                     | 使用 | 不使用 |
| ------------------------ | ---- | ------ |
| 消息的阅读状态           | YES  |        |
| 从1750年到现在的年份列表 |      | NO     |
| 菜单中饮料的种类         | YES  |        |
| 文章列表的所有标题       |      | NO     |
| 服务器端的电影分类       |      | NO     |
| 颜色选择器中的颜色       | YES  |        |

### 6.6 提升程序可复用性

#### 6.6.1 概述

在当前代码中仍然存在的问题是，数据的来源代码是硬编码的，是读取的本地CSV文件，如果将来代码中的数据来源发生变化，比如更改为向服务器发送请求获取足球数据，此时我们不得不删除所有和当前数据来源相关的代码，重新编写新的数据来源代码，这不仅浪费时间，而且对于代码的重用是非常不利的，也许将来我们仍然要读取本地的CSV文件呢，难道要重写再写一遍吗？

解决上述问题的方法是将不同的获取数据来源的代码编写到不同的类中，比如读取 CSV 文件的类，向服务端发送请求获取数据的类，使用什么数据源就实例化对应的类就可以了，就算更改数据源也仅仅是删除少量的和实例化相关的代码，所有的核心代码都还在，将来要重新使用该数据源，只需要重新实例化就行了。

#### 6.6.2 创建CSV文件读取器类

```typescript
// CsvFileReader.ts
import fs from "fs";

export class CsvFileReader {
  // 用于存储 CSV 文件读取结果
  data: string[][] = [];
  // 接收 CSV 文件名称
  constructor(public filename: string) {}
  // 读取 CSV 文件内容并对内容进行转换
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
```

```typescript
// src/index.ts
import { CsvFileReader } from "./CSVFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

for (let match of reader.data) {}
```

### 6.7  需求 -> 行数据类型转换

在目前的代码中，比赛信息中的每一个字段的类型都是字符串，接下来我们要做的事情就是将比赛信息的每一个字段转换为它应是的类型。

第一步：定义一个辅助方法，用于将日期字符串转换为日期对象。

```typescript
// src/utils.ts
// 将日期字符串转换为日期对象
export function dateStringToDate(dateString: string): Date {
  const dateParts = dateString
    .split("/")
    .map((value: string): number => parseInt(value));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
```

第二步：将比赛结果枚举定义在单独的模块文件中，用于复用。

```typescript
// src/matchResult.ts
export enum MatchResult {
  homeWin = "H",
  awayWin = "A",
  draw = "D",
}
```

```typescript
// src/index.ts
import { MatchResult } from "./matchResult";
```

第三步：通过元组约束比赛信息中的每一个字段的类型。

```typescript
type MatchData = [Date, string, string, number, number, MatchResult, string];
```

第四步：将比赛信息中的每一个字段转换为它应有的类型。

```typescript
// src/CsvFileReader.ts
import { MatchResult } from "./matchResult";
import { dateStringToDate } from "./utils";

export class CsvFileReader {
  // 用于存储 CSV 文件读取结果
  data: MatchData[] = [];
  // 读取 CSV 文件内容并对内容进行转换
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
```

通过元组限定了类型以后，从二维数组中获取的值，TypeScript 编译器可以自动推断出它的类型。

```typescript
// (property) 0: Date
reader.data[0][0];
```

### 6.8  CsvFileReader 类重构

#### 6.8.1  概述

现在我们继续看 CsvFileReader 这个类，它目前存在的问题是不可复用，因为在这个类中 data 属性的数据类型被固定了，这个数据类型是针对 football 这个 CSV 文件的，也就是说 CsvFileReader 类目前只能读取 football.csv 文件，换一个文件程序将会运行失败，因为会产生类型不匹配的问题。所以接下来我们要做的事情就是重构这个类，使它变得可复用，让它可以读取任何 CSV 文件。

#### 6.8.2 ① 基于继承的重构

##### 1. 抽象类

为不同的 CSV 文件创建不同的读取类，在特定读取类中放特定逻辑，在 CsvFileReader 类中放公共逻辑。 

将 CsvFileReader 变成抽象类，在抽象类中创建抽象方法 mapRow，其他类在继承该类时必须实现该方法，用于实现各自的数据格式转换的逻辑。

```typescript
// src/CsvFileReader.ts
export abstract class CsvFileReader {
  // 用于存储 CSV 文件读取结果
  data: any[] = [];
  // 接收 CSV 文件名称
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): any;

  // 读取 CSV 文件内容并对内容进行转换
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
```

```typescript
// src/MatchReader.ts
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./matchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResult,
      row[6],
    ];
  }
}
```

##### 2. 泛型

在以上代码中我们又遇到了一个问题，CsvFileReader 类中的 data 属性的类型以及 mapRow 方法的返回值的类型都无法指定了。

以上问题可以通过 TypeScript 中的泛型进行解决，那么什么是泛型呢？

泛型是指将类型作为参数进行传递，用于解决代码复用问题。泛型可以应用于函数，可以应用于类。

在定义函数时，函数参数的类型可暂不指定，参数的具体类型可以在调用函数时决定，在调用函数时可以将类型传递进函数以达到类型约束的目的。

```typescript
class HoldString {
  constructor(public data: string) {}
}

class HoldNumber {
  constructor(public data: number) {}
}

new HoldString("abc");
new HoldNumber(123);
```

```typescript
class HoldAnything<TypeOfData> {
  constructor(public anything: TypeOfData) {}
}

new HoldAnything<string>("string");
new HoldAnything<number>(123);
```

通过泛型解决 CsvFileReader 类中的 data 属性类型的设置问题。

```typescript
// src/CsvFileReader.ts
export abstract class CsvFileReader<T> {
  // 用于存储 CSV 文件读取结果
  data: T[] = [];
  abstract mapRow(row: string[]): T;
}
```

```typescript
// src/MatchReader.ts
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {}
}
```

```typescript
// src/index.ts
const reader = new MatchReader("football.csv");
reader.read();
// (property) 0: Date
// reader.data[0][0]
```

#### 6.8.3 ② 基于组合的重构

创建 CsvFileReader 类，data 属性负责存储文件读取结果，read 方法负责读取文件。

创建 MatchReader 类型，接收 CsvFileReader 实例对象，load 方法负责调用 CsvFileReader 对象中的 read 方法读取文件内容，文件内容读取完成后调用 CsvFileReader 对象中的 data 属性获取读取结果，读取结果获取完成后执行自定义处理逻辑，处理完成后使用 matches 属性存储最终处理结果。

```typescript
import fs from "fs";

export class CsvFileReader {
  // 用于存储 CSV 文件读取结果
  data: string[][] = [];

  // 接收 CSV 文件名称
  constructor(public filename: string) {}

  // 读取 CSV 文件内容
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
```

```typescript
import { MatchResult } from "./matchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
```

```typescript
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

for (let match of matchReader.matches) {}
```

### 6.9 比赛结果的分析与输出

#### 6.9.1 概述

在目前的代码中，我们仅仅是分析了曼联球队赢得比赛的次数并在控制台中打印了分析结果。试想一下，如果我们想分析其他球队赢得比赛的次数或者其他球队输得比赛的次数，代码该怎么写？如果我们不想在控制台中输出分析结果，想在 HTML 文件中存储分析结果代码又该怎么写？

1. 为使代码更具扩展性，需要为不同的分析行为创建不同的类，为不同的输出行为创建不同的类，再创建一个用于组合分析行为和输出行为的类。
2. 为使组合类正常工作，需要创建约束分析行为类的接口规范，创建约束输出行为类的接口规范。

```typescript
const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
```

```typescript
const summary = new Summary(
  new AverageGoalsAnalysis("Man United"),
  new HtmlReport()
);
summary.buildAndPrintReport(matchReader.matches);
```

#### 6.9.2 创建分析接口和输出接口

```typescript
// src/Summary.ts
import { MatchData } from "./MatchData";

// 用于约束分析行为的接口
export interface Analyzer {
  // 用于实现分析过程的方法, 接收比赛信息作为参数, 返回分析结果
  run(matches: MatchData[]): string;
}

// 用于约束输出行为的接口
export interface OutputTarget {
  // 用于实现打印分析结果的方法, 接收分析结果作为参数, 没有返回值
  print(report: string): void;
}

// 用于组合分析行为和输出行为的类
export class Summary {
  // 接收满足分析行为接口的类实例
 	// 接收满足输出行为接口的类实例
  // 只有满足接口要求, 在 Summary 类中才能安全统一的的调用相关方法实现功能
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  // 分析并打印分析结果
  buildAndPrintReport(matches: MatchData[]) {
    // 调用分析类实例中的 run 方法进行分析
    const output = this.analyzer.run(matches);
    // 打印分析结果
    this.outputTarget.print(output);
  }
}
```

#### 6.9.3 创建分析类

需求：分析球队赢得比晒的次数。

```typescript
// src/Analyzers/WinsAnalysis.ts
import { MatchData } from "../MatchData";
import { MatchResult } from "../matchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  // 接收球队名称
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    // 记录赢得比赛的次数
    let wins = 0;
    // 开始分析
    for (let match of matches) {
      // 记录球队为主场赢得比赛的情况
      if (match[1] === this.team && match[5] === MatchResult.homeWin) {
        wins++;
        // 记录球队为客场赢得比赛的情况
      } else if (match[2] === this.team && match[5] === MatchResult.awayWin) {
        wins++;
      }
    }
    return `${this.team} 球队赢得了 ${wins} 场球赛`;
  }
}
```

#### 6.9.4 创建输出类

需求：在控制台中打印分析结果。

```typescript
// src/ReportTargets/ConsoleReport.ts
import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
```

需求：在 HTMl 文件中输出分析结果。

```typescript
import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<h1>分析结果</h1><div>${report}</div>`;
    fs.writeFileSync("report.html", html);
  }
}
```

#### 6.9.5 简化调用逻辑

在创建 Summary 类实例时需要同时创建分析行为实例和输出行为实例，该逻辑可以被静态方法进行简化。

静态方法主要是用于存放逻辑性的代码，逻辑上属于类但是和类本身没有关系，也就是说在静态方法中，不会涉及到类中的属性和方法的操作。

调用静态方法不需要对类进行实例化，可以通过类名直接进行调用。

```typescript
// src/Summary.ts
export class Summary {
  // 用于分析球队赢得比赛的信息并使用HTML的方式输出结果
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
}
```

```typescript
// src/index.ts
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
```

读取 CSV 文件的逻辑也可以使用相同的方式进行简化。

```typescript
// src/MatchReader.ts
export class MatchReader {
  static fromCSV(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
}
```

```typescript
const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();
```

## 7. 泛型

泛型是指将类型作为参数进行传递，通过参数传递解决代码复用问题。

### 7.1  泛型类

```typescript
class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index): string {
    return this.collection[index];
  }
}
```

在以上代码中，数值数组类和字符串数组类所做的事情是一样的，但由于类型不同，所以写成了两个类，它们属于重复代码。

在 TypeScript 中使用泛型可以完美解决以上代码复用的问题。

```typescript
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index): T {
    return this.collection[index];
  }
}
// constructor ArrayOfAnything<number>(collection: number[]): ArrayOfAnything<number>
new ArrayOfAnything<number>([1, 2, 3]);
// constructor ArrayOfAnything<string>(collection: string[]): ArrayOfAnything<string>
new ArrayOfAnything<string>(["a", "b", "c"]);
```

### 7.2 泛型函数

```typescript
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

```typescript
function getValue<T>(value: T): T {
  return value;
}

getValue<string>("hello");
getValue<number>(100);
```

### 7.3 泛型约束

泛型约束是指对泛型参数的范围进行约束，就是说虽然类型可以被当做参数传递，但是传递的类型不能是随意的想传什么就传什么，通过泛型约束可以限制能够传递的类型的范围。

```typescript
class Car {
  print() {
    console.log("car");
  }
}

class Hourse {
  print() {
    console.log("Hourse");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(carOrHouse: T) {
  carOrHouse.print();
}

printHousesOrCars<Car>(new Car());
printHousesOrCars<Hourse>(new Hourse());
```

## 8. 数据驱动视图案例

### 8.1 概述

#### 8.1.1 目标

目标：使用 TypeScript 创建一个小型框架，在框架内部实现数据驱动视图更新的功能。



<img src="./images/08.png" align="left" width="50%"/>

#### 8.1.2 创建应用

```bash
# 全局安装 parcel 构建工具
npm install parcel@2.4.1 -g
# 创建应用目录并进入
mkdir web && cd web
# 创建应用工程文件
npm init -y
# 创建源码目录并进入
mkdir src && cd src
# 创建应用逻辑入口文件
touch index.ts
```

```typescript
// 应用逻辑入口文件测试代码
console.log("Hello");
```

```bash
# 回到应用根目录创建应用视图入口文件
cd ../ && touch index.html
```

```html
<!-- 在应用视图入口文件中引入应用逻辑入口文件 -->
<script type="module" src="./src/index.ts"></script>
```

```bash
# 启动开发服务器
parcel index.html
```

### 8.2 功能完善

#### 8.2.1 创建模型类 User

目标：创建 User 模型类，通过私有属性 data 存储用户信息，创建 get 方法用于获取用户信息，创建 UserProps 接口用于定义用户信息规范。

说明：用户信息被设计为私有的原因是我们不希望开发者直接操作用户信息，因为用户信息被修改时程序需要监控到，以实现视图更新逻辑。

```typescript
// src/models/User.ts
interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}
  
  get(propName: string): string | number {
    return this.data[propName];
  }
}
```

```typescript
// src/index.ts
import { User } from "./models/User";

const user = new User({ name: "张三", age: 20 });

// 属性"data"为私有属性, 只能在类"User"中访问。ts(2341)
console.log(user.data);
console.log(user.get("name"));
console.log(user.get("age"));
```

#### 8.2.2 创建 set 方法更新用户信息

目标：在 User 类中创建 set 方法，用于更新用户信息。

目前在用户信息中只有 name 属性和 age 属性，所以按照逻辑要求，在更改用户信息时只能更改这两个属性，但是在 JavaScript 中, 通过[对象.属性]的方式可以随意添加属性或修改属性值，如何确保在调用 set 方法时只更改符合要求的用户信息呢? 如何确保用户修改的值符合类型上的要求呢?

```typescript
// src/models/User.ts
export class User {
  // 通过 UserProps 接口规范可以要求开发者在修改信息时, 只能修改规范中定义的属性, 而且值也必须要符合要求的类型
  set(update: UserProps) {
    Object.assign(this.data, update);
  }
}
```

```typescript
// src/index.ts
const user = new User({ name: "张三", age: 20 });
user.set({ name: "李四", age: 30 });
```

虽然在以上代码中实现了用户信息的修改，但是在更改用户信息时必须同时修改用户的所有信息，因为 update 参数的类型是 UserProps，如果只更改其中的某一个属性，将不满足 UserProps 接口规范。

```typescript
// 类型"{ name: string; }"的参数不能赋给类型"UserProps"的参数。
// 类型"{ name: string; }"中缺少属性"age", 但类型"UserProps"中需要该属性. ts(2345)
user.set({ name: "李四" });
```

可以将 UserProps 接口中的属性更改为可选的，即对象中可以有该属性也可以没有该属性，这样在修改用户信息时就可以实现只修改某些属性了。

```typescript
interface UserProps {
  name?: string;
  age?: number;
}
```

而且这样做还有另一个好处，就是在创建用户时可以创建一个没有任何属性的空对象，这是非常有用的。例如在注册用户时，我们要向用户提供表单，让用户填写姓名和年龄。在这个场景下，就可以先创建一个空的用户，然后在用户提交表单时再设置用户信息。

#### 8.2.3 小型事件系统

目标：创建小型事件系统，包含事件监听器和事件触发器，当用户信息被修改时可以通过事件侦听器通知到应用程序的其他部分。

第一步：创建事件监听器，用于绑定事件。

说明：事件监听器可以有不同的类型，每个类型下可以有多个事件处理程序。

<img src="./images/09.png" align="left" width="40%"/>

```typescript
// src/models/User.ts
// 定义类型, 回调函数的类型
type Callback = () => void;

export class User {
  // 用于保存事件名称和对应的事件处理程序
  events: { [key: string]: Callback[] } = {};
	// 事件侦听器, 用于绑定事件
  on(eventName: string, callback: Callback): void {
    // 通过事件名称获取已有事件监听程序
    // 如果不是第一次绑定事件, 得到的是 Callback 数组, 直接使用
    // 如果是第一次绑定, 得到的是 undefined, 利用逻辑短路思想, 放弃 undefined, 返回空数组
    const handlers = this.events[eventName] || [];
    // 将此次要绑定的事件处理程序添加到数组中
    handlers.push(callback);
    // 将拥有新结果的数组重新赋值给对应的时间
    this.events[eventName] = handlers;
  }
}
```

```typescript
// src/index.ts
user.on("click", () => {});
user.on("click", () => {});
user.on("change", () => {});
console.log(user);
```

第二步：创建事件触发器，用于触发事件。

```typescript
// src/models/User.ts
export class User {
	// 事件触发器, 用于触发事件
  trigger(eventName: string): void {
    // 获取事件名称对应的事件处理程序
    const handlers = this.events[eventName];
    // 1) 触发了一个没有绑定的事件
    // 2) 触发的事件曾经绑定过, 但目前已经解绑了
    // 判断是否是以上两种情况, 如果是阻止程序向下运行, 防止报错
    if (!handlers || handlers.length === 0) return;
    // 依次调用该事件对应的事件处理程序
    handlers.forEach((callback) => callback());
  }
}
```

```typescript
// src/index.ts
user.on("click", () => console.log("click #1"));
user.on("click", () => console.log("click #2"));
user.on("change", () => console.log("change #1"));

user.trigger("click");
user.trigger("change");
```

#### 8.2.4 状态同步

目标：在模型类中创建 save 方法与 fetch 方法，用于与服务端进行数据交互。

第一步：使用 JSON Server 作为服务端，与客户端进行数据交互。

<img src="./images/10.png" align="left" width="45%"/>

```bash
npm install json-server -g
```

```json
{
  "users": [
    {
      "id": 1,
      "name": "张三",
      "age": 20
    }
  ]
}
```

```bash
npm install axios
```

```json
"scripts": {
  "start:db": "json-server -w db.json",
  "start:parcel": "parcel index.html"
},
```

```bash
npm run start:db
npm run start:parcel
```

第二步：创建 fetch 方法用于向服务端发送请求获取数据

```typescript
// src/models/User.ts
import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
}

export class User {
  fetch() {
    return axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => this.set(response.data));
  }
}
```

第三步：创建 save 方法，用于创建用户和修改用户。

```typescript
// src/models/User.ts
export class User {
  save() {
    const id = this.get("id");
    if (id) {
      // 修改
      return axios.patch(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // 添加
      return axios.post("http://localhost:3000/users", this.data);
    }
  }
}

```

```typescript
// src/index.ts
// 创建用户
const user = new User({ name: "李四", age: 30 });
user.save();
```

```typescript
// 修改用户
const user = new User({ id: 1, name: "王五" });
user.save();
```

### 8.3 重构-提取复用代码

#### 8.3.1 概述

目前代码中存在的问题是所有功能都写在了 User 类中，包括一些可以在不同模型类中复用的代码。

而我们要做的事情就是将这些可以复用的代码抽取到不同的类中，然后再通过组合的方式将它们进行重组。

#### 8.3.2 提取事件系统

目标：将事件系统相关的代码从 User 类中拆分出去。

第一步：创建 Eventing 类，用于放置所有和事件相关的代码。

```typescript
// src/models/Eventing.ts
type Callback = () => void;

export class Eventing {
  // 用于保存事件名称和对应的事件处理程序
  events: { [key: string]: Callback[] } = {};
  // 事件侦听器, 用于绑定事件
  on(eventName: string, callback: Callback): void {
    // 通过事件名称获取已有事件监听程序
    // 如果不是第一次绑定事件, 得到的是 Callback 数组, 直接使用
    // 如果是第一次绑定, 得到的是 undefined, 利用逻辑短路思想, 放弃 undefined, 返回空数组
    const handlers = this.events[eventName] || [];
    // 将此次要绑定的事件处理程序添加到数组中
    handlers.push(callback);
    // 将拥有新结果的数组重新赋值给对应的时间
    this.events[eventName] = handlers;
  }
  // 事件触发器, 用于触发事件
  trigger(eventName: string): void {
    // 获取事件名称对应的事件处理程序
    const handlers = this.events[eventName];
    // 1) 触发了一个没有绑定的事件
    // 2) 触发的事件曾经绑定过, 但目前已经解绑了
    // 判断是否是以上两种情况, 如果是阻止程序向下运行, 防止报错
    if (!handlers || handlers.length === 0) return;
    // 依次调用该事件对应的事件处理程序
    handlers.forEach((callback) => callback());
  }
}
```

第二步：为 User 模型类添加事件系统。

```typescript
// src/models/User.ts
import { Eventing } from "./Eventing";

export class User {
  // 为当前模型类中添加事件系统
  public events: Eventing = new Eventing();
}
```

#### 8.3.3 提取状态同步

第一步：创建 Sync 类，用于放置和状态同步相关的代码。

```typescript
import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      // 修改
      return axios.patch(`${this.rootUrl}/${id}`, data);
    } else {
      // 添加
      return axios.post(this.rootUrl, data);
    }
  }
}
```

第二步：通过泛型将要同步的数据的类型传递到 Sync 类中，使用泛型约束 save 方法的参数，使 Sync 类可重用。

```typescript
// src/models/Sync.ts
interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  save(data: T): AxiosPromise {
    const { id } = data;
  }
}
```

注意：在以上代码中，泛型 T 对应的实际类型中要有一个可选属性 id，在 save 方法中从 data 中解构 id 时，由于 id 可能有也可能没有，所以它的类型应该是 number | undefined，但实际上 TypeScript 编译器推断出的 id 的类型就是 number，这是为什么呢？

```typescript
// const id: number
const { id } = data;
```

这是因为在应用中目前没有开启 TypeScript 类型的严格检查模式，通过 tsconfig.json 中的 strict: true 可开启。

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

```typescript
// const id: number | undefined
const { id } = data;
```

所以通过 if 判断 id 是否为真是不严谨的，如果 id 为 0 的话，代码便会走到 else，就走向了错误的逻辑。

```typescript
if (id) {} else {}
```

严谨的判断应该是检测 id 是否不为 undefined 类型。

```typescript
if (typeof id != "undefined") {} else {}
```

第三步：为 User 类添加同步状态功能。

```typescript
// src/models/User.ts
import { Sync } from "./Sync";

// 基准请求地址
const rootUrl = "http://localhost:3000/users";

export class User {
  // 为当前模型类中添加同步状态功能
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
```

#### 8.3.4 提取对象属性

目标：提取 User 类中的 data 属性、get、set 方法，使用这部分代码在任何其他模型类中可以被复用。

第一步：创建 Attributes 类，用于存储 data 属性、get、set 方法。

```typescript
// src/models/Attributes.ts
export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: T) {
    Object.assign(this.data, update);
  }
}
```

第二步：优化 get 方法参数的类型。

在以上代码中存在的问题是 get 方法的参数的取值范围并没有被限制，就是说在调用 get 方法时可以传递任何参数，但实际上应该是 data 对象中存在什么属性 get 方法中才允许被传递什么参数。比如在 user 对象中，它只有三个属性，id、name、age，那么当 user 对象调用 get 方法时它就应该只允许传递这三个参数。

要解决以上问题，我们需要先学习两个前置知识点。

① 在 TypeScript 中，字面量也可以作为类型使用。

```typescript
// 定义类型 BestName
type BestName = "张三" | "李四";
// 参数 name 的类型为字面量的类型, 参数 name 的取值范围为字面量的值
// 即参数 name 的类型为字符串, 参数 name 的取值范围为张三和李四
function printName(name: BestName) {}

printName("李四");
printName("张三");
// 类型"王五"的参数不能赋给类型"BestName"的参数
printName("王五");
```

② 在 JavaScript 中，所有对象的键都是字符串类型，TypeScript 中也是一样。

```typescript
const colors = {};
colors[0] = "red";
colors[0] // "red"
// 在这段代码中，虽然看起来我们使用了数值作为了对象的键, 但仅仅是看起来是这样
// 当我们使用数值键取值时, 内部会将数值转换为字符串再进行取值
// 所以以下代码也是可以取到值的
colors["0"] // "red"
```

```typescript
const color = {};
color[0] = "a";
color[{}] = "b";
// Colors { '0': 'a', '[object Object]': 'b' }
console.log(color);
```

**在 TypeScript 中字符串字面量可以作为类型使用，对象的键又都是字符串类型，由此我们能够想到对象的键也可以作为类型使用。**

对于 user 对象来说，它的 get 方法的取值范围为 id、name、age，也就是说我们可以通过以下方式限制 user 对象的 get 方法的参数类型。

```typescript
get(key: "id" | "name" | "age") {
  return this.data[key];
}
```

<img src="./images/11.png" align="left" width="45%"/>

```typescript
// 以下为测试代码
// src/models/Attributes.ts
import { UserProps } from "./User";

const userAttributes = new Attributes<UserProps>({ id: 1, name: "张三", age: 20 });
// 类型 "sex" 的参数不能赋给类型 "id" | "name" | "age" 的参数
Attributes.get("sex");
```

虽然以上代码解决了 get 方法的参数类型问题，但是代码如果这样写的话就不能复用了，因为不同的数据拥有的属性是不一样的。

在 TypeScript 中 keyof 运算符可以得到类型属性字面量联合类型。

```typescript
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// "id" | "name" | "age"
type UserPropsKeys = keyof UserProps;
```

所以最终 get 方法参数的类型可以通过以下方式进行限制。

```typescript
export class Attributes<T> {
  constructor(private data: T) {}
	// 使用 keyof 运算符获取 T 类型中的属性名称字符串联合类型
  // 通过泛型及泛型约束限制 key 参数的类型及取值范围
  // 泛型 K 的类型被 keyof 运算符得到的类型进行约束
  // 虽然此处 K 为泛型, 但是在调用 get 方法时可以不传递具体类型, TypeScript 编译器可以自己推断
  get<K extends keyof T>(key: K) {
    return this.data[key];
  }
}
```

<img src="./images/11.png" align="left" width="45%"/>

第三步：优化 get 方法的返回值类型。

通过 get 方法获取到属性值后，属性值是什么类型 get 方法的返回值就应该是什么类型。

<img src="./images/12.png" align="left" width="50%"/>

但是在以上代码中 get 方法的返回值是联合类型，这就导致在使用返回值时编辑器中只能提示联合类型中的公共数据和方法。

**特别注意: 在演示测试代码时, 先临时删除 get 方法的参数的类型。**

```typescript
// src/models/Attributes.ts
// 以下为测试代码
import { UserProps } from "./User";

const userAttributes = new Attributes<UserProps>({ id: 1, name: "张三" });

// const id: string | number
const id = userAttributes.get("id");
// const name: string | number
const name = userAttributes.get("name");
```

而我们期望返回值类型是唯一的，这样在使用时编辑器就可以提示确切的提示出该类型下面有哪些属性和方法了。

解决方法一就是在使用返回值前先使用类型守卫对其进行验证。

```typescript
if (typeof name === "string") {
  // const name: string
  name;
}
```

解决办法二是使用类型断言，告诉 TypeScript 编译器它的确切类型是什么。

```typescript
// const id: number
const id = userAttributes.get("id") as number;
```

解决办法三是根据类型的属性获取属性值的类型。

```typescript
// 以下为测试代码
// type nameType = string;
type nameType = UserProps["name"];
// type ageType = number
type ageType = UserProps["age"];
```

所以最终 get 方法的返回值类型可以通过以下方式进行设置。

```typescript
// src/models/Attributes.ts
export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
}
```

```typescript
// src/models/Attributes.ts
// 以下为测试代码
const userAttributes = new Attributes<UserProps>({ id: 1, name: "张三", age: 20 });
// const name: string
const name = userAttributes.get("name");
// const age: number
const age = userAttributes.get("age");
```

第四步：在 User 模型类中添加模型数据。

```typescript
// src/models/User.ts
import { Attributes } from "./Attributes";

export class User {
  // 为当前模型类添加模型
  public attributes: Attributes<UserProps>;

  constructor(user: UserProps) {
    this.attributes = new Attributes<UserProps>(user);
  }
}
```

#### 8.3.5 减少调用属性层级

经过以上优化以后，解决了内部代码复用的问题，但是新的问题也产生了，就是在调用数据模型类内部的方法时代码变得冗长。

```typescript
const user = new User({ id: 1, name: "王五" });

// 上一轮优化后
user.attributes.get("name");
user.sync.fetch(1);
user.events.trigger("click");

// 上一轮优化前
user.get("name");
user.fetch();
user.trigger("click");
```

目标：通过类中的 getter 属性实现调用时属性层级的缩减。

先来看一段我们能够想到的最直接的缩减调用属性层级的办法。

```typescript
// src/models/User.ts
export class User {
  on(eventName: string, callback: Callback) {
    return this.events.on(eventName, callback);
  }
}
```

```typescript
user.on('click', () => {});
```

以上代码中虽然可以缩减调用属性的层级，但是代码过于啰嗦。

可以利用类的 getter 属性优化以上代码。

```typescript
// src/models/User.ts
export class User {
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }
}
```

```typescript
user.on("click", () => console.log("clicked"));
```

但是在以上代码中还隐藏着一个错误，尝试运行以下代码。

```typescript
user.get("name");
```

<img src="./images/13.png" align="left" width="75%"/>

产生以上错误的原因在于代码运行时 Model 类中 get 方法中的 this 指向出现了问题，它本应该指向 Model 类实例，现在指向了 User 类实例。User 类中没有 data 属性，访问 data 属性时返回 undefined，再通过 undefined 访问 name，自然就报错了。

解决以上问题的办法是将 Model 类中的 get 方法更改为箭头函数，因为箭头函数不绑定 this，所以外部无论怎样调用都不会更改 this 指向。

```typescript
// src/models/Attributes.ts
export class Attributes<T> {
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
}
```

```typescript
// src/models/Eventing.ts
export class Eventing {
  // 事件侦听器, 用于绑定事件
  on = (eventName: string, callback: Callback): void => { };
  // 事件触发器, 用于触发事件
  trigger = (eventName: string): void => {};
}
```

```typescript
// src/index.ts
// 以下为测试代码
const user = new User({ id: 1, name: "王五" });

console.log(user.get("name"));
user.on("click", () => console.log("clicked"));
user.trigger("click");
```

### 8.4 功能完善

#### 8.4.1 添加 set 方法 (User)

目标：在更改模型数据时，自动触发 change 事件。

自动触发 change 事件的原因是将来当数据发生更改时应用程序的其他部分要随之更新。

```typescript
// src/models/User.ts
export class User {
  set(update: UserProps) {
    this.attributes.set(update);
    this.events.trigger("change");
  }
}
```

```typescript
// src/index.ts
// 以下为测试代码
const user = new User({ id: 1, name: "王五" });
user.on("change", () => console.log("changed"));
user.set({ name: "李四" });
```

#### 8.4.2  添加 fetch 方法 (User)

目标：在 User 类中添加 fetch 方法用于与服务端通讯，根据 id 获取数据、数据获取完成后更新本地数据。

```typescript
export class User {
  fetch(): void {
    // 获取数据id
    const id = this.get("id");
    // 如果没有id或者类型错误
    if (typeof id !== "number") {
      // 报错: 输出错误信息
      throw new Error("没有id不能获取数据");
    }
    // 根据id发送请求获取数据
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      // 更新本地数据
      this.set(response.data);
    });
  }
}
```

```typescript
// 创建用户实例
const user = new User({ id: 1 });
// 监听用户数据发生变化
user.on("change", () => console.log(user));
// 根据 id 获取用户数据
user.fetch();
```

#### 8.4.3 添加 save 方法 (User)

目标：在 User 类中添加 save 方法，用于与服务端通讯，添加用户、修改用户，成功后触发 save 事件，失败后触发 error 事件。

由于在执行创建和修改操作时，需要将模型实例整体传入到 Sync 类中的 save 方法中，所以在 Model 中添加一个用于获取实例的方法。

```typescript
// src/models/Attributes.ts
export class Attributes<T> {
  getAll(): T {
    return this.data;
  }
}
```

在 User 中添加 save 方法供实例使用。

```typescript
// src/models/User.ts
export class User {
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.trigger("save"))
      .catch(() => this.trigger("error"));
  }
}
```

```typescript
// src/index.ts
// 以下为测试代码
const user = new User({ id: 1, name: "赵六" });
user.on("save", () => console.log(user));
user.save();
```

### 8.5 重构-提取复用代码

#### 8.5.1 提取模型类公用逻辑

目前在表示用户的 User 模型类中，所有的属性和方法都可以被看做是数据模型类之间的可以复用的代码，比如表示文章的 Post 模型类，表示订单的 Order 模型类，都会有 get、set、fetch、save、on、trigger 等方法，而我们肯定不想在每个数据模型类中都将这些方法实现一遍。

所以接下来我们要做的事情就是创建一个 Model 类，用于存放数据模型类中可以复用的属性和方法，其他数据模型类通过继承的方式获取他们。

<img src="./images/46.png" align="left" width="35%"/>

第一步：创建 Model 类型，让 User 数据模型类继承 Model 类，从而获取数据模型类中的可以复用的属性和方法。

```typescript
// src/models/Model.ts
class Model {}
```

```typescript
// src/models/User.ts
class User extends Model {}
```

第二步：将 User 类中的通用模型类方法拷贝到 Model 模型类中。

```typescript
import { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {  
  public events: Eventing = new Eventing();
  public attributes: Attributes<T>;
  public sync: Sync<T> = new Sync<T>(rootUrl);
  
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    // 获取数据id
    const id = this.get("id");
    // 如果没有id或者类型错误
    if (typeof id !== "number") {
      // 报错: 输出错误信息
      throw new Error("没有id不能获取数据");
    }
    // 根据id发送请求获取数据
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      // 更新本地数据
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.trigger("save"))
      .catch(() => this.trigger("error"));
  }
}
```

第三步：通过参数的方式接收类实例，而不是直接在 Model 类中创建实例。

在以上代码中仍然存在的问题是在 Model 类中直接实例化了 Eventing、Attributes、Sync 等类，这样做并不好，以 Sync 举例，目前代码中 Sync 类用于与服务端交互，获取和保存模型数据，但如果将来数据源发生变化，比如变成了和本地存储进行交互，那么此处的代码就不太合适了，所以在 Model 类中，应该通过参数的方式接收这几个类的实例，至于接收的是 ApiSync 还是 LocalSync 就交给数据模型类，它根据需求决定。

既然现在要通过参数的方式接收类的实例，那么参数就需要被接口进行约束，约束在类中必须实现的属性和方法，这样才能确保拷贝到 Model 类中的其他属性和方法是可用的。所以接下来我们要先创建接口，约束 attributes、sync、events  参数的类型。

```typescript
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  // 为什么 attributes、sync、events 属性是私有的呢?
  // 我们不想让开发者在类的外部直接操作这些属性，
  // 开发者没有必要在类的外部直接调用并操作这些属性, 他只可以调用类中的公共方法
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}
}
```

第四步：在 User 类中创建静态方法 buildUser，用于创建 User 类的实例。

由于 User 类继承了 Model 类，在实例化 User 类时需要传递 Model 类需要的参数，Model 类需要传递 attributes、sync、events 属性。

在创建 User 类的实例时，我只想关心 User 类中可以设置哪些属性，也就是 attributes 参数。如果每次创建用户还需要传递其他参数比如 sync、events，这对于创建用户来说就太麻烦了，所以接下来我们要做的事情就是在 User 类中创建 BuildUser 方法，通过该方法对创建用户的逻辑进行进一步的封装。

```typescript
// src/models/User.ts
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
```

#### 8.5.2 进一步减少调用属性层级

```typescript
// src/models/Model.ts
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
}
```

```typescript
function Model(attributes) {
  this.attributes = attributes;
  this.get = this.attributes.get;
}
```

特别注意：以下属于错误写法。

```typescript
export class Model {
  attributes;
  constructor(attributes) {
    this.attributes = attributes;
  }
  // error: 属性"attributes"在其初始化前已被使用。
  get = this.attributes.get;
}
```

```javascript
function Model(attributes) {
  this.get = this.attributes.get;
  this.attributes = attributes;
}
```

### 8.6 完善功能

#### 8.6.1   创建用户集合

目标：创建用户集合类，用于保存用户列表数据。

```typescript
// src/models/Collection.ts
import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection {
  // 用于存储集合的属性
  models: User[] = [];
  // 组装事件系统
  events: Eventing = new Eventing();
  // 缩短方法调用
  on = this.events.on;
  trigger = this.events.trigger;

  // 接收请求地址
  constructor(public rootUrl: string) {}

  // 用于发送请求获取集合数据
  fetch() {
    axios.get(this.rootUrl).then((response: AxiosResponse<UserProps[]>) => {
      // 遍历集合
      response.data.forEach((value: UserProps) => {
        // 将网络数据转换成 User 类实例
        const user = User.buildUser(value);
        // 使用 models 数组存储 User 类实例
        this.models.push(user);
      });
      // 数据获取完成后触发 change 事件
      this.trigger("change");
    });
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { Collection } from "./models/Collection";

const userCollection = new Collection("http://localhost:3000/users");

userCollection.on("change", () => {
  console.log(userCollection.models);
});

userCollection.fetch();
```

### 8.7  重构-提取复用代码

#### 8.7.1-创建通用集合类

在刚刚创建的用户集合类中，它的问题就在于只能获取用户集合数据，接下来我们要将它改造成能够获取任何集合数据的通过集合类。

```typescript
// src/models/Collection.ts
import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  // 用于存储集合的属性
  models: T[] = [];
  // 组装事件系统
  events: Eventing = new Eventing();
  // 缩短方法调用
  on = this.events.on;
  trigger = this.events.trigger;

  // 接收请求地址
  constructor(public rootUrl: string, public deserialize: (value: K) => T) {}

  // 用于发送请求获取集合数据
  fetch() {
    axios.get(this.rootUrl).then((response: AxiosResponse<K[]>) => {
      // 遍历集合
      response.data.forEach((value: K) => {
        // 将网络数据转换成模型数据并存储
        this.models.push(this.deserialize(value));
      });
      // 数据获取完成后触发 change 事件
      this.trigger("change");
    });
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const userCollection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (value: UserProps) => User.buildUser(value)
);
userCollection.on("change", () => {
  console.log(userCollection.models);
});
userCollection.fetch();
```

#### 8.7.2 创建获取集合的静态方法

在目前的代码中存在的问题在于创建集合时泛型参数的传递还是比较麻烦的，我们可以在 User 类中暴露一个用于创建用户集合的静态方法，以简化创建用户集合的相关逻辑代码。

```typescript
// src/models/User.ts
import { Collection } from "./Collection";

export class User extends Model<UserProps> {
  // 创建用户集合
  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (value: UserProps) =>
      User.buildUser(value)
    );
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { User } from "./models/User";

const userCollection = User.buildCollection();
```

### 8.8 功能完善

#### 8.8.1 创建用户表单视图类

目标：创建用于渲染用户表单的视图类，并将用户表单渲染到页面中。

```typescript
// src/views/UserForm.ts
export class UserForm {
  // 模板父级
  constructor(public parent: Element) {}

  // 用于返回模板字符串的方法
  template(): string {
    return `
      <div>
        <h1>用户表单</h1>
        <input type="text">
      </div>
    `;
  }

  // 渲染方法
  // 1. 获取模板 2. 将模板内容渲染至 parent
  render() {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}
```

```typescript
// src/index.ts
import { UserForm } from "./views/UserForm";

const userForm = new UserForm(document.querySelector("#root"));
userForm.render();
```

#### 8.8.2 为模板元素附加事件

目标：为模板中的任意元素附加任意事件。

```typescript
export class UserForm {
  // 返回[元素][事件名称][事件处理函数]映射表
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick() {
    console.log("clicked");
  }

  // 事件绑定
  bindEvents(fragment: DocumentFragment): void {
    // 获取元素事件映射表
    const eventsMap = this.eventsMap();
    // 遍历映射表
    for (let eventKey in eventsMap) {
      // 获取事件名称、元素选择器
      const [eventName, selector] = eventKey.split(":");
      // 从模板代码片段中找出要添加事件的元素们
      fragment.querySelectorAll(selector).forEach((element) => {
        // 为元素绑定事件
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
```

#### 8.8.3 绑定模型数据

目标：在视图模板中渲染模型数据，渲染用户的姓名和年龄。

```typescript
// src/views/UserForm.ts
import { User } from "../models/User";

export class UserForm {
  // 接收模型数据
  constructor(public parent: Element, public model: User) {}

  template(): string {
    // 渲染模型数据
    return `
      <div>
        <div>姓名: ${this.model.get("name")}</div>
        <div>年龄: ${this.model.get("age")}</div>
      </div>
    `;
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "张三", age: 20 });

const userForm = new UserForm(document.querySelector("#root"), user);
userForm.render();
```

#### 8.8.4  随机年龄

目标：点击按钮生成随机年龄，年龄数据被更改后重新渲染视图。

第一步：创建用于生成随机年龄的方法。

由于生成随机年龄的逻辑是和 User 模型相关的，所以该方法应该写在 User 模型类中。

```typescript
// src/models/User.ts
export class User {
  // 随机设置年龄
  setRandomAge() {
    this.set({ age: Math.round(Math.random() * 100) });
  }
}
```

第二步：为按钮绑定事件，事件触发后调用 setRandomAge 方法设置随机年龄。

```typescript
// src/views/UserForm.ts
export class UserForm {
  // 返回[元素][事件名称][事件处理函数]映射表
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
    };
  }
	
  // 特别注意: 此处要使用箭头函数, 否则 this 指向错误
  onSetAgeClick = () => {
    this.model.setRandomAge();
  };

  // 用于返回模板字符串的方法
  template(): string {
    return `<button class="set-age">设置随机年龄</button>`;
  }
}
```

第三步：随机年龄设置成功后，重新渲染视图。

由于模型数据更改后会自动触发 change 事件，所以此处需要监听 change 事件，事件触发后调用 render 方法重新渲染视图即可。

```typescript
// src/views/UserForm.ts
export class UserForm {
  constructor() {
    this.bindModel();
  }
  
  render() {
    this.parent.innerHTML = "";
  }

  bindModel() {
    this.model.on("change", () => {
      this.render();
    });
  }
}
```

#### 8.8.5 设置姓名

目标：在文本框中输入姓名，点击按钮更新姓名。

```typescript
// src/views/UserForm.ts
export class UserForm {
  // 返回[元素][事件名称][事件处理函数]映射表
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector("input");
    const name = input.value;
    this.model.set({ name });
  };

  template(): string {
    return `
      <input type="text">
      <button class="set-name">设置姓名</button>
    `;
  }
}
```

#### 8.8.6 严格空检查

目标：创建 tsconfig 配置文件，开启严格检查模式。

```bash
tsc --init
```

```typescript
// src/views/UserForm.ts
onSetNameClick = () => {
  // const input: HTMLInputElement | null
  const input = this.parent.querySelector("input");
  if (input) {
    const name = input.value;
    this.model.set({ name });
  }
};
```

```typescript
// src/index.ts
const root = document.querySelector("#root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root element not found");
}
```

### 8.9 重构-提取复用代码

#### 8.9.1 创建视图类

目标：创建 View 类，包含和视图相关的通用逻辑，其他具体的视图类通过继承该类拥有一些特定功能。

```typescript
// src/views/View.ts
import { User } from "../models/User";

export abstract class View {
  // 模板父级
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  // 渲染方法
  // 1. 获取模板 2. 将模板内容渲染至 parent
  render() {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  // 事件绑定
  bindEvents(fragment: DocumentFragment): void {
    // 获取元素事件映射表
    const eventsMap = this.eventsMap();
    // 遍历映射表
    for (let eventKey in eventsMap) {
      // 获取事件名称、元素选择器
      const [eventName, selector] = eventKey.split(":");
      // 从模板代码片段中找出要添加事件的元素们
      fragment.querySelectorAll(selector).forEach((element) => {
        // 为元素绑定事件
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  bindModel() {
    this.model.on("change", () => {
      this.render();
    });
  }
}
```

```typescript
// src/views/UserForm.ts
import { View } from "./View";

export class UserForm extends View {
  // 返回[元素][事件名称][事件处理函数]映射表
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = () => {
    this.model.setRandomAge();
  };

  onSetNameClick = () => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  // 用于返回模板字符串的方法
  template(): string {
    return `
      <div>
        <h1>用户表单</h1>
        <div>姓名: ${this.model.get("name")}</div>
        <div>年龄: ${this.model.get("age")}</div>
        <input type="text">
        <button class="set-name">设置姓名</button>
        <button class="set-age">设置随机年龄</button>
      </div>
    `;
  }
}
```

#### 8.9.2  通过泛型指定模型参数类型

目标：通过泛型的方式指定视图类中接收的模型数据的参数的类型。

```typescript
// src/views/View.ts
export abstract class View<T extends Model<K>, K> {
  // 模板父级
  constructor(public model: T) {}
}
```

```typescript
// src/views/UserForm.ts
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {}
```

### 8.10 完善功能

#### 8.10.1 保存用户

目标：在用户表单类中，实现点击按钮创建用户，将用户信息同步到服务端。

```typescript
// src/views/UserForm.ts
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.save-user": this.onSaveUserClick,
    };
  }

  onSaveUserClick = () => {
    this.model.save();
  };

  template(): string {
    return `
      <input type="text" placeholder="${this.model.get("name")}">
      <button class="save-user">保存用户</button>
    `;
  }
}
```

#### 8.10.2 创建 UserShow 视图类

目标：创建用于展示用户信息的视图类。

```typescript
import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>用户信息</h1>
        <div>姓名: ${this.model.get("name")}</div>
      </div>
    `;
  }
}
```

注意：由于 UserShow 视图类继承了 View 通用视图类，View 视图类要求子类实现 template 方法和 eventsMap 方法，但是在 UserShow 视图类中并不打算为元素绑定事件，所以仍然要写一个返回空对象的 eventsMap 方法，这显然是代码中考虑不周的地方。

要解决上述问题，我们只需要在 View 类中实现一个默认的返回空对象的 eventsMap 方法即可。如果子类要绑定事件，可以覆盖父类中的该方法。

```typescript
// src/views/View.ts
export abstract class View<T extends Model<K>, K> {
  // 子类如果有相同方法, 会覆盖父类的方法
  eventsMap(): { [key: string]: () => void } {
    return {};
  }
}
```

#### 8.10.3 创建 UserEdit 视图类

目标：创建 UserEdit 视图类，即将在该类中调用 UserShow 视图类和 UserForm 视图类。

```typescript
// src/views/UserEdit.ts
import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
      <div class="user-show"></div>
      <div class="user-form"></div>
    `;
  }
}
```

#### 8.10.4  视图嵌套

目标：在 UserEdit 视图中渲染 UserShow 视图和 userForm 视图。

实现思路：由于在渲染其他视图时需要传递该视图的渲染位置，即渲染视图的目标父级元素，而目标父级元素的获取属于渲染视图中的公共逻辑，所以该逻辑要写在 View 视图类中，但是对于 View 类来说，它并不知道目标父级元素是谁，所以目标父级信息由子类提供，View 类通过子类提供的信息进行父级元素的获取和存储，子类再根根据获取结果渲染其他视图。

子类提供父类信息 -> 父类获取元素 -> 子类使用元素渲染其他视图

第一步：在 UserEdit 视图类中提供要渲染的其他视图需要的父类信息。

```typescript
// src/views/UserEdit.ts
export class UserEdit extends View<User, UserProps> {
  // 要渲染的其他视图的父级信息映射表
  regionsMap(): { [key: string]: string } {
    // key: 标识
    // value: 父类元素选择器
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }
}
```

第二步：父级在获取到模板元素以后，根据父级信息映射表从模板元素中获取父级元素

```typescript
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  // 用于存储获取到的目标父级元素
  regions: { [key: string]: Element } = {};

  mapRegions(fragment: DocumentFragment): void {
    // 获取子类提供的父级信息映射表
    const regionsMap = this.regionsMap();
    // 遍历父级信息映射表
    for (let key in regionsMap) {
      // 从映射表中获取父级元素选择器
      const selector = regionsMap[key];
      // 在模板中获取目标父级元素
      const element = fragment.querySelector(selector);
      // 如果目标父级存在
      if (element) {
        // 存储目标父级元素
        this.regions[key] = element;
      }
    }
  }

  render() {
    // 获取到组件模板以后根据组件模板获取目标父级元素
    this.mapRegions(templateElement.content);
  }
}
```

第三步：子类根据父类获取到的父级元素渲染其他视图。

① 父类在获取到父级元素以后，调用子类提供的 onRender 方法开始渲染其他视图

```typescript
// src/views/View.ts
export abstract class View<T extends Model<K>, K> {
  render() {
    this.onRender();
  }
}
```

② 子类通过 onRender 方法进行其他视图的渲染

```typescript
// src/views/UserEdit.ts
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps> {
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
}
```

第四步：在父类中定义默认的 onRender 方法和 regionsMap 方法，防止在子类不提供该方法时程序运行出错。

```typescript
// src/views/View.ts
export abstract class View<T extends Model<K>, K> {
  regionsMap(): { [key: string]: string } {
    return {};
  }
  onRender(): void {}
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "张三", age: 20 });
const root = document.querySelector("#root");

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error("Root element not found");
}
```

#### 8.10.5 创建集合视图类

目标：创建一个用于渲染集合模型数据的通用视图类。

第一步：创建通用的渲染集合模型数据的视图类。

```typescript
// src/views/CollectionView.ts
import { Collection } from "../models/Collection";

// 用于渲染集合数据的视图类
export abstract class CollectionView<T, K> {
  // parent: 集合数据渲染的目标父级元素
  // collection: 即将要渲染的集合数据
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  // 子类需要实现的渲染模型数据的方法
  // model: 要渲染的模型数据
  // itemParent: 模型数据渲染的目标父级
  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    // 清空父级内容
    this.parent.innerHTML = "";
    // 创建 template 模板元素, 临时存放即将渲染的模型列表数据
    const templateElement = document.createElement("template");
    // 遍历模型列表数据
    for (let model of this.collection.models) {
      // 创建当前模型列表数据的渲染目标父级
      const itemParent = document.createElement("div");
      // 调用子类实现的 renderItem 方法将模型数据渲染到 itemParent 父级中
      this.renderItem(model, itemParent);
      // 将当前渲染好的模型数据临时存放在 template 模板元素中
      templateElement.content.append(itemParent);
    }
    // 将模型列表数据整体追加到它的父级
    this.parent.append(templateElement.content);
  }
}
```

第二步：创建用户列表视图类，用于渲染用户列表视图。

```typescript
// src/views/UserList.ts
import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
```

```typescript
// 以下为测试代码
// src/index.ts
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (value: UserProps) => User.buildUser(value)
);

users.on("change", () => {
  const root = document.querySelector("#root");
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
```

## 9. TypeScript 与 React

### 9.1 概述

#### 9.1.1 创建应用

创建支持 TypeScript 语法的 React 应用

```bash
npx create-react-app <appname> --template typescript
```

#### 9.1.2 文件后缀

如果文件中包含 JSX 代码，文件后缀使用 `tsx`

如果文件中不包含任何 JSX 代码，文件后缀使用 `ts`

### 9.2 为组件添加类型

在我们定义了组件以后，TypeScript 编译器并不知道我们定义的是组件，它会认为我们定义的就是一个普通的函数。

在类型认知出现偏差以后，TypeScript 编译器不能正确的对我们的代码进行约束。

比如在下列代码中，我们通过组件获取组件下的属性，TypeScript 编译器会报错，说组件下不存在这个属性。

当 TypeScript 编译器知道我们定义的是组件以后，当我们错误的使用了组件以后，它才能准确的为我们进行提示。

```tsx
const Child= () => {
  return <div>Child</div>;
};

// 类型 "() => Element" 上不存在属性 "displayName"。
console.log(Child.displayName);
// 类型 "() => Element" 上不存在属性 "defaultProps"。
console.log(Child.defaultProps);
```

```tsx
import { FC } from "react";

const Child: FC = () => {
  return <div>Child</div>;
};
```

### 9.3 Props

为组件的 props 参数定义类型，编译器可以检查父组件在调用该组件时是否正确的传递了 props，在子组件内部是否正确的使用了 props。 

```tsx
// src/props/Child.tsx
interface Props {
  color: string;
  onClick: () => void;
}

const Child: FC<Props> = ({ color, onClick }) => {
  return <div onClick={onClick}>{color}</div>;
};
```

```tsx
// src/props/Parent.tsx
const Parent = () => {
  return <Child color="red" onClick={() => console.log("clicked")} />;
};
```

### 9.4 state

```react
// src/state/Guests.tsx
import { useState, FC } from "react";

const Guests: FC = () => {
  const [name, setName] = useState<string>("");
  // 此处如果不为 guests 指定类型, 类型将会是 never[]
  const [guests, setGuests] = useState<string[]>([]);
  const clickHandler = () => {
    setName("");
    // 如果 guests 是 never[], 那么字符串 name 将不能被存储到 guests 数组中
    setGuests([...guests, name]);
  };
  return (
    <>
      <ul> {guests.map((guest) => <li key={guest}>{guest}</li>)}</ul>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      <button onClick={clickHandler}>add</button>
    </>
  );
};
```

```react
// src/state/UserSearch.tsx
import { useState, FC } from "react";

const users = [
  { name: "张三", age: 20 },
  { name: "李四", age: 30 },
];

const UserSearch: FC = () => {
  const [name, setName] = useState<string>("");
  // 组件初次渲染时, user 的类型是 undefined
  // 在找到 user 以后, 它的类型是 {name: string, age: number}
  // 所以 user 的类型就应该是 {name: string, age: number} | undefined
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
	// 搜索用户
  const searchHandler = () => {
    // find 方法的返回值可能是 user, 也可能是 undefined
    setUser(
    	users.find((user) => user.name === name)
    );
  };
  return (
    <>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={searchHandler}>search</button>
      {user && JSON.stringify(user)}
    </>
  );
};
```

### 9.5 事件对象

```react
// src/event/EventComponent.tsx
import { ChangeEvent, FC, DragEvent } from "react";

const EventComponent: FC = () => {
  // 参数"event"隐式具有"any"类型
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const dragStartHandler = (event: DragEvent<HTMLDivElement>) => {
    // event.target: 返回触发事件的元素
    // event.currentTarget: 返回绑定事件的元素
    console.log(event.target);
    console.log(event.currentTarget);
  };
  return (
    <>
      <input type="text" onChange={changeHandler} />
      <div draggable onDragStart={dragStartHandler}> drag event </div>
    </>
  );
};
```

<img src="images/43.gif" align="left"/>

### 9.6 ref

`src/ref/RefComponent.tsx`

```tsx
import { FC, useRef, useEffect } from "React";

const RefComponent: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} />;
};
```

### 9.7 Redux

```bash
npm install redux redux-thunk axios react-redux @types/react-redux --save-exact
# save-exact: 在 package.json 文件中记录安装包的确切版本
```

redux、redux-thunk、axios 内置 TypeScript 类型声明文件，所以不需要单独下载。

react-redux 没有内置类型声明文件，所以需要单独下载。

<img src="images/44.png" align="left" width="32%"/><img src="../../../备课/React/讲义/assets/images/45.png" align="left" width="30%"/>



需求：向 npm 发送请求加载 npm 包列表信息。

第一步：定义 Action Type

```typescript
// src/state/action-types/package.action.types.ts
export enum searchActionType {
  // 请求中
  SEARCH_PACKAGES = "search_packages",
  // 请求成功
  SEARCH_PACKAGES_SUCCESS = "search_packages_success",
  // 请求失败
  SEARCH_PACKAGES_ERROR = "search_packages_error",
}
```

```typescript
// src/state/action-types/index.ts
export * from "./package.action.types";
```

第二步：定义 Action 对象类型、Reducer 函数的 action 参数 action 类型

```typescript
// src/state/actions/packages.action.ts
import { searchActionType } from "../action-types";

/**
 * 请求: {type: "search_packages"}
 * 成功: {type: "search_packages_success", payload: ["react", "react-dom"]}
 * 失败: {type: "search_packages_error", error: "Request Failed"}
 */

interface SearchPackagesAction {
  type: searchActionType.SEARCH_PACKAGES;
}

interface SearchPackagesSuccessAction {
  type: searchActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesErrorAction {
  type: searchActionType.SEARCH_PACKAGES_ERROR;
  error: string;
}

export type SearchAction =
  | SearchPackagesAction
  | SearchPackagesSuccessAction
  | SearchPackagesErrorAction;
```

```typescript
// src/state/actions/index.ts
export * from "./packages.action";
```

第三步：创建 Reducer 函数，匹配 Action Type 返回对应的状态

```typescript
// src/state/reducers/packages.reducer.ts
import { searchActionType } from "../action-types";
import { SearchAction } from "../actions";

export interface PackagesState {
  loading: boolean;
  error: string | null;
  list: string[];
}

const initialState: PackagesState = {
  loading: false,
  error: null,
  list: [],
};

export default function packagesReducer(
  state: PackagesState = initialState,
  action: SearchAction
): PackagesState {
  switch (action.type) {
    case searchActionType.SEARCH_PACKAGES:
      return { loading: true, error: null, list: [] };
    case searchActionType.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, list: action.payload };
    case searchActionType.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.error, list: [] };
    default:
      return state;
  }
}
```

第四步：合并 reducer 函数

```typescript
// src/state/reducers/index.ts
import { combineReducers } from "redux";
import packagesReducer from "./packages.reducer";

export const reducers = combineReducers({
  packages: packagesReducer,
});
```

第五步：创建用于发送请求获取 npm 包的 action creator 函数

```typescript
// src/state/action-creators/packages.action.creators.ts
import axios from "axios";
import { Dispatch } from "react";
import { searchActionType } from "../action-types";
import { SearchAction } from "../actions";

export const searchPackages =
  (key: string) => async (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: searchActionType.SEARCH_PACKAGES,
    });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: key,
          },
        }
      );
      dispatch({
        type: searchActionType.SEARCH_PACKAGES_SUCCESS,
        payload: data.objects.map((item: any) => item.package.name),
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: searchActionType.SEARCH_PACKAGES_ERROR,
          error: error.message,
        });
      }
    }
  };

// unknow 是更加严格的 any 类型.
// 在对 unknown 类型的值执行大多数操作之前, 我们必须进行某种形式的检查
```

```typescript
export * from "./packages.action.creators";
```

第五步：创建 Store 对象，配置 redux-thunk 中间件函数

```typescript
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from ".";

export const store = createStore(reducers, applyMiddleware(thunk));
```

第六步：创建 state 入口文件

```typescript
// src/state/index.ts
export * as actionCreators from "./action-creators";
export * from "./reducers";
export * from "./store";
```

第七步：配置 Provider 组件

```tsx
// src/components/App.tsx
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import Packages from "./Packages";

export const App: FC = () => (
  <Provider store={store}>
    <Packages />
  </Provider>
);
```

第八步：在组件中，当点击按钮时向服务器端发送请求获取 npm 包

```tsx
// src/components/Packages.tsx
import { FC, FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";

const Packages: FC = () => {
  const [key, setKey] = useState<string>("");
  const { searchPackages } = useActions();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPackages(key);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={key} onChange={(event) => setKey(event.target.value)} />
      <button>search</button>
    </form>
  );
};
```

```typescript
// src/hooks/useActions.ts
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
```

第九步：在组件中获取状态并根据状态渲染 UI

```tsx
import { useSelector } from "react-redux";
import { AppState } from "../state";
import { PackagesState } from "../state/reducers/packages.reducer";

const Packages: FC = () => {
  const state = useSelector<AppState, PackagesState>((state) => state.packages);

  return (
    <>
      {state.loading && <div>loading....</div>}
      {state.error && <div>{state.error}</div>}
      {state.list.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
};
```

定义应用全局状态的类型，用于传递给 useSelecter 钩子函数

```typescript
// src/state/reducers/index.ts
export type AppState = ReturnType<typeof reducers>;
```

第十步：优化为应用全局状态设置类型的代码

```react
// src/hooks/useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppState } from "../state/reducers";

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
```

```tsx
// src/components/Packages.tsx
import { useTypedSelector } from "../hooks/useTypedSelector";

const Packages: FC = () => {
  const state = useTypedSelector((state) => state.packages);
};
```



















