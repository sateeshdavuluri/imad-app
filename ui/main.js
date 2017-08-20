console.log('Loaded!');

// change main text
var element = document.getElementById('main-text');

element.innerHTML="good Morning";

//move an element 
var img= document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+ 10;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,25); //for every 50 ms moveRight func called
    // img.style.marginLeft = '100px';
    //to move img its CSS been modified
};