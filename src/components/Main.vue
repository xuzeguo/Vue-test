<template>
	<el-container style="height: 100%; ">
		<el-header style="text-align: right; font-size: 14px; background-color: #000; color:#999; font-weight:600" >
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>查看</el-dropdown-item>
				<el-dropdown-item>新增</el-dropdown-item>
				<el-dropdown-item>删除</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>王小虎</span>
		</el-header>
	
		<el-container>
			<el-aside width="200px" height="100%" style="background-color: #545c64">
				<el-menu
				default-active="1-1"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b">
				<el-submenu index="1">
					<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
					</template>
					<el-menu-item-group>
						<router-link :to="{ path:'/'}">
							<el-menu-item index="1-1">Demo</el-menu-item>
						</router-link>
						<router-link :to="{ path:'/component-test'}">
							<el-menu-item index="1-2">component-test</el-menu-item>
						</router-link>
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>

				<router-link :to="{ path:'/test' }">
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">test</span>
					</el-menu-item>
				</router-link>
				
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
			
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer height="50px" style="">copyright@xuze.guo</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-main{
	  height:100%;
  }
  .el-aside {
    color: #333;
  }
	.el-footer {
		background-color: #000;
		color:#999;
		line-height:50px;
		text-align:right;
	}
</style>

<script>
  export default {
		created(){
			console.log("store",this.$store)
		},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
