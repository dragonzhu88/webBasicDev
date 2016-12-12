/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("#btn1").on("click", btn1_click);
    $("#btn2").on("click", btn2_click);
    $("#btn3").on("click", btn3_click);
    $("#btn4").on("click", btn4_click);
    $("#btn5").on("click", appendText);
});

function btn1_click() {
    $("#p1").append("new append");
}

function btn2_click() {
    $("#p2").prepend("new prepend");
}

function btn3_click() {
    $("#p3").before("new before");
}

function btn4_click() {
    $("#p4").after("new after");
}

function appendText() {
    var text1="<p>文档1</p>"
    var text2=$("<p></p>").text('文档2')
    var text3=document.createElement("p");
    text3.innerHTML = "文档3"
    $("body").append(text1,text2,text3)
}