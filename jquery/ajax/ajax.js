/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {

    // $("body").load("box.htm", function (a, status, c) {
    //     console.log(status);
    //     if (status == "error") {
    //         $("body").text('error');
    //     }
    // });

    // $.getScript("hello.js").complete(function () {
    //     alert(1);
    //     sayHello();
    // });
    $("#btn").on("click",ajax_click);


});

function ajax_click() {

    // alert(1);

    var name = "zdc";
    var url_addr = 'http://zdc.test.dd/webBasicDev/jquery/ajax/server.php';
    $.ajax({
        url: url_addr,// 跳转到 action
        data: {
            name: name,
            url:url_addr
        },
        type: 'post',
        cache: false,
       // dataType: 'json',
        success: function (data) {
            alert("修改成功！");

        },
        error: function () {
            alert("异常！");
        }
    });
}