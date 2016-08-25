/**
 * Created by zdc on 16-8-25.
 */
$(document).ready(function () {

    $("#btn").on("click", ajax_click);

});

function ajax_click() {

    var name = "zdc";
    var url_addr = 'http://zdc.test.dd/webBasicDev/jquery/ajax/server.php';

    var person = {};
    person.name = name;
    person.url = url_addr;
   // var obj = JSON.stringify(person);

    var obj_data;
    $.ajax({
        url: url_addr,// 跳转到 action
        data: {
            obj: person,
            name: name,
            url: url_addr
        },
        type: 'post',
        cache: false,
        dataType: 'json',
        success: function (data) {

            // obj_data = JSON.parse(data);
            obj_data = data;
            console.log(obj_data);
            $("#p1").text(obj_data.name);
        },
        error: function () {
            alert("异常！");
        }
    });
}