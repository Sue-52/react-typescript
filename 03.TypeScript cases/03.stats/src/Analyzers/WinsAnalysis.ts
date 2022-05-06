import { MatchData } from "../type";
import { MatchResult } from "../matchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    // 接收球队名称
    constructor(public team: string) { }

    run(matches: MatchData[]): string {
        // 记录赢得比赛的次数
        let wins = 0;
        // 开始分析
        for (let match of matches) {
            // 记录球队为主场赢得比赛的情况
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                wins++;
                // 记录球队为客场赢得比赛的情况
            } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} 球队赢得了 ${wins} 场球赛`;
    }
}