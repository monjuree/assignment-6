// JavaScript Document
	
	





 $(document).ready(function() {
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	 
	   for( var i = 0 ; i < cities.length ; i++ ) {
		 $("#city-type").append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
		 
	   }
	 
		   $("form : input").on("change", "#city-type",function(){
			 var city = $("#city-type").val();
			 if(city === 'NYC') {
			   $("body").attr('class','nyc');
			 }
			 else if (city === 'SF') {
			   $("body").attr('class','sf');
			 }
			 else if (city === 'LA') {
			   $("body").attr('class','la');
			 }
			 else if (city === 'ATX') {
			   $("body").attr('class','austin');
			 }
			 else if (city === 'SYD') {
			   $("body").attr('class','sydney');
     		}
			   else{
				   $("body").attr('class', 'invalid');
			   }
   		});
 	}); 





