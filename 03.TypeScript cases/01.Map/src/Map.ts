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
}