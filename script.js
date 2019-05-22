
$(document).ready(function(){
    // load the main.html when document is ready
    $(".content").load("main.html"); 

    // go back to main when brand is clicked
    $("#nav-home").click(function() {
    
        // Loading the content of contact.html into to .content class
        $(".content").load("main.html");    
    });

    // upload contact page
    $("#nav-contact").click(function() {
        
        // Loading the content of contact.html into to .content class
        $(".content").load("contact.html");    
    });
    
    // upload about page
    $("#nav-about").click(function() {
        
        // Loading the content of contact.html into to .content class
        $(".content").load("about.html");    
    });
      
    
    
  });