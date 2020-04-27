<template>
<div class="regist_container">
    <div class="regist_box">
        <p class="regist_head">注册</p>
        <el-form label-width="0" :model="registForm" :rules="registFormRules" ref="registForm" class="regist_form">
            <el-form-item prop="username">
                <el-input v-model="registForm.username" placeholder="请输入用户名" prefix-icon="iconfont icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="registForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input v-model="registForm.checkPass" placeholder="请输入密码" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" size="small" class="regist_btn" @click="regist">注册</el-button>
                <p class="regist_proto">注册即代表同意《知乎协议》《隐私保护指引》</p>
            </el-form-item>
            <el-form-item class="login_btn">
                <el-button type="info" size="mini" @click="goToLogin">登录</el-button>
                <el-button type="primary" size="mini" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default{
    data(){
        // 确认密码校验
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.registForm.password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            registForm: {
                username: '',
                password: '',
                checkPass: ''
            },
            registFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
    },
    methods: {
        // 去登录
        goToLogin(){
            this.$router.push('/login')
        },
        // 重置
        reset(){
            this.registForm = {}
        },
        regist(){
            // 提交请求前，先进行表单验证
            this.$refs.registForm.validate(async valid => {
                if(!valid) return
                // 验证成功
                const {data: res} = await this.$http.post('/regist',this.registForm)
                if(res.status === 200){
                    this.$router.push('/login')
                    this.$message({
                        message: `${res.message}`,
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: `${res.message}`,
                        type: 'warning',
                        center: true
                    })
                    this.registForm = {}
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.regist_container{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-image: url(../assets/background.png);
    background-size:100% 100%;
    position relative
}
.regist_box{
    width 30%
    height 68%
    position absolute;
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 3px
}
.regist_head{
    text-align center
    font-size 18px
    color #0084ff
}
.regist_form{
    width 100%
    padding 0 20px
    box-sizing border-box
}
.btns{
    text-align center
}
.regist_btn{
    width 100%
}
.regist_proto{
    font-size 12px
    margin 0
    height 30px
    color grey
}
.login_btn{
    text-align center
    margin-bottom 6px
}
</style>