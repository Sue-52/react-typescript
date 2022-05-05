"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
// 读取文件并存储为数组格式
const matches = new CsvFileReader_1.CsvFileReader("football.csv");
matches.read();
// console.log(matches)
// 使用枚举
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of matches.data) {
    // 曼联球队为主场赢得比赛的情况
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
        // 曼联球队为客场赢得比赛的情况
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log(manUnitedWins)
