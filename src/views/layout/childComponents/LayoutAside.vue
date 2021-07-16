<template>
  <div class="layout-aside-container">
    <div class="logo-admin" :collapse="isCollapse" v-show="!isCollapse">
        <img src="../logo_admin.png" alt="">
    </div>
    <!-- 是否启动折叠动画 :collapse-transition="false"-->
    <el-menu
        default-active="/"
        class="el-menu-aside"
        background-color="#001E34"
        text-color="#fff"
        active-text-color="#D9CC97"
        router
        :collapse="isCollapse"
        :collapse-transition="false"
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
  props: ['is-collapse'],
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
  // height: 100%;
  .logo-admin{
    background-color: #001E34;
    height: 6%;
    padding:20px 80px 0 20px;
    display: flex;
    justify-content: center;
    img {
      width: 60px;
      height: 43px;
    }
  }
  .el-menu-aside {
    // background-color: #001E34;
    height: 100%;
    .iconfont {
      padding-right: 10px;
      padding-left: 5px;
    }
  }
}

</style>
