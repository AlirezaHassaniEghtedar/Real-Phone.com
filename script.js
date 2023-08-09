var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var rotationAngle = 0;


upBtn.onclick = function() {
    rotationAngle -= 90;
    circle.style.transform = "rotate(" + rotationAngle + "deg)";
}

downBtn.onclick = function() {
    rotationAngle += 90;
    circle.style.transform = "rotate(" + rotationAngle + "deg)";
}