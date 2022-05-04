import { Sortable, Sorter } from "./Sorter";

export class CharacterCollection extends Sorter implements Sortable {
  // 1. 接收数字数组类型数据
  constructor(public data: string) {
    super();
  }
  // 2. 获取 length
  get length(): number {
    return this.data.length;
  }
  // 3. 将冒泡排序中的判断独立拆分
  // 字符串比较 Unicode 码点大小
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  }
  // 4. 将冒泡排序中的交换数值独立拆分
  swap(leftIndex: number, rightIndex: number): void {
    // 将字符串转换为数组
    const characters = this.data.split("");
    // 通过数组交换值
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    // 最后拼接为字符串
    this.data = characters.join("");
  }
}