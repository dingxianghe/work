//元素的运动
//obj:运动的元素； attr:运动的属性； dir:步长； target:目标点； endfn:回调函数
function doMove ( obj, attr, dir, target, endFn ) {
	//obj(元素), attr（属性）, dir（步长）, target（目标点）, endFn（回调函数） 
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;	

	clearInterval( timer );
	
	var timer = setInterval(function () {
		
		var speed = parseFloat(getStyle( obj, attr )) + dir;			// 步长
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}	
		obj.style[attr] = speed + (attr=='opacity'?'':'px');
		if ( speed == target ) {
			clearInterval( timer );
			endFn && endFn();			
		}
		
	}, 30);
	
}

//获取元素的属性；
//obj:需要获取的元素； attr:获取的属性名
function getStyle ( obj, attr ) { 
	return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; 
	}

//抖动的函数
//obj:抖动的元素； attr:抖动的方向 ；endfn:回调函数
function shake(obj,attr,endFn){
				var arr=[];
				var num=0;
				var pos = parseInt( getStyle(obj, attr) );
				if(obj.chushi){obj.style[attr]=chushi()+'px';}
				else{obj.chushi=pos}
				for(var i=20;i>0;i-=2){
					arr.push(i,-i);
				}arr.push(0);
				clearInterval( obj.shake );
				obj.shake = setInterval(function (){
				obj.style[attr] = pos + arr[num] + 'px';
				num++;
				if ( num === arr.length ) {
				clearInterval( obj.shake );
				endFn && endFn();
				}
				
				}, 50);
			}

//获取某个ID的元素
function $( id ){
	return document.getElementById( id );
}

//设置Cookie中的某条属性
//key:属性名； value:属性值； t:过期时间（天）
function setCookie(key, value, t) {
	var oDate = new Date();
	oDate.setDate( oDate.getDate() + t );
	document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}

//删除Cookie中的某条属性
//key:属性名
function getCookie(key) {
	var arr1 = document.cookie.split('; ');
	for (var i=0; i<arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if ( arr2[0] == key ) {
			return decodeURI(arr2[1]);
		}
	}
}

//删除Cookie中的某条属性    
//key:属性名
function removeCookie(key) {
	setCookie(key, '', -1);
}

//通过AJAX来获取数据
//method：获取方式；url：获取地址；  data：传输的数据内容； success：回调函数；
function ajax(method, url, data, success) {
	var xhr = null;
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if (method == 'get' && data) {
		url += '?' + data;
	}
	
	xhr.open(method,url,true);
	if (method == 'get') {
		xhr.send();
	} else {
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function() {
		
		if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
				try {
				var Text=Json.parser(xhr.responseText);
				} catch (e) {
				var Text=xhr.responseText;
				}
				success && success(Text);
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
		
	}
}

//获取元素到页面的上边距的距离
function getTop(obj) {
		var iTop = 0;
		while(obj) {
			iTop += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return iTop;
	}