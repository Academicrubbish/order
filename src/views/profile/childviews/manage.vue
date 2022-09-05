<template>
	<div>
		<!-- 页头 -->
		<el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/profile' }" replace style="padding-left:15px">用户</el-breadcrumb-item>
			<el-breadcrumb-item>菜品管理</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 表单 -->
		<p class="text">菜品管理</p>
		<el-card>
			<el-table :data="tableData" stripe width="100%">
				<el-table-column label="菜品" align="center">
					<template scope="scope">
						<img :src="scope.row.pictureUrl" width="68" height="45" />
					</template>
				</el-table-column>
				<el-table-column prop="name" label="名称" align="center" min-width="70" />
				<!-- <el-table-column prop="introduction" label="描述" align="center"/> -->
				<el-table-column prop="price" label="价格" align="center" min-width="70" />
				<el-table-column label="操作" align="center" min-width="46">
					<template slot-scope="scope">

						<el-button @click="test(scope.$index)" type="text" size="small">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<el-drawer title="修改数据" :visible.sync="dialog" size="80%" custom-class="demo-drawer" ref="drawer">
			<div class="demo-drawer__content" style="margin: 10px;">
				<el-form ref="form" :model="newData" label-width="50px">
					<el-form-item label="图片">
						<el-upload action="http://192.168.1.123:8888/upload/file" list-type="picture-card"
							:on-preview="handlePictureCardPreview">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</el-form-item>
					<el-form-item label="名称">
						<el-input v-model="newData[this.index].name"></el-input>
					</el-form-item>
					<el-form-item label="价格">
						<el-input v-model="newData[this.index].price"></el-input>
					</el-form-item>
					<el-form-item label="描述">
						<el-input v-model="newData[this.index].orderDesc"></el-input>
					</el-form-item>
				</el-form>

				<div class="demo-drawer__footer">
					<el-button @click.native.prevent="changeData(index, tableData)" type="primary">立即修改</el-button>
					<el-button @click.native.prevent="deleteRow(index, tableData)" type="danger">移除数据</el-button>
				</div>
			</div>
		</el-drawer>
		<el-button type="success" round @click="submitData">提交</el-button>
	</div>
</template>

<script>
import { getHomeData } from 'network/home'
import { uploadData } from 'network/profile'


export default {
	name: "manage",
	data() {
		return {
			tableData: [],
			dialog: false,
			newData: {},
			index: 0,
			dialogImageUrl: '',
			dialogVisible: false,
		}
	},
	methods: {
		//把store里的数据展示出来
		// obtainData() {
		// 	var i = 1;
		// 	for (let item of this.$store.state.orderList) {
		// 		const product = {};
		// 		product.num = i;
		// 		product.image = item.image;
		// 		product.price = item.name;
		// 		product.introduction = item.time;
		// 		this.tableData.push(product);
		// 		i++;
		// 	}
		// },
		getMangeData(a,b,c) {
			getHomeData(a).then(res => {
				this.tableData.push(...res)
				getHomeData(b).then(res => {
					this.tableData.push(...res)
					getHomeData(c).then(res => {
						this.tableData.push(...res)
						this.newData = this.tableData
						console.log(this.tableData)
						console.log(this.newData)
					})
				})
			})
		},
		test(index) {
			console.log(index)
			this.index = index;
			this.dialog = true;
		},
		//删除某一项
		deleteRow(index, rows) {
			rows.splice(index, 1);
			this.dialog = false;
		},
		changeData(index, rows) {
			// 改变数组并实时更新
			// Vue.set(target, key, value) 或 this.$set(target, key, value) 接受三个参数:
			// target：表示数据源，即是你要操作的数组或者对象
			// key：要操作的的字段
			// value：更改的数据
			this.$set(rows, index, this.newData);
			this.newData = { image: "", name: "", price: 0, introduction: "" };
			this.dialog = false;
		},
		//
		submitData() {
			let list = JSON.stringify(this.tableData)
			console.log(list);
			// uploadData(list).then(res => {
			// 	console.log(res);
			// })
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview() {
			this.dialogImageUrl = 'http://192.168.1.123:8888/uploadImg/1.jpeg';
			this.dialogVisible = true;
		},
	},
	mounted() {
		this.getMangeData('1','2','3')
	}
}
</script>

<style scoped>
.el-breadcrumb {
	background-color: #f6f6f6;
	height: 40px;
	margin-top: 12px;
	font-size: 16px;
	line-height: 2.5;
}

.el-card {
	width: 96%;
	margin-left: 2%;
	margin-top: 10px;
}

.text {
	font-size: 30px;
	text-align: center;
	margin-top: 20px;
}

.el-table th.el-table__cell>.cell {
	text-align: center;
}

.el-table td.el-table__cell div {
	text-align: center;
}
</style>
