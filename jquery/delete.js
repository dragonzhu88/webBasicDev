/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("#btn").on("click",click_fun1);
    $("#btn2").on("click",click_fun2);
});

function click_fun1() {
    $("p").remove();
}

function click_fun2() {
    $("div").empty();
}