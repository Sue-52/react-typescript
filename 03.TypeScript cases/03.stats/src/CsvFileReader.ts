import fs from "fs";

export abstract class CsvFileReader<T> {
  // 用于存储 csv 文件数据
  data: T[] = [];
  // 接收 csv 文件名称
  constructor(public filename: string) { }

  abstract mapRow(row: string[]): T;

  // 写读取文件方法
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow)
  }
}

