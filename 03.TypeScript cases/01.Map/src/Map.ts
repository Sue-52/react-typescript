import { User } from "./User";
import { Company } from "./Company";

// 定义接口
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class Map {
  // 存储地图实例
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // 创建地图
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 4,
        center: { lat: 0, lng: 0 },
      }
    )
  }

  // 添加地图标记
  // // 在地图中标记用户位置
  // addUserMarker(user: User) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     },
  //   })
  // }
  // // 在地图中标记公司位置
  // addCompanyMarker(company: Company) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     },
  //   })
  // }
  // 合并地图和用户位置

  addMarker(mappable: Mappable) {
    // 创建地图标记
    let marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    })
    // 绑定事件
    marker.addListener('click', () => {
      // 创建弹窗
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      // 打开弹框并指定弹框在哪个地图的哪个的标记的位置上弹出
      infoWindow.open(this.googleMap, marker);
    })
  }
}