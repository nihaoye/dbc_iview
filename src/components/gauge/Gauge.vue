<template>
        <div class="gauge" :style="{height:clientHeight+'px'}">
            <div class="gauge-center gauge-kdp"></div>
            <svg viewBox="0 0 100 100">
                <path class="el-progress-circle__path" :d="trackPath" stroke="#5D87FF" :strokeWidth="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
            </svg>
            <img class="gauge-center gauge-zz" src="./zz.png" :style="{transform:'translate(-50%,0) rotate('+zzRotate+'deg)'}"/>
            <div class="gauge-title">
                <span>{{title}}</span>
                <div class="gauge-number">
                    <span class="lg">{{number}}</span>
                    <span class="d">{{unit}}</span>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Gauge",
        props:{
            title:{},
            number:{

            },
            unit:{

            },
            percent:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                circle:[0,360],
                strokeWidth:5,
                width:100,
                clientHeight:0
            }
        },
        computed:{
            percentage(){
                return !this.percent?0:parseFloat(270/360*this.percent).toFixed(6);
            },
            zzRotate(){
                return (!this.percent?0:this.percent/100*270)+45;
            },
            relativeStrokeWidth(){
                return (this.strokeWidth / this.width * 100).toFixed(1);
            },
            trackPath(){
                let radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
                return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
            },
            perimeter() {
                var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
                return 2 * Math.PI * radius;
            },
            circlePathStyle() {
                const perimeter = this.perimeter;
                return {
                    strokeDasharray: `${perimeter}px,${perimeter}px`,
                    strokeDashoffset: (1 - this.percentage/ 100) * perimeter + 'px',
                    transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                };
            }
        },
        created(){
            this.percent=this.percent||0;
        },
        mounted(){
            this.freshHeight();
            this.$el.onresize=()=>{
                this.freshHeight();
            }
        },
        methods:{
            freshHeight(){
                this.clientHeight=this.$el.offsetWidth;
            }
        }
    }
</script>

<style>
    .gauge{
        display:inline-block;
        min-width:100px;
        min-height:100px;
        width:200px;
        position:relative;
        vertical-align: middle;
    }
    .gauge-center{
        position:absolute;
        top:50%;
        left:50%;
        transform-origin: center;
        transform: translate(-50%,-50%);
    }
    .gauge-kdp{
        position:absolute;
        width:90%;
        height:90%;
        background:url("./kdp.png") no-repeat;
        background-size:100%;
    }
    .gauge-zz{
        background-size:100%;
        height:30%;
        width:auto;
        transform-origin:50% 0;
        transform: translate(-50%,0) rotate(45deg);
        display:block;
        transition: all 200ms;
    }
    .gauge-title{
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        bottom:5%;
        font-size:16px;
        color:#696969;
    }
    .gauge-number{
        font-size:16px;
        color:#5D87FF;
    }
    .gauge-number .lg{
        font-size:26px;
        vertical-align: middle;
        line-height:100%;
    }
    .gauge-number .d{
        font-size:16px;
        display:inline-block;
        vertical-align: bottom;
        line-height:100%;
    }
    .gauge svg{
        position:absolute;
        top:50%;
        left:50%;
        transform-origin: center;
        transform: translate(-50%,-50%) rotateZ(-135deg);
    }

</style>