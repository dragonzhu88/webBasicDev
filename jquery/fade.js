/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("#btn1").on("click",click_fade_in);
    $("#btn2").on("click",click_fade_out);
    $("#btn3").on("click",click_fade_toggle);
    $("#btn4").on("click",click_fade_to);
});

function click_fade_in() {
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(1000);
    $("#div3").fadeIn(1000);
}

function click_fade_out() {
    $("#div1").fadeOut(1000);
    $("#div2").fadeOut(1000);
    $("#div3").fadeOut(1000);
}

function click_fade_toggle() {
    $("#div1").fadeToggle(1000);
    $("#div2").fadeToggle(1000);
    $("#div3").fadeToggle(1000);
}

function click_fade_to() {
    $("#div1").fadeTo(1000,0);
    $("#div2").fadeTo(1000,0.7);
    $("#div3").fadeTo(1000,0.3);
}