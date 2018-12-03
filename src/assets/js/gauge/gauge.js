var Gaugescripts = document.getElementsByTagName("script");
var Gaugescript = Gaugescripts[Gaugescripts.length - 1];
var GaugePath = document.querySelector ? Gaugescript.src : script.getAttribute("src", 4);
GaugePath=GaugePath.replace('/gauge.js',"");
var svgTemplate=`<svg viewBox="0 0 100 100">
		<path class="el-progress-circle__path" d="{{trackPath}}" stroke="#5D87FF" stroke-width="{{relativeStrokeWidth}}" fill="none" style="{{circlePathStyle}}"></path>
	</svg>`;
var gaugeTemplate=`	<div class="gauge-center gauge-kdp"></div>
	${svgTemplate}
	<img class="gauge-center gauge-zz" src="${GaugePath}/image/zz.png" style="transform:translate(-50%,0) rotate({{zzRotate}}deg)"/>
	<div class="gauge-title">
		<span>{{title}}</span>
		<div class="gauge-number">
			<span class="lg">{{number}}</span>
			<span class="d">{{unit}}</span>
		</div>
	</div>`;

function Gauge(options){
	this.circle=[0,360];
	this.strokeWidth=5;
	this.width=100;
	this.zzRotate=function(){
		return !this.percent?0:this.percent/100*270+45;
	};
	/*this._setSvgPercent=function(percent){
		var circle = document.querySelectorAll("circle")[0];
		percent = percent/ 100;
		var perimeter = Math.PI * 2 * 170;
		circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
	};*/
	this.relativeStrokeWidth=function(){
		return (this.strokeWidth / this.width * 100).toFixed(1);
	};
	this.trackPath=function() {
		var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth()) / 2, 10);
		return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
	};
	this.perimeter=function() {
		var radius = 50 - parseFloat(this.relativeStrokeWidth()) / 2;
		return 2 * Math.PI * radius;
	};
	this.render=function(){
		var option={
			trackPath:this.trackPath(),
			relativeStrokeWidth:this.relativeStrokeWidth(),
			circlePathStyle:this.circlePathStyle(),
			title:this.title,
			unit:this.unit,
			number:this.number,
			zzRotate:this.zzRotate()
		};
		var template=gaugeTemplate+'';
		template=template.replace(/\{\{\S+\}\}/g,function(val){
			var key=val.replace(/\{|\}/g,'');
			return option[key]||"";
		});
		$(this.elm).html(template);
	};
	this.circlePathStyle=function() {
		const perimeter = this.perimeter();
		var obj= {
			strokeDasharray: `${perimeter}px,${perimeter}px`,
			strokeDashoffset: (1 - this.percentage() / 100) * perimeter + 'px',
			transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
		};
		return `stroke-dasharray:${obj.strokeDasharray};stroke-dashoffset:${obj.strokeDashoffset};transition:${obj.transition}`;
	};
	this.percentage=function(){
		return !this.percent?0:parseFloat(270/360*this.percent).toFixed(6);
	};
	this.setOption=function(option){
		this.percent=option.percent===undefined?this.percent:option.percent;
		this.title=option.title||this.title;
		this.number=option.number===undefined?this.number:option.number;
		this.unit=option.unit||this.unit;
		this.render();
	};
	this._init=function(){
		if(typeof options=='string'){
			options={
				elm:options
			}
		}
		this.elm=options.elm;
		this.percent=0;
		this.title=options.title;
		this.number=0;
		this.unit="";
        $(this.elm).addClass('gauge').height($(this.elm).width());
		this.render();
	};
	this._init();
}
