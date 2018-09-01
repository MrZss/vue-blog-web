<template>
<div class="header">
  <img class="logo">
  <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/index">主页</el-menu-item>
    <el-menu-item index="2" >文章</el-menu-item>
    <el-menu-item index="/about">个人简历</el-menu-item>
    <el-menu-item index="/about">种子嗅探</el-menu-item>
  </el-menu>
  <el-dropdown class="user" trigger="click">
    <span class="el-dropdown-link">
      查辰昊<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu class="user-select" slot="dropdown">
      <el-dropdown-item>写文章</el-dropdown-item>
      <el-dropdown-item>登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: '/index'
    }
  },
  created() {},
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(123)
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    min-width: 800px;
    height: 60px;
    display: flex;
    align-items: center;
    .logo{
      position: absolute;
      left: 30px;
      border-radius: 25px;
      height: 50px;
      width:50px;
      background: black;
    }
    .user{
        position: absolute;
        right: 100px;
        .el-dropdown-menu{
          display: flex;
          flex-direction: column;
        }
    }
    .el-menu-demo{
      position: absolute;
      left: 100px;
    }
}
</style>
