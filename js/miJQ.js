$(function(){
	//购物车
	$(".cart").mouseenter(function(){
        $(".menu").clearQueue().slideDown();
    })
    $(".cart").mouseleave(function() {
    	$(".menu").clearQueue().slideUp();
    })
    //家电
    let parent=$(".tab1");
    let son=$(".box2-two");
    parent.mouseenter(function(){
    	let i=$(this).index();
    	son.css("display","none").eq(i).css("display","block");
    	parent.removeClass('tab1-active').eq(i).addClass('tab1-active')
    })
    parent.triggerHandler('mouseenter');
    //侧选项卡
    let clear=$(".clear .list1");
    let cover=$(".clear .list1 .cover");
    console.log(clear,cover);
    clear.mouseenter(function(){
    	$(".cover").css("display","none")
    	$(this).children(".cover").css("display","block");
    })
    clear.mouseleave(function(){
    	$(this).children(".cover").css("display","none");
    })
    //轮播图
    let rightBtn=$(".banner .rightBtn");
    let leftBtn=$(".banner .lfteBtn");
    let img=$(".view .imgss");
    let dot1=$(".dot .progress");
    let banner=$(".banner");
    console.log(banner);
    let now=0;
    img.eq(0).css("z-index",10);
    dot1.eq(0).addClass('active');
    let t=setInterval(move, 2000);
    dot1.click(function(){
    	let i=$(this).index();
    	img.css("z-index",5).eq(i).css("z-index",10);
    	dot1.removeClass('active').eq(i).addClass('active');
    })
    function move(){
    	now++;
    	if (now==img.length) {
    		now=0;
    	}
    	img.css("z-index",5).eq(now).css("z-index",10);
    	dot1.removeClass('active').eq(now).addClass('active');
    }
    function moveL(){
        now--;
        if (now==-1) {
            now=img.length-1;
        }
        img.css("z-index","5").eq(now).css("z-index","10");
        dot1.removeClass('active').eq(now).addClass('active');
    }
    rightBtn.click(function(){
    	move();
    })
    leftBtn.click(function(){
    	moveL();
    })
    banner.mouseenter(function(){
    	clearInterval(t);
    })
    banner.mouseleave(function(){
    	t=setInterval(move, 2000);
    })
    //小米闪购
    let button=$(".top #right");
    let button1=$(".top #left");
    let boxTwo=$(".box-kuai .box-two .box-sec");
    console.log(button);
    button.click(function(){
    	boxTwo.animate({left:'-978px'}, "slow")
    })
    button1.click(function(){
		boxTwo.animate({left:'0px'}, "slow")
    })
    //为你推荐
    let button2=$(".box-hd button:first");
    let button3=$(".box-hd button:last");
    let recommend=$(".rec .recommend");
    let w=recommend.width();
    console.log(w);
    let times = 0;
    button2.click(function(){
    	times++;
        if (times == 3) {
            times = 2;
        }
    	recommend.animate({left:'-978px'},"slow")
    })
    button3.click(function(){
    	times--;
        if (times == -1) {
            times = 0;
        }
    	recommend.animate({left:'0px'},"slow")
    })
    //内容
    let imgs1 =$(".imges");
    let dots1 = $(".dian");
    let leftBtn1 = $(".leftBtn:eq(0)");
    let rightBtn1 = $(".rightBtn:eq(1)");
    let widths1 =imgs1.width();
    imgs1.eq(0).css({left:0});
    dots1.eq(0).addClass("lie");
    console.log(widths1)
    let now1=0;
    let next1=0;
    let flag=true;
    function move1(){
        next1++;
        if(next1==imgs1.length){
            next1=0;
        }
        imgs1.eq(next1).css({left:widths1});
        imgs1.eq(now1).animate({left:-widths1});
        imgs1.eq(next1).animate({left:0},function () {
            flag=true;
        });
        dots1.eq(now1).removeClass("lie");
        dots1.eq(next1).addClass("lie");
        now1=next1;
    }
    function moveL1() {
        next1--;
        if(next1<0){
            next1=imgs1.length-1;
        }
        //确保下一张图片永远在最左侧
        imgs1.eq(next1).css({left:-widths1});
        imgs1.eq(now1).animate({left:widths1});
        imgs1.eq(next1).animate({left:0},function () {
            flag=true;
        });
        dots1.eq(now1).removeClass("lie");
        dots1.eq(next1).addClass("lie");
        now1=next1;
    }
    rightBtn1.click(function () {
        if(now1==0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        moveL1();
    });
    leftBtn1.click(function () {
        if(now1==imgs1.length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        move1();
    });
    dots1.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(now1==i){
            return;
        }else if(now1<i){
            imgs1.eq(i).css({left:widths1});
            imgs1.eq(now1).animate({left:-widths1});
            imgs1.eq(i).animate({left:0},function () {
                flag=true;
            });
            dots1.removeClass("lie").eq(i).addClass("lie");
            now1=next1=i;
        }else if(now1>i){
            imgs1.eq(i).css({left:-widths1});
            imgs1.eq(now1).animate({left:widths1});
            imgs1.eq(i).animate({left:0},function () {
                flag=true;
            });
            dots1.removeClass("lie").eq(i).addClass("lie");
            now1=next1=i;
        }

    })

})