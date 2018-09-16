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
    let w=recommend.width()/3;
    console.log(w);
    let times = 0;
    button2.click(function(){
    	times++;
        if (times == 3) {
            times = 2;
        }
    	recommend.css("transform",`translate(${-w*times}px)`);
    })
    button3.click(function(){
    	times--;
        if (times == -1) {
            times = 0;
        }
    	recommend.css("transform",`translate(${-w*times}px)`);
    })
    //内容
    let imgs1 =$(".imges");
    let dots1 = $(".dian");
    let leftBtn1 = $(".leftBtn:eq(0)");
    let rightBtn1 = $(".rightBtn:eq(1)");
    let widths1 =imgs1.width();
    bannerLr(imgs1,dots1,leftBtn1,rightBtn1,widths1);
    let imgs2 = $(".six");
    let dots2 = $(".dot2");
    let leftBtn2 = $(".left1:eq(0)");
    let rightBtn2 = $(".right1:eq(0)");
    let widths2 = imgs2.width();
    bannerLr(imgs2,dots2,leftBtn2,rightBtn2,widths2);
    let imgs3 = $(".sec");
    let dots3 = $(".dot3");
    let leftBtn3 = $(".left3:eq(0)");
    let rightBtn3 = $(".right3:eq(0)");
    let widths3 = imgs3.width();
    bannerLr(imgs3,dots3,leftBtn3,rightBtn3,widths3);
    let imgs4 = $(".four");
    let dots4 = $(".dot4");
    let leftBtn4 = $(".left4:eq(0)");
    let rightBtn4 = $(".right4:eq(0)");
    let widths4 = imgs4.width();
    bannerLr(imgs4,dots4,leftBtn4,rightBtn4,widths4);
    function bannerLr(imgs1,dots1,leftBtn1,rightBtn1,widths1){
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
}
    //倒计时
    let spans=document.querySelectorAll(".hour");
    console.log(spans);
    setData();
    setInterval(setData,1000);
    function setData(){
        let arr=fn();
        spans.forEach((v,index)=>{
            v.innerHTML=arr[index];
        })
    }
    function fn(){
        //获取现在的时间
        let now=new Date();
        //获取放假的时间
        let future=new Date(2018,9,1);
        //相差的时间转化为毫秒
        let time=Math.floor((future.getTime()-now.getTime())/1000);

        let arr=[];
        let hour=Math.floor(time%(30*24*360)%(24*60*60)/(60*60));
        // arr.push(hour);
        if (Math.floor(hour/10)==0){
            arr.push('0' + hour);
        } else{
            arr.push(hour);
        }
        let min=Math.floor(time%(30*24*360)%(24*60*60)%(60*60)/60);
        if (Math.floor(min/10)==0){
            arr.push('0'+min);
        } else {
            arr.push(min);
        }
        // arr.push(min);
        let s=Math.floor(time%(30*24*360)%(24*60*60)%(60*60)%60);
        // arr.push(s);
        if (Math.floor(s/10)==0){
            arr.push('0'+s);
        } else {
            arr.push(s);
        }
        return arr;
    }
    //返回顶部
    let totop=$('.bar-totop');
    console.log(totop);
    totop.click(function(){
        $(document.body).animate({scrollTop:0});
        $(document.documentElement).animate({scrollTop:0});
    })
    console.log(totop);
    window.onscroll=function () {
        let h=document.body.scrollTop||document.documentElement.scrollTop;
        if (h>1000){
            totop.css("display","block");
        } else {
            totop.css("display","none");
        }
    }

    let pop=$(".bar-pop");
    let sor=$(".bar-sor");
    for (let i = 0; i < sor.length; i++) {
        //鼠标移入
        sor[i].onmouseover = function () {
            for (let j = 0; j < sor.length; j++) {
                pop[j].style.display = "none";
            }
            pop[i].style.display = "block";
        }
        sor[i].onmouseout=function () {
            pop[i].style.display="none";
        }
    }
    console.log(sor);
})