// 将日期字符串转换为日期对象
export function dateStringToData(dateString: string) {
    const dateParts = dateString
        .split("/")
        .map((value: string): number => parseInt(value));

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}