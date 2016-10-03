<template>
  <div id="app">

    <!--<div style="float:right;position: absolute;">-->
    <!--<my-vertical-nav></my-vertical-nav>-->
    <!--</div>-->
    <div>
      <my-nav></my-nav>
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
      <!--<my-table></my-table>-->
    </div>

    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script>
  /*两种引入外部模块的方案*/
  var module = require('./assets/lib/myUtiles').default; //第一种 用变量接收 require进来的外部模块导出的值
  import  {sqrt, square} from './assets/lib/bar' //第二种 用import添加模块变量

  import myNav from './components/nav.vue'
  import myVerticalNav from './components/navVertical.vue'
  import Hello from './components/Hello'
  import myTable from './components/myTable.vue'
  export default {
    mounted(){

      console.log(square(3));
      console.log(module);
      module.CoolModule().doSomething();
    },
    components: {
      myNav,
      myVerticalNav,
      Hello,
      myTable
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 100%;
    /*max-width: 800px;*/
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
