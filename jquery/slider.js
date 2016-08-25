/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("#div1").click(function () {
        $("#div2").slideDown(1000);
    });
    $("#div3").click(function () {
        $("#div2").slideUp(500);
    })
    $("#div4").click(function () {
        $("#div2").slideToggle(500);
    })
    $("#div5").click(function () {
        $("#div2").slideToggle(500,function () {
            alert('回调函数');
          // $("#div2").fadeTo(1000,0.3);
        });
    })

});