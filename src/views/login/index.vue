<template>
    <div class="login-container">
      <el-form class="login-form" ref="loginForm" :model="user" :rules="loginRules" >
        <el-form-item class="index-logo">
          <img src="./logo_index.png" alt="">
        </el-form-item>
        <el-form-item  prop="mobile">
          <el-input
           placeholder="请输入手机号"
           v-model="user.mobile">
          </el-input>
        </el-form-item>
        <el-form-item  prop="code">
          <el-input
           v-model="user.code"
           placeholder="请输入验证码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="user.checked">
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
import { loginUser } from '@/api/user.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false
      },
      loginLoading: false,
      loginBtn: '登录',
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|9|8|6]\d{9}$/, message: '输入正确的格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '输入正确的格式', trigger: 'change' }
        ],
        checked: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                console.log(this.checked)
                callback()
              } else {
                callback(new Error('请勾选用户同意协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  activated () {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 登录请求
    onLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          return false
        }
        this.login()
      })
    },
    login () {
      const user = this.user
      this.loginLoading = true
      this.loginBtn = '登录中'
      loginUser(user).then(res => {
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
