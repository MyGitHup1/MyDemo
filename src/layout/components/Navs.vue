<template>
  <div class="navs">
    <div class="sliderShow" @click="isShowSlider">
      <el-popover placement="top-start" :content="content" trigger="hover">
        <el-button style="border:0 " slot="reference">
          <slot>
            <i ref="i" class="el-icon-s-fold"></i>
          </slot>
        </el-button>
      </el-popover>
    </div>
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item >首页</el-breadcrumb-item> -->
        <el-breadcrumb-item
          v-for="(nva,i) in navs"
          v-show="navs[i].meta.title"
          :key="i"
        >{{nva.meta.title}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand" trigger="hover">
        <el-button plain type="text">
        <!-- <span>欢迎，-{{this.$store.state.user.token[0].name}}</span> -->
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs: [],
      content: '隐藏侧边栏'
    }
  },
  methods: {
    isShowSlider () {
      this.$store.state.isShowSlider = !this.$store.state.isShowSlider
      this.$store.state.setSlider()
      let i = this.$refs.i
      // let asd = this.$refs.asd
      // console.log(asd)
      if (i.className === 'el-icon-s-fold' && this.content === '隐藏侧边栏') {
        i.className = 'el-icon-s-unfold'
        this.content = '显示侧边栏'
      } else {
        i.className = 'el-icon-s-fold'
        this.content = '隐藏侧边栏'
      }
    },
    getRouter () {
      if (this.$route.matched) {
        this.navs = this.$route.matched
      }
    },
    handleCommand (command) {
      if (command === 'loginOut') {
        request
          .post('/api/user/logout')
          .then(res => {
            this.$router.push('/login')
            console.log('已退出', res)
            // 清楚状态
            this.$store.dispatch('Logout')
          })
          .catch(error => {
            this.$router.push('/login')
            console.log('退出错误', error)
          })
      }
    }
  },
  created () {
    this.getRouter()
  },
  watch: {
    $route () {
      this.getRouter()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.navs {
  box-shadow: 0 0 2px gray;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  position: relative;
  .sliderShow {
    line-height: 40px;
    cursor: pointer;
  }
  .nav {
    position: relative;
    height: 20px;
    top: 13px;
    left: 7px;
  }
  .right {
    position: absolute;
    display: inline-block;
    right: 0;
  }
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
