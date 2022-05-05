import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";

// 读取文件并存储为数组格式
const matches = new CsvFileReader("football.csv");
matches.read();
// console.log(matches)

// 使用枚举
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}
let manUnitedWins = 0;

for (let match of matches.data) {
  // 曼联球队为主场赢得比赛的情况
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
    // 曼联球队为客场赢得比赛的情况
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// console.log(manUnitedWins)
