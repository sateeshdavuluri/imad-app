console.log('Loaded!');
/*
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
*/
// counter code
var touch = document.getElementById('touch-button');
var counter = 0;

touch.onclick=function(){
   
   //make req counter
   //var request = new XMLHttpRequest();
   
   //complete the response and store it in a varible
   
   
   //render the count in span 
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML= counter.toString();
};