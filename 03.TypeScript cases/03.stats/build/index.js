"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 读取文件类
// import { CsvFileReader } from "./CsvFileReader";
const MatchReader_1 = require("./MatchReader");
// 读取文件并存储为数组格式
const matches = new MatchReader_1.MatchReader("football.csv");
matches.read();
console.log(matches.data);
// const summary = new Summary(matches.data, console.log);
