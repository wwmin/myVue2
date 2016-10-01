<template>
  <div>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
      <el-menu-item index="1" >
        <router-link to="/home">主页</router-link>
        </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">项目管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default{
    data(){
      return {

      }
    },
    ready(){
    },
    methods: {
      handleselect:function(e,d){
        console.log(e,d);
        console.log("nav is start");
      }
    },
    computed: {

    },
    events: {
    },
    components: { //三种写法,注意命名转变

    }
  }
</script>

<style scoped>

</style>
