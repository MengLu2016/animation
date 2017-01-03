var num = 18;
function init() {
    var ocontainer = document.getElementsByClassName("container");
    var otop = document.getElementById("top_p1");
    for (var i = 0; i < num; i++) {
        otop.appendChild(createStar());
    }
}
//星星个数的范围
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}
function pixelValue(value) {
    return value + 'px';
}
function durationValue(value) {
    return value + 's';
}
function createStar() {
    var starDiv = document.createElement('div');

    var image = document.createElement('img');

    image.src = "potos/p1/images/star_" + randomInteger(1, 4) + ".png";

    starDiv.style.top = "-100px";

    starDiv.style.left = pixelValue(randomInteger(0, 640));

    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';

    starDiv.style.webkitAnimationName = 'fade, drop';

    image.style.webkitAnimationName = spinAnimationName;

    var fadeAndDropDuration = durationValue(randomFloat(11, 20));

    var spinDuration = durationValue(randomFloat(4, 8));

    starDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var starDelay = durationValue(randomFloat(0, 5));

    starDiv.style.webkitAnimationDelay = starDelay + ', ' + starDelay;

    image.style.webkitAnimationDuration = spinDuration;
    starDiv.appendChild(image);
    return starDiv;
}
window.addEventListener('load', init, false);


