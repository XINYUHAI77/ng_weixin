// JavaScript Document
/*弹出菜单*/

$(function(){
	$(".btn-menu").on("touchstart",function(){
		if($(".menu-list").is(":hidden")){
			$('.menu-list').show();
			$(".cover").show();
		  }
		  else{
			  $('.menu-list').hide();
			 $(".cover").hide();
			  }
	});
	$(".cover").on("touchstart",function(){
		$('.menu-list').hide();
		$(this).hide();	
		
	})

   /*回到顶部*/
	$(window).scroll(function(){
		if($(window).scrollTop()>320){
			$('.gotop').show();
		}else{
			$('.gotop').hide();
		}
	})
	$('.gotop').click(function(){
		 $("html, body").animate({
	   scrollTop: 0
	  },'fast');
	})
	//底部导航滑动
	$('#clik_more').click(function(){
		if($('#clik_more dl').is(":hidden")){
			$('#clik_more dl').slideDown();
		}else{
			$('#clik_more dl').slideUp();
		}
	})
	//购买数量
	//减少
	$(".reduce_num").click(function(){
		if (parseInt($(this).siblings(".amount").val()) <= 1){
			alert("商品数量最少为1");
		} else{
			$(this).siblings(".amount").val(parseInt($(this).siblings(".amount").val()) - 1);
		}
	});

	//增加
	$(".add_num").click(function(){
		$(this).siblings(".amount").val(parseInt($(this).siblings(".amount").val()) + 1);
	});

	//直接输入
	$(".amount").blur(function(){
		if (parseInt($(this).val()) < 1){
			alert("商品数量最少为1");
			$(this).val(1);
		}
		$(this).val(parseInt($(this).val()));
	});
	//付款方式
	$(".chosepays a").click(function(){
		$(this).addClass("pay_on").siblings().removeClass("pay_on");
		$(this).find("input").attr({checked:"checked"});
		//去除虚边框
		$(this).blur();
	});
	//订单列表tab切换
	$('.order_tip li').click(function(){
		var ind_num=$(this).index();
		$(this).addClass('bg_on').siblings("li").removeClass('bg_on');
		$('.car_all .car').eq(ind_num).removeClass('hide').siblings(".car").addClass('hide');
	})
})



