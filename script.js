
$(document).ready(function(){
    $("#btnTest").click(function(){
        alert("hi");
        $(".content").load("main.html"); 

    });

    $("#btnAbout").click(function() {
        $.get("about.html", function(data) {
          $(".content").html(data)
        })
      });
    
      $("#btnContact").click(function() {
        // Loading the content of contact.html into to .content class
        $(".content").load("contact.html");    
      });
  });