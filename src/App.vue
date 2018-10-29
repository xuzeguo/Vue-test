<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Main from "./components/Main"
import Login from "./components/login/Login"
export default {
  name: 'App',
  components:{
    Login,Main
  }
}
</script>

<style>
#app {
  height:100%;
}
html,body{
  width:100%;
  height:100%;
  margin:0;
}
.el-aside a {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
</style>
