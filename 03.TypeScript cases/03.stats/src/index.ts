// 读取文件类
// import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
// 引入输出方法
import { OutputTarget, Summary } from "./Summary";

// 读取文件并存储为数组格式
const matches = new MatchReader("football.csv");
matches.read();

console.log(matches.data)

// const summary = new Summary(matches.data, console.log);