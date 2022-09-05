<template>

</template>

<script>

import { getData } from 'network/test'

export default {
	name: "Test",
	components: {	
	},
	data() {
		return {
		}
	},
	methods: {
		/**
		 * 网络请求相关函数 */ 
		getData() {
			getData().then(res => {
                console.log(res)
				// this.total = res.total
				// this.goodsList.push(...res.subjects)
				//(...res.data.list)
                //将请求过来的数组解构一个一个存到我们的数组里去
                //因为如果直接传值的话，后面的就会覆盖前面的
			})
		}
	},
	mounted() {
		this.getData()
	}
}
</script>

<style scoped>
</style>
