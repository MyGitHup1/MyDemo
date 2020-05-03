<template>
  <div class="inputManage">
    <div>
      <el-form :inline="true" @submit.native.prevent="onSubmit" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="vloading"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(0, 0, 0, 0.1)"
        element-loading-spinner="el-icon-loading"
        stripe
        border
        max-height="700px"
      >
        <el-table-column fixed prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="birthday" sortable label="出生如期" width="220">
          <template slot-scope="scope">{{scope.row.birthday | filterBirthday}}</template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80">
          <template slot-scope="scope">{{scope.row.sex| filterSex}}</template>
        </el-table-column>
        <el-table-column prop="education" label="教育程度" width="120">
          <template slot-scope="scope">{{scope.row.education| filterEducation}}</template>
        </el-table-column>
        <el-table-column prop="address1" label="居住地址" width="260"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
        <el-table-column prop="zip" label="申请状态" width="120">
          <template slot-scope="scope">
            <el-tag :type="getStatus(scope.row.status).type">{{getStatus(scope.row.status).status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            <el-button type="primary" size="small" :disabled="disabled(scope.row)" @click="edit(scope.$index, tableData)">编辑</el-button>
            <el-button
            :disabled="disabled(scope.row)"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="danger"
              size="small"
            >移除</el-button>
            <el-button  :disabled="disabled(scope.row)" type="success" @click="submitToApprove(scope.$index, tableData)" size="small">提交审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="申请管理-编辑" :visible.sync="dialogFormVisible">
      <InputManageEdit :form="form" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEditor()">取 消</el-button>
        <el-button type="primary" @click="commitEditor()">确 定</el-button>
      </div>
    </el-dialog>
    <div class="paging">
      <el-pagination
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick"
        @size-change="sizeChange"
        background
        layout="total, prev, pager, next,sizes ,jumper"
        :page-size="pageSize"
        :total="total"
        :page-sizes="[10, 20, 30, 40]"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import InputManageEdit from './inputManageEdit'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [],
      name: '',
      vloading: true,
      total: 1000,
      pageSize: 10,
      pageNo: 1,
      dialogFormVisible: false,
      form: {}
    }
  },
  components: { InputManageEdit },
  filters: {
    filterSex (o) {
      switch (o) {
        case 'man':
          return '男'
        case 'woman':
          return '女'
        default:
          return '无'
      }
    },
    filterEducation (o) {
      switch (o) {
        case 'college':
          return '一本'
        default:
          return '大专'
      }
    },
    filterBirthday (o) {
      var temp = new Date(o)
      return temp.toLocaleString()
    }
  },
  methods: {
    edit (index, rows) {
      this.form = { ...rows[index] }
      this.dialogFormVisible = true
    },
    submitToApprove (index, rows) {
      request.post('/api/loan/submitToApprove', {id: rows[index].id})
        .then(res => {
          this.getData()
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancelEditor () {
      this.dialogFormVisible = false
    },
    onSubmit () {
      this.vloading = true
      this.getData(this.name)
      this.pageNo = 1
    },
    deleteRow (index, rows) {
      request
        .delete('/api/loan/delete/' + rows[index].id)
        .then(res => {
          this.$message({ type: 'success', message: '删除成功！' })
          this.getData()
        })
        .catch(err => {
          console.log(err)
        })
      rows.splice(index, 1)
    },
    commitEditor () {
      console.log(this.form)
      this.dialogFormVisible = false
      request
        .put('/api/loan/update', this.form)
        .then(res => {
          this.getData()
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    disabled (o) {
      return o.status !== 0 && o.status !== 3 && o.status !== 6
    },
    getStatus (o) {
      switch (o) {
        case 1:
          return { status: '提交初审', type: 'success' }
        case 2:
          return { status: '初审通过', type: 'success' }
        case 3:
          return { status: '初审拒绝', type: 'danger' }
        case 4:
          return { status: '提交终审', type: 'success' }
        case 5:
          return { status: '终审通过', type: 'success' }
        case 6:
          return { status: '终审拒绝', type: 'danger' }
        case 7:
          return { status: '生成合同', type: 'success' }
        default:
          return { status: '进件状态', type: '' }
      }
    },
    sizeChange (o) {
      this.pageSize = o
    },
    nextClick (o) {
      this.pageNo++
    },
    prevClick (o) {
      this.pageNo--
    },
    currentChange (o) {
      this.pageNo = o
    },
    getData (name) {
      request
        .get('/api/loan/list', {
          params: {
            pageNo: this.pageNo,
            pageSize: this.pageSize,
            name: name || ''
          }
        })
        .then(res => {
          if (res && res.data.code !== 20000) {
            // this.$message({
            //   message: '请先登录',
            //   duration: 2000,
            //   type: 'error'
            // })
          } else {
            this.tableData = res.data.data.data.data
            this.total = res.data.data.data.rows
            this.vloading = false
          }
        })
        .catch(err => {
          // this.$router.push('/login')
          this.vloading = true
          console.log(err)
        })
    }
  },
  watch: {
    name: function (n, o) {
      if (n === '') {
        this.pageNo = 1
        this.vloading = true
        this.getData()
      }
    },
    pageNo () {
      this.getData()
    },
    pageSize () {
      this.getData()
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.inputManage {
  padding: 30px;
  .paging {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
