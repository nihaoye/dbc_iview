<template>

</template>
<script>
    import config from '../config/config.js';
    export default {
        name: "index",
        data(){
            return {
                path:config.apiPath
            }
        }
    }
</script>

<style scoped>
 p{
     font-size:16px;
 }
</style>
