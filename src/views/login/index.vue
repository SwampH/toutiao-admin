<template>
    <div class="login-container">
      <el-form class="login-form" ref="form" :model="user">
        <el-form-item class="index-logo">
          <img src="./logo_index.png" alt="">
        </el-form-item>
        <el-form-item>
          <el-input
           placeholder="请输入手机号"
           v-model="user.mobile">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
           v-model="user.code"
           placeholder="请输入验证码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
           我已阅读并同意用户协议和隐私条款
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            :loading="loginLoading"
            @click="onLogin">{{loginBtn}}</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import request from '@/utils/request.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      checked: false,
      loginLoading: false,
      loginBtn: '登录'
    }
  },
  activated () {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 登录请求
    onLogin () {
      const user = this.user
      this.loginLoading = true
      this.loginBtn = '登录中'
      request({
        url: '/mp/v1_0/authorizations',
        method: 'POST',
        data: user
      }).then(res => {
        // 登录成功
        this.$message({
          message: '登录成功',
          type: 'success',
          center: true
        })
        this.loginLoading = false
        this.loginBtn = '登录'
        console.log(res)
      }).catch(err => {
        console.log('登录失败', err)
        // 登录失败
        this.$message({
          message: '登录失败，用户名或密码错误',
          type: 'error',
          center: true
        })
        this.loginLoading = false
        this.loginBtn = '登录'
      })
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(./login_bg.jpg) no-repeat;
  background-size:cover;
  .login-form{
    background-color: #fff;
    padding:25px 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
    .index-logo {
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
      }
    }
  }
}

</style>
