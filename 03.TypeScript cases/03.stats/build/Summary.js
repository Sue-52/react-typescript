"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// 用来组合分析行为和输出约束的类
class Summary {
    constructor(analyer, outputTarget) {
        this.analyer = analyer;
        this.outputTarget = outputTarget;
    }
    //分析并输出结果
    buildAndPrintReport(matches) {
        const output = this.analyer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
