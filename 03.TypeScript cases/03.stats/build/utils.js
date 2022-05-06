"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToData = void 0;
// 将日期字符串转换为日期对象
function dateStringToData(dateString) {
    const dateParts = dateString
        .split("/")
        .map((value) => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringToData = dateStringToData;
