/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("#hide").on("click", click_fun1)
    $("#show").on("click", click_fun2)
    $("#toggle").on("click", click_fun3)
});

function click_fun1() {
    $("#p1").hide(1000);
}

function click_fun2() {
    $("#p1").show(1000);
}

function click_fun3() {
    $("#p1").toggle(1000);
}