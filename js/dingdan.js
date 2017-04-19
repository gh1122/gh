(function ($){
	$(function(){
		var 
			iWinH = document.documentElement.clientHeight;
			
//			右侧固定边栏
		$('#siderbar').css({height:iWinH});
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
		$('.prbb-t a').bind('click',function(){
			
			var Index = $(this).index();
			$('.prbb-t a').removeClass('active1');
			$(this).addClass('active1');
			$('.prbv-b>div').removeClass('active3').eq(Index).addClass('active3');	
		})
	})
})(jQuery)