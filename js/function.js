// 透明度轮播函数
//     获取所需元素
//     imgs: 要轮播的所有图片集合
//     dots:轮播点
//     banner:放banner的大盒子元素
//     activeClass:轮播点的类名
//     bannerNum:轮播图的张数
//     second:轮播时间
function Olunbo(imgs,dots,banner,activeClass="active",bannerNum,second=1500){
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    //鼠标移入轮播点
    for (let i=0;i<dots.length;i++ ){
        //鼠标移入
        dots[i].onclick=function () {
            for (let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                //可以改为opacity透明度
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add(activeClass);
            imgs[i].style.opacity=1;
            num=i;
        }
    }
    //自动轮播
    let t=setInterval(move,second);
    let num=0;
    function move() {
        num++;
        if(num==bannerNum){
            num=0;
        }
        for (let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeClass);
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add(activeClass);
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,second);
    }
}
// 透明度双下标轮播函数
function banner_Ol(imgs,dots,banner,leftBtn,rightBtn,activeClass="active",second=2000){
    imgs[0].style.opacity=1;
    dots[0].classList.add(activeClass);
    flag=true;
    //鼠标移入轮播点
    for (let i=0;i<dots.length;i++ ){
        //鼠标移入
        dots[i].onclick=function () {
            for (let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                //可以改为opacity透明度
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add(activeClass);
            imgs[i].style.opacity=1;
            num=i;
        }
    }
    //自动轮播
    let t=setInterval(move,second);
    let num=0;
    function move() {
        num++;
        if(num==imgs.length){
            num=0;
        }
        for (let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeClass);
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add(activeClass);
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }
    leftBtn.onclick=function(){
        //判断开关是否开启
        //开关开启，则！flag=false，不执行retur，执行flag=false和move
        //move执行完flag=true      
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        flag=false;
        move();
    }
    rightBtn.onclick=function(){
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        flag=false;
        move();
    }
}

//层级轮播函数
    //获取所需元素
    //imgs: 要轮播的所有图片集合
    //dots:轮播点
    //banner:放banner的大盒子元素
    //activeClass:轮播点的类名
    //bannerNum:轮播图的张数
    //second:轮播时间
function cengji(imgs,dots,banner,activeClass="active",bannerNum,second=1500){
    imgs[0].style.zIndex=2;
    dots[0].classList.add(activeClass);
    //鼠标移入轮播点
    for (let i=0;i<dots.length;i++ ){
        //鼠标移入
        dots[i].onclick=function () {
            for (let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                //可以改为opacity透明度
                imgs[j].style.zIndex=1;
            }
            dots[i].classList.add(activeClass);
            imgs[i].style.zIndex=2;
            num=i;
        }
    }
    //自动轮播
    let t=setInterval(move,second);
    let num=0;
    function move() {
        num++;
        if(num==bannerNum){
            num=0;
        }
        for (let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeClass);
            imgs[j].style.zIndex=1;
        }
        imgs[num].style.zIndex=2;
        dots[num].classList.add(activeClass);
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,second);
    }
}

//选项卡函数
    //lis：选项卡的li标签类名
    //son:选项卡显示的盒子类名
function xuanka(lis,son) {
    for (let i=0;i<lis.length;i++){
        //当鼠标移入每个li的操作
        lis[i].onmouseover=function () {
            //其余子元素消失
            // for (let j=0;j<son.length;j++){
            //     son[j].style.display="none";
            // }
            //当前子元素出现
            son[i].style.display="block";
        }
        lis[i].onmouseout=function () {
            son[i].style.display="none";
        }
    }
}

//遮罩函数
    //box 被遮罩的盒子的类名
    //coverClass: 遮罩的盒子的类名
function Mask(box,coverClass="cover") {
    //鼠标移入
    box.onmouseover=function () {
        coverClass.style.display="block";
    }
    //鼠标移出
    box.onmouseout=function () {
        coverClass.style.display="none";
    }
}

//倒计时返回函数
    //span:存放数字的span类名
    //num:span中的数字
    //second:数字改变的间隔时间
    //address:存放的地址
    //获取类名
         //let span=document.getElementsByTagName("span")[0];
        //let num=span.innerHTML;
function Count(span,num,second=1000,address="") {
    window.onload=function () {
        //创建时间间隔函数，每隔一秒执行一次回调函数
        var t=setInterval(fn,second);
        function fn() {
            //时间--
            num--;
            if (num==0){
                //清除时间间隔函数
                clearInterval(t);
                window.open(address);
            }
            //改变span中的数字
            span.innerHTML=num;
        }
    }
}

//双下表轮播函数/左右轮播
    //imgs：需要轮播的图片集合
    //dots：轮播点的集合
    //banner：放图片的盒子
    //leftBtn：左箭头 元素
    //tightBtn：右箭头 元素
    //widths：轮播图的宽度 整数
    //activeClass：轮播点的选中颜色
    //second:轮播时间
function banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass="active",second=2000){
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
    let now=0;
    let next=0;
    //开关：控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true 可以点击左右箭头
    let flag=true;
    let t=setInterval(move, second);
    function move() {
        next++;
        if (next==imgs.length) {
            next=0;
        }
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    function moveL(){
        next--;
        if (next<0) {
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now], {left:widths});
        animate(imgs[next], {left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    leftBtn.onclick=function(){
        //判断开关是否开启
        //开关开启，则！flag=false，不执行retur，执行flag=false和move
        //move执行完flag=true      
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        flag=false;
        moveL();
    }
    rightBtn.onclick=function(){
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }
    //鼠标移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
        if (flag) {
            for(let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeClass);
            imgs[j].style.left=widths+"px";
        }
        dots[i].classList.add(activeClass);
        imgs[i].style.left=0;
        now=i;
        next=i;
            }
    }
}
//窗口失去焦点，停止时间控制函数
window.onblur=function(){
    clearInterval(t);
}
//窗口获得焦点，继续时间间隔函数
window.onfocus=function(){
    t=setInterval(move,second);
}
}

//点击轮播图
function banner_dj(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass="lie") {
    imgs[0].style.left = 0;
    dots[0].classList.add(activeClass);
    let now = 0;
    let next = 0;
    //开关：控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true 可以点击左右箭头
    let flag = true;

    // let t=setInterval(move, 2000);
    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    function moveL() {
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    rightBtn.onclick = function () {
        //判断开关是否开启
        //开关开启，则！flag=false，不执行retur，执行flag=false和move
        //move执行完flag=true      
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        if (next == 0) {
            return;
        }
        flag = false;
        moveL();
    }
    leftBtn.onclick = function () {

        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        if (next == imgs.length - 1) {
            return;
        }
        flag = false;
        move();
    }
    //鼠标移入轮播点
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function () {
            if (now == i) {
                return;
            } else if (now < i) {
                imgs[i].style.left = `${widths}px`;
                animate(imgs[now], {left: -widths});
                animate(imgs[i], {left: 0});
                dots[now].classList.remove(activeClass);
                dots[i].classList.add(activeClass);
                now = next = i;
            } else if (now > i) {
                imgs[i].style.left = `${-widths}px`;
                animate(imgs[now], {left: widths});
                animate(imgs[i], {left: 0});
                dots[now].classList.remove(activeClass);
                dots[i].classList.add(activeClass);
                now = next = i;
            }
        }
    }
}



