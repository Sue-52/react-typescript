// 创建虚拟用户数据
import faker from "@faker-js/faker"

export class User {
  // 姓名
  name: string;
  // 位置
  location: {
    // 经度
    lat: number;
    // 纬度
    lng: number;
  };

  constructor() {
    // 随机用户名
    this.name = faker.name.firstName();
    // 随机用户地址
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}