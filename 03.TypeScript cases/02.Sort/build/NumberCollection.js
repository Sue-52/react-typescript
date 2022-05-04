"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorter {
    // 1. 接收数字数组类型数据
    constructor(data) {
        super();
        this.data = data;
    }
    // 2. 获取 length
    get length() {
        return this.data.length;
    }
    // 3. 将冒泡排序中的判断独立拆分
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    // 4. 将冒泡排序中的交换数值独立拆分
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.NumberCollection = NumberCollection;
