<template>
    <el-container class="layout-container">
      <el-aside width="200px" class="aside">
        <layout-aside/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="company">
            <div class="el-icon-s-fold"></div>
            <span>头条有限公司</span>
          </div>
          <el-dropdown>
            <span class="el-dropdown-link user-info">
              <img :src="user.photo" alt="">
              <span>{{ user.name }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main class="main"><router-view/></el-main>
      </el-container>
    </el-container>
</template>
<script>
import LayoutAside from './childComponents/LayoutAside.vue'
import { getUserProfile } from '@/api/user.js'

export default {
  name: 'Layout',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    getUser () {
      getUserProfile().then(res => {
        // console.log(res)
        this.user = res.data.data
      })
    }
  },
  components: {
    LayoutAside
  },
  activated () {},
  watch: {},
  created () {
  },
  mounted () {
    this.getUser()
  }
}
</script>
<style lang="less" scoped>
.layout-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.aside {
  background-color: #001E34;
  overflow: hidden;
}
.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .company {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      padding-left: 10px;
    }
  }
}
.main {
  background-color: #E9EEF3;
}
.user-info {
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border-radius: 50%;
  }
  span {
    padding-left: 10px;
  }
}
</style>
