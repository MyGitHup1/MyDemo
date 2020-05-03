<template>
  <div class="home">
    <!-- 展示框 -->
    <div>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" v-for="(o,i) in lists" :key="i">
          <div class="grid-content bg-purple-light" :style="{background:o.color}">
            <div class="showBox">
              <div>
                <b>{{o.title}}</b>
              </div>
              <div style="color:white">
                <countTo decimal prefix="￥" :startVal="0" :endVal="o.number" :duration="o.times"></countTo>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 图表 -->
    <div>
      <el-row :gutter="30">
        <Tubiao :option="option" bgcolor="#C7E4DB" :xs="24" :sm="24" :md="24" :lg="24" />
      </el-row>
      <div>
        <el-row :gutter="30">
          <Tubiao :option="option2" bgcolor="#EDDABD" :xs="24" :sm="24" :md="24" :lg="12" />
          <Tubiao :option="option3" bgcolor="#E2CACC" :xs="24" :sm="24" :md="24" :lg="12" />
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
// import echarts from 'echarts'
import Tubiao from './Tubiao'
import request from '@/utils/request'
export default {
  components: { countTo, Tubiao },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists: [
        { title: '最高可借金额', number: 30000, times: 1000, color: '#67C23A' },
        { title: '回报率', number: 300000, times: 2000, color: '#E6A23C' },
        { title: '业绩领跑', number: 3000000, times: 3000, color: '#F56C6C' },
        { title: '安稳底薪站队', number: 360000, times: 1500, color: '#409EFF' }
      ],
      option: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日',
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              120,
              132,
              101,
              134,
              90,
              230,
              210
            ]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 6320]
          }
        ]
      },
      option2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            '直接访问',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '搜索引擎',
            '百度',
            '谷歌',
            '必应',
            '其他'
          ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      },
      option3: {
        title: {
          text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售（sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Techology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 }
          ]
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    // getUserInfo () {
    //   request
    //     .get('/api/user/info')
    //     .then(res => {
    //       console.log('成功获取用户信息', res)
    //       this.$store.state.userName = res.data.data.roles[0].name
    //       this.$message({
    //         type: 'success',
    //         message: '成功获取用户信息'
    //       })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  mounted () {
    // this.getUserInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  // width: 100%;
  // height: ;
  padding: 0 24px 30px 24px;
  margin-bottom: 30px;
  background: #eff1f4;
}
.showBox {
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 10px;
  div {
    margin-top: 10px;
  }
}
.el-col {
  border-radius: 4px;
  // margin-top: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 100px;
}
</style>
