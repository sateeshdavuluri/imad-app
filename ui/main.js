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


//input and submit comments

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make req to server and send name
     //create req counter
   var request = new XMLHttpRequest();
   
   //complete the response and store it in a varible
   request.onreadystatechange = function(){
       
       if(request.readystate === XMLHttpRequest.Done){
         if(request.status === 200){
            
            // capture and render the names as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list ='';
            
            // 10 recent comment to show
            if(names.length<=10){
                for(var i=names.length;i>0;i--){
                    list += '<li>' + names[i-1] +'</li>';
                }
                
            } else {
                for(var j=0,i=names.length;j<10;i--,j++){
                    list += '<li>' + names[i-1] +'</li>';
                }
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



// Login username pswrd
var login = document.getElementById('login_btn');
var logout = document.getElementById('logout_btn');

login.onclick=function(){
    //make req to server and send name
     //create req counter
   
   var request = new XMLHttpRequest();

   //complete the response and store it in a varible
   request.onreadystatechange= function(){
       
       if(request.readystate === XMLHttpRequest.DONE){
         if(request.status === 200){
            console.log("user logged-in");
            alert("Logged-in Successfully!");
            
            var span = document.getElementById('user_name');
                 span.innerHTML= username.toString() ;
                 
             } else if(request.status === 403) {
                 alert("username / password is invalid ");
                 console.log("username / password is invalid ");
             } else if(request.status === 500) {
                 alert("Something is wrong on the Server");
             }
         
         
            
        }
      };

    login.style.visibility = 'hidden';
    logout.style.visibility = 'visible';
    
        
    //make req 
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  //  console.log(username);  //for test/debugging only
  //  console.log(password);  //for test/debugging
    
 
  request.open("POST","http://sateeshdavuluri.imad.hasura-app.io/login", true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username, password: password}));

  
};  


// logout
var login = document.getElementById('login_btn');
var logout = document.getElementById('logout_btn');

logout.onclick = function(){
    var request = new XMLHttpRequest();

   //complete the response and store it in a varible
   request.onreadystatechange= function(){
       
       if(request.readystate === XMLHttpRequest.DONE){
         if(request.status === 200){
            console.log("user logged-out");
            alert("Logged-out Successfully!");
            
           } else if(request.status === 500) {
                 alert("Something is wrong on the Server");
           }
        }
      };
     
     login.style.visibility = 'visible';
     logout.style.visibility = 'hidden';
    //make req 
 request.open("GET","http://sateeshdavuluri.imad.hasura-app.io/logout", true);
 
  request.send(null);

};
    



  
//new user registration
var register = document.getElementById('register_btn');

register.onclick=function(){
    //make req to server and send name
     //create req counter
   
   var request = new XMLHttpRequest();

   //complete the response and store it in a varible
   request.onreadystatechange= function(){
       
       if(request.readystate === XMLHttpRequest.Done){
             
             if(request.status === 200){
                console.log("user Registered");
                alert("user Registered Successfully!"); } 
             
             else if(request.status === 500){
                     alert("Something is wrong on the Server"); }
             
       }
       
      };

   

    //make req 
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  //  console.log(username);  //for test/debugging only
  //  console.log(password);  //for test/debugging
    
 if(username.toString() === "" || password.toString()===""){
     alert("Username and password should not be empty");
 } else {
          request.open("POST","http://sateeshdavuluri.imad.hasura-app.io/create-user", true);
          request.setRequestHeader('Content-Type','application/json');
          request.send(JSON.stringify({username: username, password: password}));
        }

    
};  
  













