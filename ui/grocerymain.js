
		var toggle = 0;
	    var gro=document.getElementById('category2');
	   // var sub1 = document.getElementById("sub1");
	    
	    gro.onclick = function(){
	  	// show sub menu
	  	 var sub1 = document.getElementById("sub2");
	  	 
		 if(toggle === 0){
	    	 sub1.style.display = 'block';
	    	 toggle = 1;
	    } else {
	    	 sub1.style.display = 'none';
	    	 toggle = 0;
	     } 
	    
	   }; 
	
// item1 data with toggle  
		var toggle2 = 0;
	    var item1= document.getElementById("item1");
	 	item1.onclick= function() {
		if(toggle2 === 0){
	 	document.getElementById('bdt').innerHTML ="MTR  1kg   50.00";
	 	toggle2 = 1;} else{
	 		document.getElementById('bdt').innerHTML = "";	
	 		toggle2 = 0;
	 	}
	 	//alert("toggle2 value :"+ toggle2) ; 
	 } ;

	var other =	document.getElementById("other");
	other.onchange = function() { 
		if(other.value=="other") {document.getElementById("other2").style.display = "inline" ;} 
		else { document.getElementById("other2").style.display ="none"; } 
	 } ;
	 
//	price update
	var price = document.getElementById("price") ;
	var unit = document.getElementById("unit") ; 
	
	price.innerHTML = (other.value * unit.value)  ;	
	unit.onchange = function() {
	price.innerHTML = (other.value * unit.value) ;} ;
	
	other.onchange = function() {
	price.innerHTML = (other.value * unit.value)  ;	} ;
	
