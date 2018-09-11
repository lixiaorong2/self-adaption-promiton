
/*var i = 0;
$(function(){
    $(".ig").eq(0).show().siblings().hide();
    setInterval(function(){
        i++;
        if (i == 4)
        {
            i = 0;
    }
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
},4000);
}); */

//轮播
var i = 0;
var timer;
$(document).ready(function(){
    //$(".ig").hover(function(){$(".btn").show();},function(){$(".btn").hide();});//移入 移出隐藏    
    $(".ig").eq(0).show().siblings().hide();//第一张图片显示，其他图片隐藏
    ShowTime();//轮播样式函数
$(".tab").hover(function(){
    i=$(this).index();//获取当前索引
    Show();//轮播的效果
    clearInterval(timer);//清除轮播
},function(){
    ShowTime();//轮播样式函数
});

$(".ig").mouseover(function(){
    clearInterval(timer);
});
$(".ig").mouseout(function(){
    ShowTime();
});

$(".btn_left").click(function(){
    clearInterval(timer);//清除轮播
    if( i == 0)//如果i=0，点击一下i=5，然后依次递减i--
    { i = 2;
    }
      i--;
    Show();//轮播的效果
    ShowTime();//轮播样式函数
    });

$(".btn_right").click(function(){
    clearInterval(timer);
    if(i == 1)//如果i=4，点击一下i=-1，然后依次递减i++2
    {i = -1;
    }
    i++;
    Show();//轮播的效果
    ShowTime();//轮播样式函数
    });
}); 


function Show()//轮播的效果，此处为淡入淡出，300为淡入淡出的时间
{
    $(".ig").eq(i).fadeIn(600).siblings().fadeOut(600);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
    }

function ShowTime()//轮播的样式，4s轮播一张图片
{
    timer = setInterval(function(){
        i++;
        if (i == 2){
            i = 0;
    }
     Show();
    },4000);
}