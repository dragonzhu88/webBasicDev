/**
 * Created by zdc on 16-8-20.
 */
$(document).ready(function () {
    // $("#click").click(function () {
    //     alert("hello");
    // })
    //
    // $("#click").bind('click',clickhandder1);
    // $("#click").bind('click',clickhandder2);
    // $("#click").unbind('click',clickhandder2);
    $("#click").on('click',clickhandder1);
    $("#click").on('click',clickhandder2);
    $("#click").off('click',clickhandder2);
});

function clickhandder1() {
    console.log("clickhandder1");
}

function clickhandder2() {
    console.log("clickhandder2");
}