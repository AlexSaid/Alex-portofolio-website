setTimeout(white, 1000);






function white(){
  document.querySelector(".white").style.display = "none";
}
let menu = document.querySelector(".navigation-icon");
let nav = document.querySelector(".navigation");

menu.addEventListener("click", function(){
     
     nav.classList.toggle("open");
     this.classList.toggle("menu-transfer");
});

// init Isotope
var $grid = $('.picture-container').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// image loaded
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


    
    

    
    $(document).ready(function(){
            $(".navigation-ul a").click(function(link){
        link.preventDefault();
        
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(target).offset().top 
        }, 2000);
    });
    })


















