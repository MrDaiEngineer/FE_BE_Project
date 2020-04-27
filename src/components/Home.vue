<template>
<div>
<el-container class="home-container">
    <!-- 顶部导航栏 -->
    <el-header>
        <div>
            <img class="logo" src="../assets/logo.png" alt="">
            <span>Sharing</span>
            <el-menu class="el-menu-demo" mode="horizontal"
            background-color="#fff" text-color="#222" active-text-color="#0084ff">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">发现</el-menu-item>
                <el-menu-item index="3">管理</el-menu-item>
            </el-menu>
            <div class="search">
                <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        
        <div class="demo-basic--circle">
            <el-avatar shape="square" size="medium" :src="squareUrl"></el-avatar>
        </div>
    </el-header>
  <el-container>
    <el-aside width="200px"></el-aside>
    <el-main>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default{
    data(){
        return{
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        }
    },
    created(){
        this.getInfo()
    },
    methods: {
        async getInfo(){
            const {data: res} = await this.$http.get('home')
            if(res.status === 200){
                this.$message.success(`${res.message}`)
            }else{
                this.$message.error(`${res.message}`)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.home-container{
    height 100%
}
.el-header, .el-footer {
    background-color #fff
    display flex
    justify-content space-between
    padding-left 0
    align-items center
    color #0084ff
    font-size 20px
    > div{
       display flex
       align-items center
       span{
           font-size 24px
           margin-left 15px
           margin-right 15px
       }
       .logo{
           width 100px
           height 60px
       }
       .search{
           margin-left 30px
           width 380px
       }
    }
}
.el-aside {
    background-color #D3DCE6
}
  
.el-main {
    background-color #e6e6e6
}
</style>