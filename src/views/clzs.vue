<!--车辆管理-->
<template>
    <div class="clzs clearfix">
        <!-- 内容主体区域 -->
        <div class="left">
            <div>
                <div class="title">车辆总数</div>
                <div class="chart">
                    <div class="clGaugeBox">
                        <gauge id="zscl" class="clGauge" title="总数车辆" unit="辆" :percent="100" :number="66"></gauge>
                        <gauge id="gzcl" class="clGauge" title="故障车辆" unit="辆" :percent="33" :number="33"></gauge>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div>
                <div class="title">车辆数据</div>
                <div class="clsj">
                    <Table :height="tableHeight" :columns="cols" :data="tableData"></Table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
    /* <!--<th lay-data="{field:'number'}">序号</th>-->
                    <!--<th lay-data="{field:'car'}">车号 </th>-->
                    <!--<th lay-data="{field:'lockNum'}">锁号</th>-->
                    <!--<th lay-data="{field:'carType'}">车类型</th>-->
                    <!--<th lay-data="{field:'city'}">城市</th>-->
                    <!--<th lay-data="{field:'area'}">园区</th>-->*/
    import gauge from '../components/gauge/Gauge.vue';
    export default {
        name: "clzs",
        components:{
            gauge:gauge
        },
        data(){
            return{
                cols:cols,
                tableData:tableData,
                tableHeight:300
            }
        },
        mounted(){
            this.tableHeight=this.$el.querySelector('.clsj').offsetHeight;
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
