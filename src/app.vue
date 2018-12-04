<template>
    <div class="layui-layout layui-layout-admin">
        <header class="layui-header dbc_header">
            <div class="nowdate">2018/8/26(节假日)</div>
            <!-- 头部区域（可配合layui已有的水平导航） -->
            <div class="topBanner layui-nav">
                <img class="logo" src="src/assets/image/logo.png"/>
                <Dropdown class="sysSelectBox layui-nav-item">
                    <div class="sysSelect">
                        代步车管理
                        <span class="layui-nav-more layui-icon layui-icon-down"></span>
                    </div>
                    <DropdownMenu slot="list">
                        <DropdownItem class="sysOption">代步车管理</DropdownItem>
                        <DropdownItem class="sysOption">财务管理</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <ul class="layui-nav layui-layout-right">
                <li class="layui-nav-item">
                    <Dropdown>
                        <div class="userInfo">
                            锦绣中华
                            <span class="layui-nav-more layui-icon layui-icon-down"></span>
                        </div>
                        <DropdownMenu slot="list">
                            <DropdownItem class="sysOption">基本资料</DropdownItem>
                            <DropdownItem class="sysOption">基本资料</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>
                <li class="layui-nav-item"><a class="logout" href="javascript:"><i
                        class="icon iconfont icon-power"></i>退出</a></li>
            </ul>
        </header>
        <aside class="layui-side aside">
            <div class="layui-side-scroll">
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <i class="icon iconfont icon-ry"></i>人员管理
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <i class="icon iconfont icon-jl"></i>交易记录
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3" class="layui-collapse">
                        <template slot="title">
                            <i class="icon iconfont icon-jq"></i>景区管理
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="4" class="layui-collapse">
                        <template slot="title">
                            <i class="icon iconfont icon-fy"></i>费用管理
                        </template>
                        <MenuItem name="4-1">Option 1</MenuItem>
                        <MenuItem name="4-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="5" class="layui-collapse">
                        <template slot="title">
                            <i class="icon iconfont icon-clgl"></i>车辆管理
                        </template>
                        <MenuItem name="5-1">Option 1</MenuItem>
                        <MenuItem name="5-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </div>
        </aside>
        <main class="layui-body">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
    export default {
        components:{
        },
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        created(){
            window.clientP=1;//暂时先放这里
        }
    }
</script>
<style type="text/less">
    @import 'assets/css/global.less';
    @import 'assets/js/layui/css/layui.css';
    @import 'assets/css/iconfont/iconfont.css';
    @import 'assets/css/main.less';
</style>
<style scoped>

</style>

