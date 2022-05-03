import { User } from "./User";
import { Company } from "./Company";

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

  addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    })
    // 创建标记
    const marker = new google.maps.Marker();
    // 设置标记的位置
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hello I am marker content"
      })
      infoWindow.open(this.googleMap, marker)
    })
  }


}