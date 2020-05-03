<template>
    <el-container>
      <el-aside :width="isShowSlider">
      <Slider/>
      </el-aside>
      <el-container>
        <el-header height>
          <Navs />
        </el-header>
        <el-main>
          <Mains />
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import { Slider, Navs, Mains } from './components'
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowSlider: '230px'
    }
  },
  methods: {
    setSlider () {
      const temp = this.$store.state.isShowSlider
      switch (temp) {
        case true:
          this.isShowSlider = '230px'
          break
        case false:
          this.isShowSlider = '0'
          break
        default:
          break
      }
    }
  },
  components: { Slider, Navs, Mains },
  mounted () {
    this.$store.state.setSlider = this.setSlider
    // this.setSlider()
    // document.querySelector('html').setAttribute('style', `width:100%; height:100%; margin:0;`)
    // document.querySelector('body').setAttribute('style', `width:100%; height:100%; margin:0;`)
    // document.getElementById('app').setAttribute('style', `width:100%; height:100%; margin:0;`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper,.aside,.el-container{
  height: 100%;
  /* border: 0; */
}
main,header{padding: 0;
margin: 0;
}

</style>
