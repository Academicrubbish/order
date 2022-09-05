<template>
	<div>

		<!-- 搜索区 -->
		<div class="search-control">
			<el-input placeholder="搜索菜品名称..." v-model="input" prefix-icon="el-icon-search"
				@keyup.enter.native="searchHomeData">
			</el-input>
		</div>


		<tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" class="tab-control"></tab-control>

		<!-- 商品列表 -->
		<goods :goods="showGoods" />

	</div>
</template>

<script>

import { getHomeData, searchHomeData } from 'network/home'

import Goods from './childComps/Goods.vue';
import TabControl from "components/content/tabControl/TabControl";

export default {
	name: "Home",
	components: {
		Goods,
		TabControl
	},
	data() {
		return {
			total: 0,
			titles: ['菜品', '主食', '饮品'],
			goodsList: {
				'1': { page: 0, list: [] },
				'2': { page: 0, list: [] },
				'3': { page: 0, list: [] }
			},
			start: 0,
			input: '',
			currentType: '1'
		}
	},
	computed: {
		showGoods() {
			return this.goodsList[this.currentType].list
		}
	},
	methods: {
		/**
		 * 网络请求相关函数 */
		getHomeData(type) {
			getHomeData(type).then(res => {
				this.goodsList[type].list.push(...res)
				//(...res.data.list)
				// 将请求过来的数组解构一个一个存到我们的数组里去
				// 因为如果直接传值的话，后面的就会覆盖前面的
				// console.log(this.goodsList)
			})
		},

		searchHomeData() {
			var value = this.input.trim()
			if (!value) {
				this.goodsList[this.currentType].list = [];
				this.getHomeData(this.currentType)
			} else {
				searchHomeData(value).then(res => {
					res.forEach(element => {
						//匹配value 对应字符 g 全局匹配
						var patt = new RegExp(value, "g");
						element.name = element.name.replace(patt, `<span style="color: red">${value}</span>`);
					});
					this.goodsList[this.currentType].list = res
				}).catch(err => {
					this.$notify({
						title: '搜索不到噢',
						message: '可能是输入关键词错啦',
						position: 'top-left'
					});
				})
			}
		},

		//事件监听相关方法
		tabClick(index) {
			this.goodsList[this.currentType].list = [];
			this.getHomeData(this.currentType);
			switch (index) {
				case 0:
					this.currentType = '1'
					break
				case 1:
					this.currentType = '2'
					break
				case 2:
					this.currentType = '3'
					break
			}
		}
	},
	mounted() {
		this.getHomeData('1')
		this.getHomeData('2')
		this.getHomeData('3')

		console.log(this.goodsList)

	}
}
</script>

<style scoped>
.el-input {
	margin-top: 10px;
	margin-bottom: 10px;
	width: 98%;
	margin-left: 1%;
	border-radius: 10px;
}
div /deep/ .el-input__inner{   
	border-radius: 20px;
}
.search-control {
	background-color: #6eb6ff;
	height: 55px;
	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
	position: sticky;
	top: 50px;
	z-index: 9;
}

.tab-control {
	position: sticky;
	top: 105px;
	z-index: 9;
	box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
</style>
