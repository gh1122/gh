(function ($){
	$(function(){
		$(window).bind('scroll',function(){
			
			var 
				ih 	    = $('body').scrollTop();
				iCan    =$('.canshu1').offset().top,
				iXiang  =$('.xiangqing1').offset().top,
				iPing   =$('.pingjia1').offset().top;
				
			if(ih > iCan){
				$('.pr-t').addClass('position');
				$('.jiade').css('display','block');
			};
			if(ih < iCan){
				$('.pr-t').removeClass('position');
				$('.jiade').css('display','none');
			};
			if(ih>0 && ih<iXiang){
				$('.pr-t div').removeClass('borderbottom');
				$('.canshu').addClass('borderbottom');
			}
			if(ih > iXiang && ih < iPing){
				$('.pr-t div').removeClass('borderbottom');
				$('.xiangqing').addClass('borderbottom');
			}
			if(ih>iPing){
				$('.pr-t div').removeClass('borderbottom');
				$('.pingjia').addClass('borderbottom');
			}
		});
			//放大镜特效
		//给缩略图添加onmouseenter事件
		var aimg = $('.magnl-bottom img');
			aimg.bind('mouseenter',function(){			
				
				$(".magnl-top img").attr('src',$(this).attr('src'));
				$(".magnl-r img").attr('src',$(this).attr('src'))	;
			})
		
		$('.magnl-top').bind('mouseenter',function(){
			$('.magnl-r').css('display','block');
			$('.shadow').css('display','block');
		})
		$('.magnl-top').bind('mouseleave',function(){
			$('.magnl-r').css('display','none');
			$('.shadow').css('display','none');
		})
//		var oTop = $()
//		function getOffset(obj) {
//			var oDis = {left: 0, top: 0};			
//				do{
//					oDis.left += obj.offsetLeft;
//					oDis.top  += obj.offsetTop;
//					obj = obj.offsetParent;
//				}while(obj);			
//			return oDis;
//		}
//		var oDis = getOffset();
		$('.magnl-top').bind('mousemove',function(ev){
			var
				ev = ev || window.event,
				iX = ev.clientX,
				iY = ev.clientY,
				
				
				
//offset([coordinates])：获取匹配元素在当前视口的相对偏移。返回的对象包含两个整型属性：top 和 left，以像素计。方法只对可见元素有效。
//	scrollTop([val])：获取匹配元素相对滚动条顶部的偏移。此方法对可见和隐藏元素均有效。			
	
				iL = iX + $('body').scrollLeft() - $('.magnl-top').offset().left -$('.shadow').width()/ 2,
				iT = iY + $('body').scrollTop() - $('.magnl-top').offset().top- $('.shadow').height()/2;
			
					if(iL < 0) {
						iL = 0;
					}
					if(iT < 0) {
						iT = 0;
					}
					if(iL > 350 ){
						iL =350;
					}
					if(iT > $('.magnl-top').height() - $('.shadow').height()) {
						iT =  $('.magnl-top').height()-$('.shadow').height()
					}

				
			$('.shadow').css({
				left:iL,
				top:iT
			})
			$('.magnl-r img').css({
				left:-iL*2,
				top:-iT*2
			})
		})
		var 
			iWinH = document.documentElement.clientHeight;
			
//			右侧固定边栏
		$('#siderbar').css({height:iWinH});
//		$('.yc').bind('click',function(){
//			$('.yincang').css({
//				display:'block'
//			});
//			$('.yincang').animate({
//				right:38,
//				opacity: 1
//				
//			},500);
//		})
		$('.yc').hover(function(){
			
			$(this).children('.yincang').css({
				display:'block'
			});
			$(this).children('.yincang').stop(true).animate({
				right:38,
				opacity: 1
				
			},500);
		},function(){
			$(this).children('.yincang').css({
				display:'none'
			});
			$(this).children('.yincang').stop(true).animate({
				right:138,
				opacity: 0
				
			},500);
		});
		
	})
})(jQuery)
