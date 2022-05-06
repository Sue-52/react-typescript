// src/ReportTargets/ConsoleReport.ts
import { OutputTarget } from "../Summary";
import fs from "fs";


export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}
export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `<h1>分析结果</h1><div>${report}</div>`;
        fs.writeFileSync("report.html", html);
    }
}