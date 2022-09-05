<template>
	<el-card style="margin-top:10px">
		<div @click="go(0)" class="el-icon-s-custom">
			我的资料<i class="el-icon-arrow-right right" />
		</div>
		<el-divider></el-divider>
		<div @click="go(1)" class="el-icon-truck">
			默认地址<i class="el-icon-arrow-right right" />
		</div>
		<el-divider></el-divider>
		<div @click="go(2)" class="el-icon-s-order">
			用户订单<i class="el-icon-arrow-right right" />
		</div>
		<el-divider></el-divider>
		<div @click="go(3)" class="el-icon-box">
			待收货<i class="el-icon-arrow-right right" />
		</div>
		<el-divider></el-divider>
		<div @click="go(4)" class="el-icon-s-claim">
			全部订单<i class="el-icon-arrow-right right" />
		</div>
		<el-divider></el-divider>
		<div @click="go(5)" class="el-icon-s-tools">
			管理<i class="el-icon-arrow-right right" />
		</div>
	</el-card>
</template>

<script>

export default {
	name: "Options",
	data() {
		return {
			list: ['/profileData', '/profileAddress', '/list', '/pending', '/allList', '/manage']
		}
	},
	methods: {
		go(index) {
			this.$router.push(this.list[index])
		}
	}
}
</script>

<style scoped>
.el-card {
	width: 96%;
	margin-left: 2%;
	border-radius: 17px;
	background: rgba(255, 255, 255, .9);
}

div {
	line-height: 64px;
	width: 100%;
}

i {
	line-height: 64px;
}

.el-divider {
	margin: 0;
}

/deep/ .el-card__body {
	padding: 0 20px 0 20px;
}
</style>
