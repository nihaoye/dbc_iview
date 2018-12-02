<!--代步车财务3-1-->
<template>
    <div>
        <div class="jgsz">
            <div class="queryBox">
                <div class="label font-theme">车 型:</div>
                <ul class="selectGroup">
                    <li class="item active">全部</li>
                    <li class="item">单人车</li>
                    <li class="item">双人车</li>
                    <li class="item">三人车</li>
                </ul>
                &nbsp;&nbsp;&nbsp;
                <div class="label font-theme" style="float: none;">日  期:</div>
                <ul class="selectGroup">
                    <li class="item active">今天</li>
                    <li class="item">昨天</li>
                    <li class="item">最近七天</li>
                    <li class="item">最近三十天</li>
                </ul>
                <DatePicker class="dateRange" type="daterange" confirm placement="bottom-end" placeholder="请选择日期"></DatePicker>
                &nbsp;&nbsp;
                <button class="layui-btn layui-btn-sm btn-theme queryBtn">查询</button>
            </div>
        </div>
        <div class="detail">
            <div class="title">数据详情</div>
        </div>
        <div class="amount clearfix">
            <ul class="u-money">
                <li style="float:left">
                    <p>①预充金额（元）</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li style="float:left">
                    <p>②退款金额</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li style="float:left">
                    <p>③补缴金额</p>
                    <div class="shuju">20500,00</div>
                </li>
                <li class="last" style="float:left">
                    <p>④销售额(=①-②+③)（元）</p>
                    <div class="shuju">20500,00</div>
                </li>
            </ul>
        </div>
        <div class="sjxqTable" style="height:300px;">
            <Table :height="tableHeight" :columns="cols" :data="tableData"></Table>
        </div>

    </div>
</template>
<script>
    /*<th lay-data="{field:'number'}">序号</th>
                    <th lay-data="{field:'date'}">时间</th>
                    <th lay-data="{field:'car'}">车号 </th>
                    <th lay-data="{field:'phone'}">手机</th>
                    <th lay-data="{field:'carType'}">车种</th>
                    <th lay-data="{field:'preCount'}">①预充额</th>
                    <th lay-data="{field:'retCount'}">②退款额</th>
                    <th lay-data="{field:'setCount'}">③补缴额</th>
                    <th lay-data="{field:'pusCount'}">④销售额</th>
                    <th lay-data="{field:'state'}">交易状态</th>
                    <th lay-data="{field:'gnum'}">账单号</th>
                    <th lay-data="{field:'reason'}">退款原因</th>*/
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
    export default {
        name: "sjxq",
        data(){
            return {
                tableHeight:undefined,
                cols:cols,
                tableData:tableData
            }
        },
        created:function(){

        },
        mounted:function(){
            this.$nextTick(()=>{
                this.tableHeight=this.$el.clientHeight-210*window.clientP.toFixed(2);
            })
        }
    }
</script>

<style scoped>

</style>
