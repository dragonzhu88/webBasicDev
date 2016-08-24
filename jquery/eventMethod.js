/**
 * Created by zdc on 16-8-20.
 */
$(document).ready(function () {
    $("#button_click").click(function () {
        $(this).hide();
    });

    $("#button_dblclick").dblclick(function () {
        $(this).hide();
    });

    $("#button_mouseenter").mouseenter(function () {
        $(this).hide();
    });

    $("#button_mouseleave").mouseleave(function () {
        $(this).hide();
    });


});