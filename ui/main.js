console.log('Loaded!');

// change main text
var element = document.getElementById('main-text');

element.innerHTML="good Morning";

//move an element 
var img= document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+ 10;
    img.style.marginLeft = margiLeft +'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50); //for every 50 ms moveRight func called
    // img.style.marginLeft = '100px';
    //to move img its CSS been modified
};