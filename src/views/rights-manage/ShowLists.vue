<template>
 <div class="showList">
     <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="reg_time"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建者">
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="权限分配">
      </el-table-column>
    </el-table>
  </template>
 </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: []
    }
  },
  methods: {
    getData () {
      request.get('/api/user/list').then(res => {
        this.tableData = res.data.data
        this.$message({
          message: '列表展示',
          type: 'success'
        })
      }).catch(err => { console.log(err) })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.showList{
 padding:30px;
}
</style>
