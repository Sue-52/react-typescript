import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

// 初步实现
// 不足之处：
// 1. 数据只能是数字数组，无法进行其他类型的排序
// 解决方法1：类型守卫
// 缺点：格式固定，且扩展麻烦
// 解决方法2：不同类型数据结构创建对应的排序类
// const sorter = new Sorter([9, 5, 8, 21, 12, 2, 1]);
// sorter.sort();
// console.log(sorter.collection);

// 不足之处：调用层级过多需简化
// 解决方法：通过继承
// 使用数值数组排序类创建数值数组排序实例
const numberCollection = new NumberCollection([9, 5, 8, 21, 12, 2, 1]);
// 创建排序类实例，并传入数值数组排序类实例
// const sorterNumber = new Sorter(numberCollection);
// 调用排序方法
numberCollection.sort();
// 输出排序结果
console.log(numberCollection.data);

// 使用数值数组排序类创建数值数组排序实例
const characterCollection = new CharacterCollection("asdfih");
// 调用排序方法
characterCollection.sort();
// 输出排序结果
console.log(characterCollection.data);