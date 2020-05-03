<template>
  <div class="first">
    <div>
      <el-form :inline="true" @submit.native.prevent="onSubmit" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="name" @input="onSubmit" placeholder="请输入姓名"></el-input>
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
        <el-table-column prop="loan_name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80">
          <template slot-scope="scope">{{scope.row.sex}}</template>
        </el-table-column>
        <el-table-column prop="loan_card" label="身份证号" width="300"></el-table-column>
        <el-table-column prop="education" label="教育程度" width="120">
          <template slot-scope="scope">{{scope.row.education}}</template>
        </el-table-column>
        <el-table-column prop="address1" label="居住地址" width="260"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="check(scope.row)">查看</el-button>
            <el-button @click="pass(scope.row)" type="danger" :disabled="scope.row.result=='pass'" size="small">通过</el-button>
            <el-button type="success" @click="refuse(scope.row)"  :disabled="scope.row.result=='pass'" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="初审-详情" :visible.sync="dialogFormVisible">
        <Checkloan :form="form"></Checkloan>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
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
import Checkloan from './Checkloan'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      tableData: [],
      vloading: true,
      total: 1000,
      pageSize: 10,
      pageNo: 1,
      dialogFormVisible: false,
      form: {}
    }
  },
  components: { Checkloan },
  watch: {
    pageNo () {
      console.log(this.pageNo)
      this.getData()
    }
  },
  methods: {
    getData (name) {
      request
        .get('/api/approve/first/list', {
          params: {
            pageNo: this.pageNo,
            pageSize: this.pageSize,
            name: name || ''
          }
        })
        .then(res => {
          this.tableData = res.data.data.data.data
          this.total = res.data.data.data.rows
          this.vloading = false
          this.$message({
            type: 'success',
            message: '初审查询成功'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    sizeChange (o) {
      this.pageSize = o
    },
    nextClick (o) {
      this.pageNo = o
    },
    prevClick (o) {
      this.pageNo = o
    },
    currentChange (o) {
      this.pageNo = o
    },
    check (row) {
      this.dialogFormVisible = true
      request
        .get('/api/loan/query', { params: { id: row.loan_id } })
        .then(res => {
          this.$message({ type: 'success', message: '查看详情successfully' })
          this.form = res.data.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    pass (row) {
      request.post('/api/approve/first/pass', { appId: row.id, loanId: row.loan_id })
        .then(res => {
          this.getData()
          this.$message({
            type: 'success',
            message: '初审通过'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    refuse (row) {
      request.post('/api/approve/first/reject', { appId: row.id, loanId: row.loan_id })
        .then(res => {
          this.getData()
          this.$message({
            type: 'success',
            message: '初审拒绝'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      this.getData(this.name)
    }
  },

  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.first {
  padding: 30px;
  .paging {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
