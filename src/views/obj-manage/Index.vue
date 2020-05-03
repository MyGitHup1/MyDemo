<template>
  <div class="final">
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
        <el-table-column prop="loan_name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">{{scope.row.sex}}</template>
        </el-table-column>
        <el-table-column prop="loan_card" label="身份证号"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="phone" label="合同状态">
          <template slot-scope="scope">
            <el-tag :type="getStatus(scope.row).type">{{getStatus(scope.row).status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="createContract(scope.row)" type="danger" :disabled='scope.row.file_path!=null' size="small">生成合同</el-button>
            <el-button @click="downloadContract(scope.row)" type="success" :disabled='scope.row.file_path==null'  size="small">下载合同</el-button>
          </template>
        </el-table-column>
      </el-table>
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
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      tableData: [],
      vloading: true,
      total: 1000,
      pageSize: 10,
      pageNo: 1
    }
  },
  watch: {
    pageNo () {
      console.log(this.pageNo)
      this.getData()
    }
  },
  methods: {
    getStatus (o) {
      if (o.file_path) { return { status: '已生成合同', type: 'success' } }
      return { status: '未生成合同', type: 'info' }
    },
    getData (name) {
      request
        .get('/api/contract/list', {
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
            message: '标的管理查询成功'
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
    createContract (row) {
      request.post('/api/contract/createFile', { id: row.id })
        .then(res => {
          this.getData()
          this.$message({
            type: 'success',
            message: '创建合同Ok'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    downloadContract (row) {
      request.get('/api/contract/download', { params: { id: row.id } })
        .then(res => {
          this.getData()
          request.get('/static/1580051448647.docx', {responseType: 'blob'}).then(res => {
            let blob = new Blob([res], {
              // type: 'application/vnd.ms-excel'
              type: 'application/msword'

            })
            let objectUrl = URL.createObjectURL(blob)
            console.log(objectUrl)
            // let a = document.createElement('a')
            // a.href = objectUrl
            // a.download = row.loan_name
            // a.click(),
            window.open(objectUrl, 'ccc', null)
            console.log('xiazai')
          }).catch(err => { console.log(err) })
          this.$message({
            type: 'success',
            message: '即将下载合同'
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
.final {
  padding: 30px;
  .paging {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
