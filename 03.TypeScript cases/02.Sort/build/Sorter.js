"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // // 构造体接收需排序数据
    // constructor(public collection: Sortable) { }
    // 排序方法
    sort() {
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
exports.Sorter = Sorter;
