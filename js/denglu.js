(function ($){
	$(function(){
		
		$('.dl button').click(function(){
			
			function  getData(url,type,data,dataType,callback){
				var myUrl = url;
				if(dataType == "JSONP"){
					myUrl += "?callback=";
				}
				$.ajax({
					url:myUrl,
					type:type,
					data:data,
					dataType:dataType,
					success:function(response){
						// console.log("response",response)
						callback(response);
					}
				})
			}
			var
				yh = $('.yonghu input').prop('value'),
				mm = $('.mima input').prop('value');
			
			var loginUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
				var data = {
					status:"login",
					userID:yh,
					password:mm
				};
				
				
				getData(loginUrl,"GET",data,"",function(result){
					//console.log(result);
					if(result == "0"){
						alert("用户名不存在")
					}else if(result == "2"){
						alert("密码错误")
					}else{						
						location.href ='../html/shasha_shouye.html'
					}
				})
			
			
			
			
			
			
			
			
			
			
			
			
			
//			var
//				yh = $('.yonghu input').prop('value'),
//				mm = $('.mima input').prop('value');
//			
//			if($('.yonghu input').prop('value') === ''){
//				$('.cue1').css('display','block');
//				return false;
//			};
//			if($('.mima input').prop('value') === ''){
//				$('.cue2').css('display','block');
//				return false;
//			};
//			if(yh === 'gh' && mm === '123'){
//				if($('.jizhu input').prop("checked")){
//					setCookie('login', 'a', 7);
//				}else{
//					setCookie('login', 'a');
//				}
//				location.href ='../html/shasha_shouye.html'
//			}
		})
		
		
		
	})
})(jQuery)