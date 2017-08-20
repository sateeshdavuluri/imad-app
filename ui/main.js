console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML="good Morning";

var img= document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft += 10;
    img.style.marginLeft = margiLeft +'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
    // img.style.marginLeft = '100px';
};