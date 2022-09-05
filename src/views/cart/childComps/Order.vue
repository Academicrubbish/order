<template>
	<div>
    <el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/cart' }" replace style="padding-left:15px">购物车</el-breadcrumb-item>
			<el-breadcrumb-item>订单页</el-breadcrumb-item>
		</el-breadcrumb>
    <el-card>
      <router-link to="/inStoreDining"><el-button><i class="el-icon-dish"></i>店内就餐</el-button></router-link>
      <router-link to="/takeOutDelivery" class="right"><el-button><i class="el-icon-bicycle"></i>外卖配送</el-button></router-link>
      <router-view></router-view>
    </el-card>
	</div>
</template>

<script>

export default {
	name: "Order",

}
</script>

<style scoped>
	.el-breadcrumb {
		background-color: #f6f6f6;
		height: 40px;
		margin-top: 0px;
		font-size: 16px;
		line-height: 2.5;
    border-radius: 4px;
	}
</style>
