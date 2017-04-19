(function ($){
	$(function(){
		
		var 
			iWinH = document.documentElement.clientHeight;

//			右侧固定边栏
//		$('#siderbar').css({height:iWinH});
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
		
		
		//轮播图
		var
			iIndex = 0,
			aBtnListA  = $('#btn-list a'),
			aImgListLi = $('#img-list li');
		autoMove();
		aBtnListA.bind('mouseenter',function(){
			iIndex = $(this).index();
			aBtnListA.removeClass('active').eq(iIndex).addClass('active');
			aImgListLi.each(function(k,v){
				if(k === iIndex){
					$(this).stop(true).animate({
					opacity:1
				},function(){
					$(this).css({
						zIndex:1,
					})
				})
				}else{
					$(this).stop(true).animate({
						opacity:0
					},function(){
					$(this).css({
							zIndex:0,
						})
					})							
				}
			})
		});
		function move() {
			// 左边界判断
			if(iIndex < 0) {
				iIndex = aBtnListA.size() - 1;
			}
			// 右边界判断
			if(iIndex >= aBtnListA.size()) {
				iIndex = 0;
			}
			// LI做动画
			aImgListLi.each(function (k, v) {
				var iNum = k === iIndex ? 1 : 0;
				$(this).stop(true).animate({//stop（true）停止之前所有的动画，参数是true
					opacity: iNum
				}, function () {
					$(this).css({
						zIndex: iNum
					});
				});
			});
			// 添加样式
			aBtnListA.removeClass('active').eq(iIndex).addClass('active');
		}
		function autoMove() {
				iTimer = setInterval(function () {
					iIndex++;
					move();
				},10000);
		}	
		$('#banner').hover(function () {					
			
			clearInterval(iTimer);
		}, function () {
			autoMove();
			
		});
        
  		 //首页左侧楼层选择
		$(window).bind('scroll',function(){
			
			var ih 	    = $('body').scrollTop();
//				iPth    =$('.pr-t').offset().top,
//				iCan    =$('.canshu1').offset().top,
//				iXiang  =$('.xiangqing1').offset().top,
//				iPing   =$('.pingjia1').offset().top;
//				console.log(iPth);
//			if(ih > iCan){
//				$('.pr-t').addClass('position');
//					$('.jiade').css('display','block');
//			};
//			if(ih < iCan){
//				$('.pr-t').removeClass('position');
//				$('.jiade').css('display','none');
//			};
//			if(ih>0 && ih<iXiang){
//				$('.pr-t div').removeClass('borderbottom');
//				$('.canshu').addClass('borderbottom');
//			}
//			if(ih > iXiang && ih < iPing){
//				$('.pr-t div').removeClass('borderbottom');
//				$('.xiangqing').addClass('borderbottom');
//			}
//			if(ih>iPing){
//				$('.pr-t div').removeClass('borderbottom');
//				$('.pingjia').addClass('borderbottom');
//			}
			
			if(ih > 0){
				
				$('#box_two3').css('display','block');
			}
			if(ih == 0){
				
				$('#box_two3').css('display','none');
			}
		
			$('#box_two3').bind('click',function(){
				$('body').stop(true).animate({
					scrollTop:0
			},500)
			})
			if(ih >= 890){
				$('#fixleft').css({
					top:40,
					display:'block',
					position:'fixed'
				})
			}
			if(ih < 890){
				$('#fixleft').css({
					top:890,
					display:'block',
					position:'absolute'
				})
			}
			if(ih>0 && ih<1500){
				$('#fixleft div').removeClass('active');
				$('#bikan').addClass('active');
			}
			
			if(ih>1500 && ih<3000){
				$('#fixleft div').removeClass('active');
				$('#temai').addClass('active');
			}
			if(ih>3000 && ih<3600){
				$('#fixleft div').removeClass('active');
				$('#paihangbang').addClass('active');
			}
		})
		
		$('#bikan').bind('click',function(){
			$('body').stop(true).animate({
				scrollTop:880
			},500)
		})
		$('#temai').bind('click',function(){
			$('body').stop(true).animate({
				scrollTop:1501
			},500)
		})
		$('#paihangbang').bind('click',function(){
			$('body').stop(true).animate({
				scrollTop:3001
			},500)
			
		})
		$('#xinpin').bind('click',function(){
			$('body').stop(true).animate({
				scrollTop:0
			},500)
		})	
		
		
		
		
		var i = 0;
						
		setInterval(function(){
			i++;
			var  top  = $('.lunbo');
				top.animate({
					'margin-top':-28*i
				},function(){
					if(i === 5){
						i = 0;
						$('.lunbo').css('margin-top','-28px');
					}
				})		
		},3000)
				
		
		
	})
})(jQuery)
