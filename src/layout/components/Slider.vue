<template>
  <div class="slider">
    <el-menu unique-opened
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- <el-menu-item style="width:230px" index="home" route="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="loan-input" route="/loan-input">
        <i class="el-icon-document"></i>
        <span slot="title">贷款申请</span>
      </el-menu-item>
      <el-menu-item index="input-manager" route="/input-manager">
        <i class="el-icon-setting"></i>
        <span slot="title">申请管理</span>
      </el-menu-item>
      <el-submenu index="approve" :show-timeout="3000" :hide-timeout="3000" route="/approve">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>贷款审批</span>
        </template>
        <el-menu-item index="approve-first" route="/approve/first">
          <i class="el-icon-lollipop"></i>
          <span>初审</span>
        </el-menu-item>
        <el-menu-item index="approve-final" route="/approve/final">
          <i class="el-icon-lollipop"></i>
          <span>终审</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="obj-manage" route="/obj-manage">
        <i class="el-icon-setting"></i>
        <span slot="title">标的管理</span>
      </el-menu-item>
      <el-submenu index="admin" route="/admin">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="admin-createAdmin" route="/permission/createAdmin">
          <i class="el-icon-lollipop"></i>
          <span>创建管理员</span>
        </el-menu-item>
        <el-menu-item index="admin-showLists" route="/permission/showLists">
          <i class="el-icon-lollipop"></i>
          <span>列表展示</span>
        </el-menu-item>
      </el-submenu> -->
      <!-- v-for -->
      <!-- <div v-for="(route) in permission_routes" :key="route.path" >
      <el-menu-item v-if="!route.children" style="width:230px" index="route.name" route="route.path">
        <i class="el-icon-menu"></i>
        <span slot="title">route.title</span>
      </el-menu-item>
      <el-submenu v-if="route.children" index="route.name" route="route.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>route.title</span>
        </template>
        <el-menu-item index="route.name" route="route.path">
          <i class="el-icon-lollipop"></i>
          <span>route.title</span>
        </el-menu-item>
        <el-menu-item index="route.name" route="route.path">
          <i class="el-icon-lollipop"></i>
          <span>route.title</span>
        </el-menu-item>
      </el-submenu>
      </div> -->
  <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
export default {
  name: 'slider',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isCollapse: false
    }
  },
  components:{SidebarItem},
   computed: {
    ...mapGetters([
      'permission_routes',
    ])
  },
  methods: {
    toActive () {
      // this.$router.push('/loan-input')
    }
  },
  mounted () {
    this.toActive()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li,
.slider {
  width: 230px;
  height: 100%;
  background: #545c64;
}
</style>
