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
				default-active="2"
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
					<template slot="title">分组一</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title">导航二</span>
				</el-menu-item>
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
			
				<el-main>
					<el-table :data="tableData">
						<el-table-column prop="date" label="日期" width="140">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址">
						</el-table-column>
					</el-table>
				</el-main>
				<el-footer>Footer</el-footer>
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
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
