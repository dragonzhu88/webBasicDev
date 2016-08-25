/**
 * Created by zdc on 16-8-24.
 */
$(document).ready(function () {
    $("#btn1").on("click",btn1_click);
    $("#btn2").on("click",btn2_click);
    $("#btn3").on("click",btn3_click);
    $("#btn4").on("click",btn4_click);
    $("#btn5").on("click",btn5_click);
});

function btn1_click() {
    $("#p1").text("修改1");
}

function btn2_click() {
    $("#p2").html("<a href='http://www.baidu.com'>百度</a>");
}

function btn3_click() {
    $("#input").val("zzzzzzz");
}

function btn4_click() {
    $("#aid").attr({
        "href" : "http://www.sogou.com",
        "title" : "hello"
    });
    $("#aid").text("搜狗");
}

function btn5_click() {
    $("#p5").text(function (i,ot) {
        return "old:" + ot + "new:这是新内容"+(i);
    })
}