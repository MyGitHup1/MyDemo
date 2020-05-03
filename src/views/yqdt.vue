<template>
    <div class="ditu">
        <div class='dituContent' ref="dituContent">
        </div>
    </div>
</template>
<script>
import jsonp from 'jsonp'
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
    name:'yqdt',
    data(){
        return {
            src:"http://api.map.baidu.com/api?v=3.0&ak=UeQLrLFd65lBnKiUqXhyjoLXmgLUi3mV&callback=initialize",
            option:{
                title:{
                    text:'疫情地图',
                    // show:false
                    link:'http://www.baidu.com',
                    x:'center'
                },
                tooltip:{
                    //  trigger:'item',
                    formatter: '地区：{b} </br> 确诊：{c}'
                },
               
                series:[{
                    type:'map',
                    map:'china',
                    label:{
                        show:true,
                        color:'red'
                    }, 
                    zoom:1,
                     itemStyle:{
                   areaColor : 'green'
                },
                    data:[{name:'北京',value:10001},
                    {name:'陕西',value:1001},
                    {name:'湖北',value:101},
                    {name:'四川',value:11},
                    {name:'西藏',value:1},
                    {name:'内蒙古',value:0}
                    ]
                }],
                   visualMap: {
                       type:'piecewise',
                    pieces: [
                        {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 1000, max: 9999},
                        {min: 100, max: 999},
                        {min: 10, max: 99},
                        {min: 1, max: 9},
                        {value:0,color:'#F8F9FA'}
                    ],
                    realtime: true,
                    calculable: true,
                    inRange: {
                        color: ['#F8F9FA', '#660208']
                    },
                     itemWidth :'20px',
                     itemHeight :'20px',
                     right:0,
                     top:0,
                     align:'left'
                    },
            },
        }
    },
    methods:{
     createMap(){
        var myEcharts= echarts.init(this.$refs.dituContent)
        myEcharts.setOption(this.option)
        window.onresize=function(){
            myEcharts.resize()
        }
     },
     getData(){
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1586155717896', (a,b)=> { 
        this.option.series[0].data=b.data.list
       this.createMap()

         })
     }
    },
    mounted(){
       this.getData()
    },
}
</script>
<style scope>
.dituContent{
    /* position: relative; */
    width: 100%;
    height: 100vh;
    background-color: rebeccapurple;
}
</style>