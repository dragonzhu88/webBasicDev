/**
 * Created by zdc on 16-8-24.
 */
$(document).ready(function () {
    $("#btn1").on("click", btn1_click);
    $("#btn2").on("click", btn2_click);
    $("#btn3").on("click", btn3_click);
    $("#btn4").on("click", btn4_click);
});

function btn1_click() {
    alert("text:" + $("#text1").text());
}

function btn2_click() {
    alert("text:" + $("#text1").html());
}

function btn3_click() {
    alert("value:" + $("#input").val());
}

function btn4_click() {
    alert("value:" + $("#aid").attr("href"));
}