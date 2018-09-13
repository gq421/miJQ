window.onload=function() {
    var lis = document.getElementsByClassName("list1");
    var son = document.getElementsByClassName("cover");
    var item = document.getElementsByClassName("item-box");
    var link = document.getElementsByClassName("nav-in");
    console.log(link);
//遍历每个li
    for (let i = 0; i < lis.length; i++) {
//当鼠标移入每个li的操作
        lis[i].onmouseover = function () {
            //其余子元素消失
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            //当前子元素出现
            son[i].style.display = "block";
        }
        lis[i].onmouseout = function () {
            son[i].style.display = "none";
        }
    }
    for (let i = 0; i < link.length; i++) {
        // link[i].onmouseover = function () {
        //     for (let j = 0; j < item.length; j++) {
        //         item[j].style.height = '210px';
        //         item[j].style.boxShadow = '0 3px 4px 1px rgba(0,0,0,0.1)';
        //     }
        //     item[i].style.height = '210px';
        // }
        link[i].onmouseout = function () {
            item[i].style.height = 0;
            item[i].style.boxShadow="none";
        }
    }

    // head_buy.onmouseleave = function () {
    //     head_buy_box.style.height = 0;
    //     head_buy_box.style.boxShadow = 'none';
    // }
    // 透明度轮播图
    let imgs = document.querySelectorAll(".imgss");
    let dots = document.querySelectorAll(".progress");
    let banner = document.querySelectorAll(".banner")[0];
    let leftBtn = document.querySelectorAll(".lfteBtn")[0];
    let rightBtn = document.querySelectorAll(".rightBtn")[0];
    let widths = parseInt(getComputedStyle(imgs[0], null).width);
    console.log(widths);
    imgs[0].style.opacity = 1;
    dots[0].classList.add("active");
    //鼠标移入轮播点
    for (let i = 0; i < dots.length; i++) {
        //鼠标移入
        dots[i].onclick = function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
                //可以改为opacity透明度
                imgs[j].style.opacity = 0;
            }
            dots[i].classList.add("active");
            imgs[i].style.opacity = 1;
            num = i;
        }
    }
    //自动轮播 
    let t = setInterval(move, 2000);
    let num = 0;

    function move() {
        num++;
        if (num == 4) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        imgs[num].style.opacity = 1;
        dots[num].classList.add("active");
    }

    function moveL() {
        num--;
        if (num < 0) {
            num = 3;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        imgs[num].style.opacity = 1;
        dots[num].classList.add("active");
    }

    leftBtn.onclick = function () {
        moveL();
    }
    rightBtn.onclick = function () {
        move();
    }
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, 2000);
    }

    //双下标轮播图
    let imgs1 = document.querySelectorAll(".imges");
    let dots1 = document.querySelectorAll(".dot1");
    let banner1 = document.querySelectorAll(".list")[0];
    let leftBtn1 = document.querySelectorAll(".leftBtn")[0];
    let rightBtn1 = document.querySelectorAll(".rightBtn")[1];
    let widths1 = parseInt(getComputedStyle(imgs[0], null).width);
    let lie = document.querySelectorAll(".lie");
    banner_dj(imgs1, dots1, banner1, leftBtn1, rightBtn1, widths1, "lie");
    let imgs2 = document.querySelectorAll(".six");
    let dots2 = document.querySelectorAll(".dot2");
    let banner2 = document.querySelectorAll(".lat1")[0];
    let leftBtn2 = document.querySelectorAll(".left1")[0];
    let rightBtn2 = document.querySelectorAll(".right1")[0];
    let widths2 = parseInt(getComputedStyle(imgs2[0], null).width);
    let lie1 = document.querySelectorAll(".lie");
    console.log(imgs2);
    banner_dj(imgs2, dots2, banner2, leftBtn2, rightBtn2, widths2, "lie");
    let imgs3 = document.querySelectorAll(".sec");
    let dots3 = document.querySelectorAll(".dot3");
    let banner3 = document.querySelectorAll(".lat2")[0];
    let leftBtn3 = document.querySelectorAll(".left3")[0];
    let rightBtn3 = document.querySelectorAll(".right3")[0];
    let widths3 = parseInt(getComputedStyle(imgs3[0], null).width);
    let lie2 = document.querySelectorAll(".lie");
    banner_dj(imgs3, dots3, banner3, leftBtn3, rightBtn3, widths3, "lie");
    let imgs4 = document.querySelectorAll(".four");
    let dots4 = document.querySelectorAll(".dot4");
    let banner4 = document.querySelectorAll(".lat4")[0];
    let leftBtn4 = document.querySelectorAll(".left4")[0];
    let rightBtn4 = document.querySelectorAll(".right4")[0];
    let widths4 = parseInt(getComputedStyle(imgs4[0], null).width);
    let lie3 = document.querySelectorAll(".lie");
    banner_dj(imgs4, dots4, banner4, leftBtn4, rightBtn4, widths4, "lie");

    //为你推荐
    let button = document.querySelectorAll("button");
    let list = document.querySelector(".recommend");
    let w = parseInt(getComputedStyle(list, null).width) / 3;
    let times = 0;
    console.log(list);
    button[2].onclick = function () {
        times++;
        if (times == 3) {
            times = 2;
        }
        list.style.transform = `translate(${(-w * times)}px)`;

    }
    button[3].onclick = function () {
        times--;
        if (times == -1) {
            times = 0;
        }
        list.style.transform = `translate(${(-w * times)}px)`;
    }
    //小米闪购
    let list1 = document.querySelector(".box-sec");
    let wh = parseInt(getComputedStyle(list1, null).width) / 2;
    let times1 = 0;
    console.log(button);
    button[0].onclick = function () {
        times1++;
        if (times1 == 2) {
            times1 = 1;
        }
        list1.style.transform = `translate(${(-wh * times1)}px)`;
    }
    button[1].onclick = function () {
        times1--;
        if (times1 == -1) {
            times1 = 0;
        }
        list1.style.transform = `translate(${(-wh * times1)}px)`;
    }

    //购物车
    let head_buy = document.getElementsByClassName('cart')[0];
    let head_buy_box = document.getElementsByClassName('menu')[0];
    head_buy.onmouseenter = function () {
        head_buy_box.style.height = '100px';
        head_buy_box.style.boxShadow = '0 3px 4px 1px rgba(0,0,0,0.1)';
    }

    head_buy.onmouseleave = function () {
        head_buy_box.style.height = 0;
        head_buy_box.style.boxShadow = 'none';
    }
    // $(".cart").mouseenter(function(){
    //     $(".menu").slideDown("slow");
    // })
    // $(".cart").mouseleave(function(){
    //     $(".menu").slideUP("slow");
    // })

    //家电模块
    let tab1=document.querySelectorAll(".tab1");
    let box2=document.querySelectorAll(".box2-two");
    tab1[0].classList.add("tab1-active");
    box2[0].style.display="block";
    for (let i = 0; i < tab1.length; i++) {
        //鼠标移入
        tab1[i].onmouseover = function () {
            for (let j = 0; j < tab1.length; j++) {
                tab1[j].classList.remove("tab1-active");
                //可以改为opacity透明度
                box2[j].style.display = "none";
            }
            tab1[i].classList.add("tab1-active");
            box2[i].style.display = "block";
        }
    }
    //返回顶部
    let totop=document.querySelectorAll(".bar-totop")[0];
    totop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    console.log(totop);
    window.onscroll=function () {
        let h=document.body.scrollTop||document.documentElement.scrollTop;
        if (h>1000){
            totop.style.display="block";
        } else {
            totop.style.display="none";
        }
    }

    let pop=document.querySelectorAll(".bar-pop");
    let sor=document.querySelectorAll(".bar-sor");
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
}
