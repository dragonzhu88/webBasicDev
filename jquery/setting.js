/**
 * Created by zdc on 16-8-24.
 */
$(document).ready(function () {
    $("#btn1").on("click",btn1_click);
    $("#btn2").on("click",btn2_click);
    $("#btn3").on("click",btn3_click);
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