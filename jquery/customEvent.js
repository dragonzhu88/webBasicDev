/**
 * Created by zdc on 16-8-20.
 */
$(document).ready(function () {
    $("#clickme").click(function () {
        var e = jQuery.Event("myevent");
        $("#clickme").trigger(e);

    });

    $("#clickme").on("myevent",function () {
        alert(1);
    })
});