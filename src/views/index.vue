
<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h2>
                    <p>测试连接</p>
                    <p><router-link to="/clzs">车辆管理</router-link></p>
                    <p><router-link to="/sjhj">代步车财务</router-link></p>
                    <p><router-link to="/sjxq">代步车财务3-1</router-link></p>
                    <p><router-link to="/cwry">人员管理</router-link></p>
                    <p><router-link to="/jgsz">价格管理(还没弄完先别整)</router-link></p>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    }
</script>
