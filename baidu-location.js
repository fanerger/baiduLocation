// 百度定位
import BMap from 'BMap'
function BaiduMap (Vue) {
  Vue.prototype.$baiduLocation = function (callback) {
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(function (r) {
      var point = new BMap.Point(r.point.lng, r.point.lat)
      var geoc = new BMap.Geocoder()
      geoc.getLocation(point, function (rs) {
        var addComp = rs.addressComponents
        callback(addComp)
      })
    }, {enableHighAccuracy: true})
  }
}

export default BaiduMap
