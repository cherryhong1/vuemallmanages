<template>
  <div class="login flex-row-center">
    <div class="container flex-column-center">
      <h1>{{ title }}</h1>
      <el-form
        ref="loginForm"
        :model="loginForm"
        status-icon
        label-position="left"
      >
        <el-form-item label="姓名">
          <el-input
            type="text"
            v-model="loginForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLoginForm()"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from "../api/user"
export default {
  name: "Login",
  data() {
    return {
      title: "购物商城后台管理系统",
      loginForm: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async submitLoginForm() {
     const res = await login(this.loginForm);
     console.log(res)
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  background: #575454;
  .container {
    background: #fff;
    line-height: 1.5;
    width: 400px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    h1 {
      line-height: 60px;
    }
    .el-input,
    .el-button {
      width: 200px;
    }
    .el-form-item {
      margin-bottom: 0;
    }
    .el-button {
      margin-top: 20px;
    }
  }
}
</style>