<template>
  <div class="layout-aside-container">
    <div class="logo-admin">
        <img src="../logo_admin.png" alt="">
    </div>
    <el-menu
        default-active="/"
        class="el-menu-aside"
        background-color="#001E34"
        text-color="#fff"
        active-text-color="#D9CC97"
        router
        >
        <el-menu-item index="/">
          <i class="iconfont icon-Homehomepagemenu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="iconfont icon-article"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/images">
          <i class="iconfont icon-image"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="iconfont icon-publish"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="iconfont icon-zixundianji"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="iconfont icon-fans"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <i class="iconfont icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
  name: 'LayoutAside',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  activated () {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.layout-aside-container {
  height: 100%;
  background-color: #001E34;
  .logo-admin{
    height: 6%;
    padding:20px 20px 0 30px;
    img {
      width: 40%;
    }
  }
  .el-menu-aside {
    height: 80%;
    .iconfont {
      padding-right: 10px;
      padding-left: 5px;
    }
  }
}

</style>
