(function ($){
	$(function(){
		$('.tj button').click(function(){
			
			var reg1 = /^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/ig,//验证手机号码
				reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ig,//6-16位数字，字母组合
				mm = $('.mima input').prop('value'),
				zh = $('.zhanghao input').prop('value');
				
			
			if(!reg1.test(zh)){
				alert('请输入正确的手机号')
				
			}
			if(reg2.test(mm) === false){
				
			}
		})
		
		
		$('.yanzhengma>a').click(function(){
			var n = Math.round(Math.random()*10);
			$('.yanzhengma img').attr('src','../img/yzm'+ n +'.png')
		})
		
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
		
		
		$('.tj button').bind('click',function(){
				var acc = $(".zhanghao input").val();
				var pass1 = $(".mima input").val();
				var pass2 = $(".mim input").val();
				
				var resUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
				var data = {
					status:'register',
					userID:acc,
					password:pass1
				};
				
				getData(resUrl,"POST",data,"",function(result){
					
					if( result == 1){
						alert('注册成功');
					}
					
					location.href ='../html/denglu.html'
					
				})
				
			})
		
		
		
	})
})(jQuery)