"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    // 接收 csv 文件名称
    constructor(filename) {
        this.filename = filename;
        // 用于存储 csv 文件数据
        this.data = [];
    }
    // 写读取文件方法
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => row.split(","))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
