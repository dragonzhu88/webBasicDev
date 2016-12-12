/**
 * Created by zdc on 16-8-20.
 */
$(document).ready(function () {
    $("body").on("click",bodyhandler);
    $("div").on("click",divhandler);
    $("div").on("click",divhandler2);
});

function bodyhandler(event) {
    console.log(event);

}

function divhandler(event) {
    console.log(event);
    event.stopPropagation(); //阻止父级
//    event.stopImmediatePropagation();//阻止全部
}

function divhandler2(event) {
    console.log(event);
}