// JavaScript Document
// ex5_2.js
window.onload=init;
var timer;      //①
var num=0;
function init(){
	var objLi=document.getElementsByTagName("li");
	for(var i=0;i<objLi.length;i++){
		objLi[i].onmouseover=onMouseOverEvent;
		objLi[i].onmouseout=onMouseOutEvent;
	}
	timeShowImg();      //②
}
function onMouseOverEvent(){
	window.clearTimeout(timer);      //③
	showImg(this.innerHTML);      //④
}
function onMouseOutEvent(){
	timeShowImg();
}
function timeShowImg(){
	showImg();      //⑤
	timer=window.setTimeout(timeShowImg,1500);      //⑥
}
function showImg(digit){
	if(digit){      //⑦
		num=digit;
	}else{     
		num++;
		if(num>5){
			num=1
		}
	}
	var myImg=document.getElementById("myImg"); //⑧
	if(myImg){      
		myImg.src="images/ex5-2-"+num+".jpg";      //⑨      
	}
	var objLi=document.getElementsByTagName("li");      //⑩
	for(var i=0;i<objLi.length;i++){      
		if(objLi[i].innerHTML==num){
			objLi[i].style.color="#0F0";
		}else{
			objLi[i].style.color="#FFF";    
		}
	}
}