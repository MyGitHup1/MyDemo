<template>
  <div class="login">
    <h1>{{msg}}</h1>
    <div class="loginform">
      <el-form
        ref="form"
        hide-required-asterisk
        @submit.native.prevent
        :rules="rules"
        :model="form"
      >
        <el-form-item prop="account">
          <el-input v-model="form.account" prefix-icon="el-icon-user" placeholder="请输入账号">
            <!-- <slot><input type="text" style="background :red" v-model="form.account"></slot> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import CookieUtils from '@/utils/cookieUtils'
import request from '@/utils/request'
export default {
  name: 'login',
  data () {
    return {
      msg: '信贷管理系统',
      form: {
        account: 'admin',
        password: 'admin@123'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ]
      },
      body: `background-image: url('static/timg.jpg');
        background-repeat: no-repeat;
        background-size: 100%;`
    }
  },
  methods: {
    // 提交登录
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          request
            .post('/api/user/login', this.form)
            .then(res => {
              if (res.data.code === 20000) {
                this.$router.push('/home')
                CookieUtils.set(res.data.data.token)
                // 将token保存在 vuex
                this.$store.dispatch('SET_TOKEN',res.data.data.token)
              } else {
                throw new Error('请登录')
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    // document.querySelector('body').setAttribute('class', 'body')
    document.querySelector('body').setAttribute('style', this.body)
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$redColor: red;
$greenColor: green;
body,
html {
  background-image: url("/src/assets/timg.jpg");
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  text-align: center;
  width: 400px;
  padding: 10px;
  background: #FFFFFF;
  // height: 300px;
}
</style>
