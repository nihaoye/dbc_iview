<template>
    <div class="switch">
        <input id="state" type="checkbox" v-model="checked" >
        <label for="state"></label>
    </div>
</template>

<script>
    export default {
        name: "mySwitch",
        props:['checked'],
        computed:{
            isChecked(){
                return this.checked
            }
        },
        watch:{
            checked(val){
                alert(val)
            }
        }
    }
</script>

<style scoped>

</style>
