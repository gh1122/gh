(function ($){
	$(function(){
		
		var 
			iWinH = document.documentElement.clientHeight;
			console.log(iWinH);
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
		
		
		
		
		
		
		
		 aGoods = JSON.parse(getCookie('goods'));
//		aGoods.forEach(function (v){
//			console.log(v);
//		
//			 var clone = $('.goods').clone(true);
//			 clone.find('img').attr('src',v.url);
//			 clone.find('#jieshao').html(v.name);
//			 clone.find('#hanliang').html(v.amount);
//			 clone.find('.cc3').html(v.price);
//			 clone.find('.cc5').html(v.price);
//			 clone.find('input').attr('value',v.num);
//			
//			$('.cart-c').append(clone,function(){
//				console.log(111);
//			});
//			
//			clone.css('display','block');
//			
//			
//		});
		for(var i=0;i<aGoods.length;i++){
		//遍历获得的cookie数组  
		//克隆一个模板，修改模板的内容
			var clone = $('.moban').clone(true);
			clone.find('img').attr('src',aGoods[i].url);
			clone.find('#jieshao').html(aGoods[i].name);
			clone.find('#hanliang').html(aGoods[i].amount);
			clone.find('.cc3').html(aGoods[i].price);
			clone.find('.cc5').html(aGoods[i].price*aGoods[i].num);
			clone.find('input').attr('value',aGoods[i].num);
			clone.find('.cc6').attr('data-id',aGoods[i].id);
			 
			 
			 
			 
			clone.removeClass('moban');
			clone.css('display','block');
		//添加的页面
			$('.cart-c').append(clone);
		}
		
		
		$('.goods .cc6').bind('click',function(){
			var aGoods = JSON.parse(getCookie('goods'));
		
			for(var i=0;i<aGoods.length;i++){
				var data = $(this).attr('data-id');
				if(aGoods[i].id === data){
					aGoods.splice(i,1);
					setCookie('goods', JSON.stringify(aGoods), 7);
				}
			}	
			$(this).parents('.goods').remove();
		})
		
		
		
		$('.jian').bind('click',function(){
			var a = Number($(this).siblings('input').attr('value')); 
			$(this).siblings('input').attr('value',a-1);
			var b =  Number($(this).siblings('input').attr('value'));
			
			c =  $(this).parents('.cc4-1').parents('.cc4').siblings('.cc3').html();
		
			$(this).parents('.cc4-1').parents('.cc4').siblings('.cc5').html(c*b);
			var aGoods = JSON.parse(getCookie('goods'));
			console.log(aGoods);
			
			var  r = $(this).parents('.cc4-1').parents('.cc4').siblings('.cc6').attr('data-id');
			
			aGoods.forEach(function(v){
				
				if(v.id == r){
					v.num = b;
					setCookie('goods', JSON.stringify(aGoods), 7);
					
				}
			});

		})
		
		
		//购物车中商品点击加号商品数量价格增加的功能
		$('.jia').bind('click',function(){
			//获取当前的input的value
			var a = Number($(this).siblings('input').attr('value')); 
			$(this).siblings('input').attr('value',a+1);
			//获取更改后的value
			var d =  $(this).siblings('input').attr('value');
			
			e =  $(this).parents('.cc4-1').parents('.cc4').siblings('.cc3').html();
		console.log(e);
			$(this).parents('.cc4-1').parents('.cc4').siblings('.cc5').html(d*e);
			
			//获取该商品用于标示的自定义属性data-id 
			var  r = $(this).parents('.cc4-1').parents('.cc4').siblings('.cc6').attr('data-id');
			var aGoods = JSON.parse(getCookie('goods'));//获取当前cookie 获得是个数组并修改内容
			aGoods.forEach(function(v){
				//遍历这个数组，若v.id与 this的data-id 一样的话，修改 v.num
				if(v.id == r){
					v.num = d;
					//修改后重新设置cookie
					setCookie('goods', JSON.stringify(aGoods), 7);
					
				}
			});

		})
		
		
		$('.count').bind('click',function(){
			location.href="订单详情.html";

		})
		
		$('#all').click(function(){
			var f =	$('.goods').not('.moban').find('#check');
				if(f.prop("checked")){
					 f.prop("checked",false);
				}else{					
					 f.prop("checked",true);
				}
				
				
				
			var o =	$('.goods').not('.moban').children('.cc5');
				
			var arr = 0;
			o.each(function(v,k){				
				arr += parseInt(k.innerText);					
			})			
			$('.cbb4 span').html(arr);
				
			var p =	$('.goods').not('.moban').find('.cc4-1 input');	
			var num = 0;
				
				p.each(function(v,k){
					
					num += parseInt(k.value);
				})
				
				$('.cbb3 span').html(num);
		
				
				
				
				
				
				
				
//             f.attr("checked",'checked');
           	});
			
		
		
	
		
	
		
		
	})
})(jQuery)
