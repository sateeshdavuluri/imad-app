console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML="good Morning";

var img= document.getElementById('madi');

function moveright(){
    img.style.marginLeft = '100px';
}
img.onclick = function() {
    var interval = setInterval(moveright,50);
};