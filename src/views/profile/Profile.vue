<template>
	<div class="bg">
		<!-- 登陆页面 -->
		<!-- <login v-if="loginState"/> -->
		<!-- 登陆成功后的页面 -->
		<div>
			<!-- 用户基础信息 -->
			<user-data />
			<!-- 功能页 -->
			<options />
			<!-- 退出登录 -->
			<logout />
		</div>
	</div>
</template>

<script>

import Login from './childComp/Login'
import Logout from './childComp/Logout.vue'
import Options from './childComp/Options'
import UserData from './childComp/UserData'

export default {
	name: "Profile",
	data() {
		return {

		}
	},
	components: {
		Login,
		UserData,
		Options,
		Logout
	},
	computed: {
		loginState() {
			return !this.$store.state.token
		}
	},
	methods: {
	}
}
</script>

<style scoped>
.el-card {
	width: 96%;
	margin-left: 2%;
}

.bg {
	width: 100%;
	background-image: url(assets/img/resource/Background.png);
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: 0px 50px;
	background-size: 100%;
}
</style>
