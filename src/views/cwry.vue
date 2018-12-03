<!--财务人员-->
<template>
    <div class="cwry">
        <div class="title">财务人员</div>
        <div class="queryBox">
            <ul class="layui-form">
                <li class="inlineBlock">
                    <label class="label">层 级:</label>
                    <div class="inlineBlock">
                        <div class="inlineBlock selectBox">
                            <Select>
                                <Option value="" key="0">全部</Option>
                                <Option value="1" key="1">一级管理员</Option>
                                <Option value="2" key="2">二级管理员</Option>
                                <Option value="3" key="3">三级管理员</Option>
                            </Select>
                        </div>
                    </div>
                </li>
                <li class="inlineBlock">
                    <label class="label">姓 名:</label>
                    <div class="inlineBlock">
                        <Input class="input" placeholder="请输入姓名"></Input>
                    </div>
                </li>
                <li class="inlineBlock">
                    <label class="label">电 话:</label>
                    <div class="inlineBlock">
                        <Input class="input" placeholder="请输入电话"></Input>
                    </div>
                </li>
                <li class="inlineBlock">
                    <label class="label">权 限:</label>
                    <div class="inlineBlock">
                        <CheckboxGroup>
                            <Checkbox label="监控"></Checkbox>
                            <Checkbox label="财务"></Checkbox>
                            <Checkbox label="管理"></Checkbox>
                        </CheckboxGroup>
                    </div>
                </li>
                <li class="inlineBlock">
                    <button type="button" class="layui-btn layui-btn-sm btn-form-theme">确 定</button>
                </li>
            </ul>
        </div>
        <div class="cwryBox">
            <Table :height="cwryTableHeight" :columns="cwryCols" :data="cwryData"></Table>
        </div>
        <div class="title">人员历史</div>
        <div class="rylsBox">
            <Table :height="rylsTableHeight" :columns="rylsCols" :data="rylsData"></Table>
        </div>
    </div>
</template>

<script>
/*        <th lay-data="{field:'number'}">序号</th>
        <th lay-data="{field:'name'}">姓名 </th>
        <th lay-data="{field:'phone'}">手机号</th>
        <th lay-data="{field:'date'}">时间</th>
        <th lay-data="{field:'com'}">集团</th>
        <th lay-data="{field:'area'}">园区</th>
        <th lay-data="{field:'level'}">等级</th>
        <th lay-data="{field:'opt',align:'center'}">删除</th>*/
    let cwryCols=[
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
            title: '删除',
            key: 'opt',
            align:"center",
            render: (h, params) => {
                return h('div', {
                    class:'layui-btn layui-btn-sm btn-form-theme-o delete',
                    on:{
                        click(){
                            console.log(params)
                        }
                    }
                },"删除")
            }
        }
    ];
    /* <th lay-data="{field:'number'}">序号</th>
                    <th lay-data="{field:'name'}">姓名 </th>
                    <th lay-data="{field:'phone'}">手机号</th>
                    <th lay-data="{field:'date'}">时间</th>
                    <th lay-data="{field:'com'}">集团</th>
                    <th lay-data="{field:'area'}">园区</th>
                    <th lay-data="{field:'level'}">等级</th>
                    <th lay-data="{field:'opt',align:'center'}">恢复</th>*/
    let rylsCols=[
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
            title: '恢复',
            key: 'output',
            align:"center",
            render: (h, params) => {
                return h('div', {
                    class:'layui-btn layui-btn-sm btn-form-theme-o refair',
                    on:{
                        click(){
                            console.log(params)
                        }
                    }
                },"恢复")
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
    export default {
        name: "cwry",
        data(){
            return {
                cwryCols:cwryCols,//财务人员列名
                cwryData:tableData,
                cwryTableHeight:200,
                rylsCols:rylsCols,
                rylsData:tableData,//人员历史列名
                rylsTableHeight:200
            }
        },
        mounted(){
            this.cwryTableHeight=this.$el.querySelector('.cwryBox').offsetHeight;
            this.rylsTableHeight=this.$el.querySelector('.rylsBox').offsetHeight;
        }
    }
</script>

<style scoped>

</style>
