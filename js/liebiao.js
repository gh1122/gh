(function ($){
	$(function(){
		
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
		

		//树形目录效果
		$('.list>li').bind('click',function(){
			$(this).children('ul').slideToggle();
		})
		$('.gengd').bind('click',function(){
			$('.none').fadeToggle();
		})
		$('.xianshig').bind('click',function(){
			$('.pager-c3').fadeToggle();
		})
		
		//商品列表特效
		$('.gl-1').hover(function(){
			$(this).children('.after').stop(true).animate({
				width:330,
				height:553
			})
			$(this).css('z-index',999);
			
			
		},function(){
			$(this).children('.after').stop(true).animate({
				width:0,
				height:0
			})
			$(this).css('z-index',1);
		})
		
		
		
		
		var aimg = $('.gl-1 .after-r img');	
			aimg.bind('mouseenter',function(){			
			var ai =	$(this).closest('.after').siblings('.before').children('.bt').children('a').children('img');				
				console.log($(this).closest('.after').siblings('.before').children('.bt'));			
				ai.attr('src',$(this).attr('src'));					
			})
			$('.gl-1 .after-r li').bind('mouseenter',function(){					
				$('.after-r li').removeClass('bordercolor');			
				$(this).addClass('bordercolor');
			})
		
		
		//商品添加到购物车
		
		$('.after-b').bind('click',function(){
			
			
			$('.tan').css('display','block');
			
			
				$('.go').bind('click',function(){
					$('.tan').css('display','none');
				})
				
				$('.out').bind('click',function(){
					 window.location.href='gouwuche.html'
				})
			
			
			
			
			
			
			
			
			
			
			
		
			//从cookie中读取商品，读取的是字符串
			var aGoods = getCookie('goods');
			
			//如果读取到的结果是undefined，那么也就意味着这是第一次添加商品
			if(aGoods === undefined) {
				var aGoods = []; // aGoods相当于购物车
			} else {
				aGoods = JSON.parse(aGoods);//getCookie('goods');获得是字符串。转换成json对象（是一个数组）
			}
			
			var
				dataId    = $(this).attr('data-id'),
				dataTitle = $(this).attr('data-title'),
				dataUrl   = $(this).attr('data-url'),
				dataPrice = $(this).attr('data-price'),
				dataAmount= $(this).attr('data-amount'),
				dataNum	  = 1;
			
			var isExist = false; // 假设该商品不存在
			aGoods.forEach(function (v) {
				if(v.id == dataId) {
					v.num++;
					isExist = true;
				}
			});		
				
				
			if(isExist === false){
			//创造一个对象用来接收读取到的自定义属性	
				var oGoods = {
						id: dataId,
						name: dataTitle,
						url: dataUrl,
						price: dataPrice,
						amount:dataAmount,
						num: dataNum
					};
				aGoods.push(oGoods);
			}	
				
			setCookie('goods', JSON.stringify(aGoods), 7);	
			
			console.log(aGoods);
				
		});	
	})
})(jQuery)
