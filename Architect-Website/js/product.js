$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 60)
});

$(document).ready(function(){
    $(".switch").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
    }else{
        $(".switch").attr("name", "moon-outline"); 
    }
  });
});

////////////////////////////////////

$(document).on('click', '.card', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href='detail.html'    
});


 

