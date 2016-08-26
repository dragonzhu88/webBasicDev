/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {
    $("body").load("box.htm",function (data,status,s) {
        console.log(status);
        if(status == "error"){
            $("body").text("error");
        }
    });
});