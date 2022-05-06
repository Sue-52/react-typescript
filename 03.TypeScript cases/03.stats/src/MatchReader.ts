// src/MatchReader.ts
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./matchResult";
import { dateStringToData } from "./utils";
import { MatchData } from "./type";

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToData(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}