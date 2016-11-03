
(function (){    			//头部切换
	
	var oA=$('header .item');
	

	oA.click(function () {

		oA.removeClass('sele');
		$(this).addClass('sele');

	});

})();

(function () {			 	//导航切换

	var oLi=$('nav ul a');

	oLi.click(function () {

		$('nav ul .lese').removeClass();
		$(this).addClass('lese');
		
	});

})();

(function () {	 			//新歌标题切换

	var oli=$('.new_section .wap ul a');

	oli.click(function () {

		$('.new_section .wap ul .lese').removeClass();
		$(this).addClass('lese');

	});

})();

(function () {	           //轮播图

	var newUl=$('.new_section .wap .len');
	var newLi=$('.new_section .wap .list li');
	var newLeft=$('.new_section .left a');
	var newRight=$('.new_section .right a');

	var hotUl=$('.hot_section .wap .len');
	var hotLi=$('.hot_section .wap .list li');
	var hotLeft=$('.hot_section .left a');
	var hotRight=$('.hot_section .right a');

	var recUl=$('.rec_section .rec_len ul');
	var recLi=$('.rec_section .list li');
	var recLeft=$('.rec_section .left a');
	var recRight=$('.rec_section .right a');
	
	tab(newUl,newLi,newLeft,newRight);
	tab(hotUl,hotLi,hotLeft,hotRight);
	tab(recUl,recLi,recLeft,recRight);

	function tab(oul,oli,oleft,oright) {
		var num=0;

		oli.click(function () {

			oli.removeClass();
			$(this).addClass('lese');
			oul.animate({
				'left':$(this).index()*-1200+'px'
			},700);

		});

		oleft.click(function () {

			num--;
			move();

		});

		oright.click(function () {

			num++;
			move();

		});
		
		function move() {

			if(num<0){
				num=oli.length-1;
			}else if(num>oli.length-1){
				num=0;
			};

			oli.removeClass();
			oli.eq(num).addClass('lese');
			oul.stop(true,true).animate({
				'left':num*-1200+'px'
			},700);

	    };

	};

})();

