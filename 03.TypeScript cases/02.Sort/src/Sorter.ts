// 因为传递的数值固定位数组，定义一个接口规范
export interface Sortable {
  data: number[] | string;
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // 抽象类告诉了当前类没有该方法但是子类通过继承后拥有了该方法
  // 防止报错
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // // 构造体接收需排序数据
  // constructor(public collection: Sortable) { }
  // 排序方法
  sort(): void {
    // 解构 length
    const { length } = this;
    // 冒泡排序
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // 调用比较方法
        if (this.compare(j, j + 1)) {
          // 调用交换方法
          this.swap(j, j + 1);
        }
      }
    }
  }
}