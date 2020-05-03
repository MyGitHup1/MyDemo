<template>
  <el-col :xs="xs" :sm="sm" :md="md" :lg="lg">
    <div class="bgc" :style="{background:bgcolor}">
      <div ref="e" style="width:100%;height:300px ;resize='both'">echarts图表</div>
    </div>
  </el-col>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'tubiao',
  data () {
    return {
      echart: null
    }
  },
  methods: {
    init () {
      this.echart = echarts.init(this.$refs.e)
      this.echart.setOption(this.option)
    }
  },
  mounted () {
    this.init()
    window.onresize = () => {
      this.echart.resize()
    }
  },
  props: ['option', 'bgcolor', 'xs', 'sm', 'md', 'lg']
}
</script>
<style lang="scss" scoped>
.bgc {
  margin: 30px 0 0 0;
}
</style>
