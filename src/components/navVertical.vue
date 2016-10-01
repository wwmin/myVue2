<template>
    <div>
      <!--<el-row class="tac">-->
        <!--<el-col :span="18">-->
          <!--<h5>带 icon</h5>-->
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group title="分组一">
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<h5>不带 icon</h5>-->
          <!--<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">-->
            <!--<el-submenu index="1">-->
              <!--<template slot="title">导航一</template>-->
              <!--<el-menu-item-group title="分组一">-->
                <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
              <!--</el-menu-item-group>-->
              <!--<el-menu-item-group title="分组2">-->
                <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="2">导航二</el-menu-item>-->
            <!--<el-menu-item index="3">导航三</el-menu-item>-->
          <!--</el-menu>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<h5>分组</h5>-->
          <!--<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">-->
            <!--<el-menu-item-group title="分组一">-->
              <!--<el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>-->
              <!--<el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组二">-->
              <!--<el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>-->
              <!--<el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>-->
              <!--&lt;!&ndash; <el-submenu index="5">-->
                <!--<template slot="title">导航五</template>-->
                <!--<el-menu-item-group title="分组一">-->
                  <!--<el-menu-item index="5-1">选项1</el-menu-item>-->
                  <!--<el-menu-item index="5-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="分组二">-->
                  <!--<el-menu-item index="5-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
              <!--</el-submenu> &ndash;&gt;-->
            <!--</el-menu-item-group>-->
          <!--</el-menu>-->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        ready(){},
        methods:{
          handleopen:function(e,d){
            console.log(e,d);
          },
          handleclose:function(e,d){
            console.log(e,d);
          }
        },
        computed:{

        },
        events:{

        },
        components:{ //三种写法,注意命名转变

        }
    }
</script>

<style scoped>

</style>
