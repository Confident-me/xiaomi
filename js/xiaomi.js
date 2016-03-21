$(function(){
	/****  banner轮播   *****/
	var imgs=$(".bannerbox a img");
	//alert(imgs.length)
	var btn=$("xiaodian-box1")
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=imgs.length){
				index=0;
			}
		}else if(type=="1"){
			index--;
			if(index<=-1){
				index=imgs.length-1;
			}
		}
		
		imgs.hide();
		imgs.eq(index).fadeIn();
		btn.css({background:"#ccc"})
		btn.eq(index).css({background:"#333"});
	}
	var t=setInterval(function(){
		demo("r");
	},2000);
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		demo("r");
	},2000);
	});


	$(".left").click(function(){
		demo("1");
	});
	$(".right").click(function(){
		demo("r");
	});

	$(".xiaodian-box1").hover(function(){
		var now=$(this).index();
		$(".xiaodian-box1").css({
			background:"#ccc"
		})
		$(this).css({background:"#333"});
		$(".banner a img").hide();
		$(".banner a img").eq(now).fadeIn();
		index=now;
	},function(){});
   

   /********  购物车下拉    *********/
	$(".gouwu-kuang").hover(function(){
		$(this).find("div").slideDown();
	},function(){
		$(this).find("div").slideUp();
	})
	//alert($(".gouwu-kuang").html());

/****   主导航下拉  *********/
		$(".xiaomi").hover(function(){
			$(this).find("#xxmi").stop();
			$(this).find("#xxmi").slideDown();
		},function(){
			$(this).find("#xxmi").stop();
			$(this).find("#xxmi").slideUp();
		})

/*****   明星滚动  ******/
	var num=0;
	function move1(){
		if(num==0){
			$(".gundongbox").animate({left:"-1214px"},1000);
			$(".lefts").css({color:"#ccc"});
			$(".rights").css({color:"#666"});
			num=1;
		}else if(num==1){
			$(".gundongbox").animate({left:"0px"},1000);
			$(".lefts").css({color:"#666"});
			$(".rights").css({color:"#ccc"});
			num=0;
		}
	}
	var tt=setInterval(move1,5000);
	
	$(".lefts").hover(function(){
		clearInterval(tt);
		$(".lefts").css({color:"red"});
	},function(){
		tt=setInterval(move1,5000);
		$(".lefts").css({color:"#ccc"});
	});
	$(".rights").hover(function(){
		clearInterval(tt);
		$(".rights").css({color:"#666"});
	},function(){
		tt=setInterval(move1,5000);
		$(".rights").css({color:"#ccc"});
	});
	

	$(".lefts").click(function(){
			$(".gundongbox").animate({left:"-1214px"},1000);

		});

	$(".rights").click(function(){
			$(".gundongbox").animate({left:"0px"},1000);
		});
	








})