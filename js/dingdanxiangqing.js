(function ($){
	$(function(){
		

		aGoods = JSON.parse(getCookie('goods'));
		aGoods.forEach(function (v){
			
			var clone = $('.moban').clone(true);
			clone.find('.w1').html(v.name);
			clone.find('.w2').html(v.price);
			clone.find('.w3').html(v.num);
			
	
			
			
			
//			clone.find('.heji').html($('.w2').html()*$('.w3').html());
			clone.removeClass('moban');
			clone.css('display','table-row');
		
			
			$('table').append(clone);
			  
		})
		
		
		
		
		
		console.log($('.heji')[0]);
		var p= 0;
		$('.heji').each(function(v,k){
			
			k.innerHTML = $(this).siblings('.w2').html()*$(this).siblings('.w3').html();
			console.log(p);
			p += parseInt(k.innerText);
			
		})
		
		$('.hf').html(p-178);
		$('.zj').html(p+90-178);
		$('.m45-3 span').html(p+90);

		
		
		
//		console.log(arrCity);
		
//		 console.log(new_obj);
		
//		for(var i = 0 ; i<arrCity.length ;i++){
////			
//			var pp = $("<option></option>"),
//				bb = arrCity;
//			pp.html(arrCity[i].name);
//			$('.s1').append(pp);
//			$('.s1').on('change',function(){
//				var val = $(this).val(),
//					arrS2;
//				bb.forEach(function(v){
//					if(v.name == val){
//						arrS2 = v.sub;
//						
//					}
//				});
//				
//			});
			//console.log(arrCity[i].sub);
		
			
//			var cc = this.sub;
//			console.log(cc);
//			$('.s1').change(function(){
//				for(var y = 0 ;y < cc.length; y++){}
//					console.log(cc[y]);
//				
//			})
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
	})
})(jQuery)