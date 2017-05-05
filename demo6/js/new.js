window.onload=function () {
var list_li=document.querySelectorAll(".nav_list>li");
var list=document.querySelector("nav_list");
var colorful=document.querySelector(".colorful");
var left = parseInt(colorful.style.left);

if (left<0) {colorful.style.backgroundColor = ''}
// console.log(left);

var moved = false;
// console.log(list_li);
list_li[0].onmouseover=function () {
	colorful.style.backgroundColor = 'rgb(251, 185, 46)';
	var distance = 83;
	// var time = 10;
	// var a = (2*distance)/(time*time);
	var speed;
	if (!moved) {
		var t = window.setInterval(function () {
	        distance = Math.ceil(distance/10);
	        left = left+distance;
	        colorful.style.left = left+"px";
	        // console.log(left);
	        moved = true;
	        if(left==1) {
	        	clearInterval(t);
	        	moved = false;
	        }
		}, 10)
	}
	
	
}
list_li[0].onmouseleave=function () {
	var distance = 1;
	var t = window.setInterval(function () {
        distance = Math.floor(distance*4);
        left = left-distance;
        colorful.style.left = left+"px";
        console.log(left);
        if (left<=-83) {
        	colorful.style.backgroundColor = '';
        	clearInterval(t);
        	console.log(111);
        	// console.log(left);
        }
	}, 10)
}

}