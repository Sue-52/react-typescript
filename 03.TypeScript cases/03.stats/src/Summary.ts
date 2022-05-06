import { MatchData } from "./type";

// 用来约束分析行为的接口
export interface Analyzer {
    // 用于实现分析过程的方法, 接收比赛信息作为参数, 返回分析结果
    run(matches: MatchData[]): string;
}

// 用来约束输出行为的接口
export interface OutputTarget {
    // 用于实现输出过程的方法, 接收分析结果作为参数
    print(report: string): void;
}

// 用来组合分析行为和输出约束的类
export class Summary {
    constructor(public analyer: Analyzer, public outputTarget: OutputTarget) { }
    //分析并输出结果
    buildAndPrintReport(matches: MatchData[]) {
        const output = this.analyer.run(matches);
        this.outputTarget.print(output);
    }
}