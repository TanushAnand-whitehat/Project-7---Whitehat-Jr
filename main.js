var mouseEvent = "empty";
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
radius = 10;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("Color").value;
    width = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    current_position_of_x = e.clientX-canvas.offsetLeft;
    current_position_of_y = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_x = current_position_of_x;
    last_position_y = current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave() {
    mouseEvent = "mouseLeave";
}
function Clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

}
