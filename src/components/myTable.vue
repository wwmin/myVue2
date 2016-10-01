<template>
  <div>
    <el-table
      :data="tableData3"
      :fixed-column-count="1"
      border
      style="width:100%"
      height="250">
      <el-table-column
        property="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        property="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        property="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        property="zip"
        label="邮编"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        tableData3: [
          {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    ready(){
    },
    methods: {},
    computed: {
    },
    events: {
      //使用 $on() 监听事件；
      //使用 $emit() 在它上面触发事件；
      //使用 $dispatch() 派发事件，事件沿着父链冒泡；
      //使用 $broadcast() 广播事件，事件向下传导给所有的后代。
    }
  }
</script>

<style scoped>
</style>
