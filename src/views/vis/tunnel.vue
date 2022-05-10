<template>
  <div class="app-container">
    隧道基本信息
  </div>
</template>
<script>
import {getTunnelBasicInformation} from "@/api/tunnel";

export default {
  data() {  //定义变量和初始值
    return {
      list: null,
      tunnelId: '0100000000'
    }
  },

  created() { //页面渲染之前执行，一般调用methods定义的方法
    this.getTunnelBasicInformation()
  },

  methods: { //创建具体的方法，调用tunnel.js定义的方法
    //隧道基本信息
    getTunnelBasicInformation(){
      getTunnelBasicInformation(this.tunnelId)
      .then(response=>{ //请求成功
          //response接口返回的数据
        console.log(response)
      })
      .catch(error => { //请求失败
        console.log(error)
      })
    }
  }
}
</script>
