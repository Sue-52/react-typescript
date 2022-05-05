import fs from "fs";

export class CsvFileReader {
  // 用于存储 csv 文件数据
  data: string[][] = [];
  // 接收 csv 文件名称
  constructor(public filename: string) { }
  // 写读取文件方法
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}