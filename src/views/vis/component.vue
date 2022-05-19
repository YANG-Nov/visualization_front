<template>
  <div class="app-container">
    <el-button v-for="(item,index) in specificComponentId" :key="'1' + index" @click="tabClick(item)">
      {{specificComponentName[index]}}
    </el-button>
    <el-descriptions :column="1" border v-show="showTable">
      <el-descriptions-item label="构件名称" label-class-name="my-label" content-class-name="my-content">{{name}}</el-descriptions-item>
      <el-descriptions-item label="材料" label-class-name="my-label">{{material}}</el-descriptions-item>
      <el-descriptions-item label="安装时间" label-class-name="my-label">{{installTime}}</el-descriptions-item>
      <el-descriptions-item label="安装部门" label-class-name="my-label">{{installDepartment}}</el-descriptions-item>
      <el-descriptions-item label="细部构造图等文件" label-class-name="my-label">{{document}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import {getComponentInformation} from "@/api/component";

export default {
  data() {  //定义变量和初始值
    return {
      name: '',
      material: '',
      installTime: '',
      installDepartment: '',
      document: '',
      specificComponentId: ['1000000000','1000000035'],
      specificComponentName: ['E1GINA止水带','E1-S1管节结构体'],
      showTable: false
    }
  },

  created() { //页面渲染之前执行，一般调用methods定义的方法
    this.getComponentInformation()
  },

  methods: { //创建具体的方法，调用tunnel.js定义的方法
    getComponentInformation(){
      // this.getInformation(this.specificComponentId[0])
      this.showTable = true;
    },
    tabClick(data) {
      this.getInformation(data);
      this.showTable = true;
    },
    getInformation(data){
      //隧道基本信息
      getComponentInformation(data)
        .then(response=>{ //请求成功
          //response接口返回的数据
          this.name = response.data.name
          this.material = response.data.material
          this.installTime = response.data.installTime
          this.installDepartment = response.data.installDepartment
          this.document = response.data.document
          // console.log(this.name)
          // console.log(this.material)
          // console.log(this.installTime)
          // console.log(this.installDepartment)
          // console.log(this.document)
        })
        .catch(error => { //请求失败
          console.log(error)
        })
    }
  }
}
</script>

<style>
.my-label {
  background: #E1F3D8;
  word-break: keep-all;
}

.my-content {
  background: #ffffff;
  max-width: 300px;
  word-break: break-all;
}
</style>
