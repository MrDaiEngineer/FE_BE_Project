<template>
<div class="login_container">
    <div class="login_box">
        <p class="login_head">登录</p>
        <el-form label-width="0" :model="loginForm" class="login_form">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="iconfont icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" size="small" class="login_btn" @click="login">登录</el-button>
                <p class="login_proto">登录即代表同意《知乎协议》《隐私保护指引》</p>
            </el-form-item>
            <el-form-item class="regist_btn">
                <el-button v-if="isRegist" type="info" size="mini" @click="goToRegist">注册</el-button>
                <el-button v-else type="danger" size="mini" @click="goToRegist">注册</el-button>
                <el-button type="primary" size="mini" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            // 登录表单的数据绑定对象
            loginForm: {
                username: 'admin',
                password: 'admin'
            },
            isRegist: true
        }
    },
    created(){
    },
    methods: {
        // 去注册
        goToRegist(){
            this.$router.push('/regist')
        },
        // 重置
        reset(){
            this.loginForm = {}
        },
        // 登录请求
        async login(){
            const {data: res} = await this.$http.post('login', this.loginForm)
            if(res.status === 200){
                this.$router.push('/home')
            }else{
                this.isRegist = false
                this.$message.error(`${res.message}`)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.login_container{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-image: url(../assets/background.png);
    background-size:100% 100%;
    position relative
}
.login_box{
    width 30%
    height 58%
    position absolute;
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 3px
}
.login_head{
    text-align center
    font-size 18px
    color #0084ff
}
.login_form{
    width 100%
    padding 0 20px
    box-sizing border-box
}
.btns{
    text-align center
}
.login_btn{
    width 100%
}
.login_proto{
    font-size 12px
    margin 0
    height 30px
    color grey
}
.regist_btn{
    text-align center
    margin-bottom 6px
}
</style>