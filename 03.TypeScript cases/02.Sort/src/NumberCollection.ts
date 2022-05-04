import { Sortable, Sorter } from "./Sorter";

export class NumberCollection extends Sorter implements Sortable {
  // 1. 接收数字数组类型数据
  constructor(public data: number[]) {
    super();
  }
  // 2. 获取 length
  get length(): number {
    return this.data.length;
  }
  // 3. 将冒泡排序中的判断独立拆分
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }
  // 4. 将冒泡排序中的交换数值独立拆分
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}