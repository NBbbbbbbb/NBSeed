<template>
  <div>
    <div class="content">
      <form action="##">
        <div class="input-text clearFix">
          <i></i>
          <input type="text" placeholder="手机号" />
          <span class="error-msg" v-show="false">错误提示信息</span>
        </div>

        <div class="input-text clearFix">
          <i class="pwd"></i>
          <input type="text" placeholder="请输入密码" />
          <span class="error-msg" v-show="false">错误提示信息</span>
        </div>

        <div class="setting clearFix">
          <label class="checkbox inline">
            <input name="m1" type="checkbox" value="2" checked="" />
            自动登录
          </label>
          <span class="forget">忘记密码？</span>
        </div>
        <button class="btn">登&nbsp;&nbsp;录</button>
      </form>
      <div class="call clearFix">
        <ul>
          <li><img src="../img/qq.png" alt="" /></li>
          <li><img src="../img/sina.png" alt="" /></li>
          <li><img src="../img/ali.png" alt="" /></li>
          <li><img src="../img/weixin.png" alt="" /></li>
        </ul>
        <a href="##" class="register">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
};
</script>

<style lang="less"  scoped>
 .content {
      width: 380px;
      height: 316px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-top: none;
      padding: 18px;
      form {
        margin: 15px 0 18px 0;
        font-size: 12px;
        line-height: 18px;
        .input-text {
          margin-bottom: 22px;
          position: relative;
          i {
            float: left;
            width: 37px;
            height: 32px;
            border: 1px solid #ccc;
            background: url(../img/icons.png) no-repeat -10px -201px;
            box-sizing: border-box;
            border-radius: 2px 0 0 2px;
          }
          .pwd {
            background-position: -72px -201px;
          }
          input {
            width: 302px;
            height: 32px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-left: none;
            float: left;
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 14px;
            line-height: 22px;
            padding-right: 8px;
            padding-left: 8px;

            border-radius: 0 2px 2px 0;
            outline: none;
          }

          .error-msg {
            position: absolute;
            top: 100%;
            left: 40px;
            color: red;
          }
        }
        .setting {
          label {
            float: left;
          }
          .forget {
            float: right;
          }
        }
        .btn {
          background-color: #e1251b;
          padding: 6px;
          border-radius: 0;
          font-size: 16px;
          font-family: 微软雅黑;
          word-spacing: 4px;
          border: 1px solid #e1251b;
          color: #fff;
          width: 100%;
          height: 36px;
          margin-top: 25px;
          outline: none;
        }
      }
      .call {
        margin-top: 30px;
        ul {
          float: left;
          li {
            float: left;
            margin-right: 5px;
          }
        }
        .register {
          float: right;
          font-size: 15px;
          line-height: 38px;
        }
        .register:hover {
          color: #4cb9fc;
          text-decoration: underline;
        }
      }
    }
</style>