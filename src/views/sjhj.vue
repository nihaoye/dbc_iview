<!--代步车财务-->
<template>
    <div class="sjhj">
        <div>
            <div class="queryBox">
                <div class="label font-theme">车 型:</div>
                <ul class="selectGroup">
                    <li class="item active">全部</li>
                    <li class="item">单人车</li>
                    <li class="item">双人车</li>
                    <li class="item">三人车</li>
                </ul>
                &nbsp;&nbsp;&nbsp;
                <div class="label font-theme">日  期:</div>
                <ul class="selectGroup">
                    <li class="item active">今天</li>
                    <li class="item">昨天</li>
                    <li class="item">最近七天</li>
                    <li class="item">最近三十天</li>
                </ul>
                <DatePicker class="dateRange" type="date" placeholder="选择日期"></DatePicker>
                &nbsp;&nbsp;
                <button class="layui-btn layui-btn-sm btn-theme queryBtn">查询</button>&nbsp;&nbsp;
                <button class="layui-btn layui-btn-sm btn-theme queryBtn"><i class="iconfont icon-dc"></i>导出</button>
            </div>
        </div>
        <div class="ss-chart clearfix" >
            <div class="l-chart">
                <div class="title">实时统计</div>
                <div class="l-content">
                    <gauge id="drhj" class="ssGauge" title="单日合计" unit="辆" :number="66" :percent="80"></gauge>
                    <gauge id="drsyz" class="ssGauge" title="单日使用中" unit="辆" :number="66" :percent="33"></gauge>
                    <gauge id="drysy" class="ssGauge" title="单日已使用" unit="辆" :number="66" :percent="50"></gauge>
                </div>
            </div>
            <div class="r-chart">
                <div class="title">销售统计图</div>
                <div class="r-content">
                    <echartsv :options="chartOpt"></echartsv>
                </div>
            </div>
        </div>
        <div class="title">销售统计数据</div>
        <div class="amount">
            <ul class="u-money">
                <li>
                    <p>①预充金额（元）</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li>
                    <p>②退款金额</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li>
                    <p>③补缴金额</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li class="last" style="float:left">
                    <p>④销售额(=①-②+③)（元）</p>
                    <div class="shuju">20500,00</div>
                </li>
            </ul>
        </div>
        <div class="xstjTable">
            <Table :height="tableHeight" :columns="cols" :data="tableData"></Table>
        </div>
    </div>
</template>

<script>
    import gauge from '../components/gauge/Gauge';
    import echartsv from '../components/echarts/Echartsv';
    let cols=[
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Age',
            key: 'age'
        },
        {
            title: 'Address',
            key: 'address'
        },
        {
            title: '导出',
            key: 'output',
            align:"center",
            render: (h, params) => {
                return h('a', {
                    class:'export layui-btn layui-btn-sm btn-form-theme-o',
                    on:{
                        click(){
                            console.log(params)
                        }
                    }
                },[
                    h('i',{
                        class:'icon iconfont icon-dc'
                    }),
                    h('span',"导出")
                ])
            }
        }
    ];
    let tableData=[
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        },
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
    ];
    let chartOpt = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['9月15', '9月20', '9月25', '9月30', '10月5', '10月10', '10月15','10月20']//数据填充
        },
        yAxis: {
            type: 'value'
        },
        grid:{
            left:'25',
            top:'25',
            right:'25',
            bottom:'25'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        series: [{
            data: [40, 30, 40, 50, 30, 20, 10,20],//数据填充
            type: 'line',
            lineStyle:{
                color:"#668DFF",
                width:4
            },
            areaStyle: {
                color:"#4977FC",
                opacity:0.5
            },
            itemStyle: {
                normal: {
                    color: '#668DFF'
                }
            },
            smooth:true
        }]
    };
/*    <th lay-data="{field:'number'}">序号</th>
        <th lay-data="{field:'date'}">时间</th>
        <th lay-data="{field:'preCount'}">①预充金额</th>
    <th lay-data="{field:'treCount'}">②退款金额</th>
    <th lay-data="{field:'setCount'}">③补缴金额</th>
    <th lay-data="{field:'andCount'}">④销售额(=①-②+③)</th>
    <th lay-data="{field:'pusTimes'}">销售次数</th>*/
    export default {
        name: "sjhj",
        components:{
            gauge,
            echartsv
        },
        data(){
            return{
                cols:cols,
                tableData:tableData,
                tableHeight:300,
                chartOpt:chartOpt
            }
        },
        created(){

        },
        mounted(){
            this.tableHeight=this.$el.querySelector('.xstjTable').offsetHeight;
        }
    }
</script>

<style scoped>

</style>
