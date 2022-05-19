<template>
  <div class="app-container">
    <el-descriptions title="项目信息" :column="1" border>
      <el-descriptions-item label="隧道名称" label-class-name="my-label" content-class-name="my-content">{{name}}</el-descriptions-item>
      <el-descriptions-item label="业主单位" label-class-name="my-label">{{ownerUnit}}</el-descriptions-item>
      <el-descriptions-item label="设计单位" label-class-name="my-label">{{designUnit}}</el-descriptions-item>
      <el-descriptions-item label="施工单位" label-class-name="my-label">{{constructionUnit}}</el-descriptions-item>
      <el-descriptions-item label="监理单位" label-class-name="my-label">{{supervisionUnit}}</el-descriptions-item>
      <el-descriptions-item label="隧道简介" label-class-name="my-label">{{introduction}}</el-descriptions-item>
    </el-descriptions>
  </div>

</template>
<style>
.my-label {
  background: #E1F3D8;
  word-break: keep-all;
}

.my-content {
  background: #ffffff;
  /*max-width: 300px;*/
  /*word-break: break-all;*/
}
</style>


<script>
import {getTunnelBasicInformation} from "@/api/tunnel";

export default {
  data() {  //定义变量和初始值
    return {
      name: '',
      ownerUnit: '',
      designUnit: '',
      constructionUnit: '',
      supervisionUnit: '',
      introduction: '',
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
        this.name = response.data.name
        this.ownerUnit = response.data.ownerUnit
        this.designUnit = response.data.designUnit
        this.constructionUnit = response.data.constructionUnit
        this.supervisionUnit = response.data.supervisionUnit
        this.introduction = response.data.introduction
        // console.log(this.name)
        // console.log(this.ownerUnit)
        // console.log(this.designUnit)
        // console.log(this.constructionUnit)
        // console.log(this.supervisionUnit)
        // console.log(this.introduction)
      })
      .catch(error => { //请求失败
        console.log(error)
      })
    }
  }
}
</script>
