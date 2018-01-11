# baiduLocation
VUE使用百度定位

先在index.html引用 

<script src="https://api.map.baidu.com/api?v=2.0&ak=nFMKEH9zWTFGkoVcRCTfswhRc9mHKlwG&s=1"></script>

# 配置webpack.base.conf.js

externals: {
    'BMap': 'window.BMap'
  },
  
# 使用
  
  import baiduLocation from '@/utils/baidu-location'
  
  Vue.use(baiduLocation)
  
   // 百度定位需在mounted后使用
   
  mounted () {
    this.$baiduLocation(res => {
      this.area = `${res.province} ${res.city} ${res.district}`
    })
  }
