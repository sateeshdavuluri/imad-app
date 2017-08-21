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


touch.onclick=function(){
   
   //create req counter
   var request = new XMLHttpRequest();
   
   //complete the response and store it in a varible
   request.onreadystatechange= function(){
       
       if(request.readystate === XMLHttpRequest.Done){
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
                 span.innerHTML= counter.toString();
             
         }
       }
   };
   
   //make req 
  request.open('GET','http://sateeshdavuluri.imad.hasura-app.io/counter',true);
  request.send(null);
};


//input and submit


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make req to server and send name
     //create req counter
   var request = new XMLHttpRequest();
   
   //complete the response and store it in a varible
   request.onreadystatechange= function(){
       
       if(request.readystate === XMLHttpRequest.Done){
         if(request.status === 200){
            
            // capture and render the names as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list ="";
            
            for(var i=names.length;i>0;i++){
                list += '<li>' + names[i] +'</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
         }
       }
   };
   
   //make req 
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  
  request.open('GET','http://sateeshdavuluri.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send(null);
  
  
    
};
























