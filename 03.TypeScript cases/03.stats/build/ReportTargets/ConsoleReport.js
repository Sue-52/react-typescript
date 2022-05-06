"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.ConsoleReport = void 0;
const fs_1 = __importDefault(require("fs"));
class ConsoleReport {
    print(report) {
        console.log(report);
    }
}
exports.ConsoleReport = ConsoleReport;
class HtmlReport {
    print(report) {
        const html = `<h1>分析结果</h1><div>${report}</div>`;
        fs_1.default.writeFileSync("report.html", html);
    }
}
exports.HtmlReport = HtmlReport;
