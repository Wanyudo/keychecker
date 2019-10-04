window.addEventListener('keydown', f, true);

function f(e){
    $("#code").text(e.code);
    $("#keyCode").text(e.keyCode);
    $("#key").text(e.key);
}