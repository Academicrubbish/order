<template>
  <div>
    <nav-bar class="nav">
      <img slot="left" src="@/assets/img/resource/elemei.png" style="width: 80px;">
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "mainNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .nav {
    background-color: #6eb6ff;
    color: #fff;
    font-size: 18px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  .nav img{
    margin-top:10px ;
    margin-left: 10px;
  }
  .el-button {
    color: #fff;
    background-color: #6eb6ff;
  }
</style>
