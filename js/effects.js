var transparent = true;


$(window).scroll(function(e) {
   /*
 var s = $(window).scrollTop();
        opacityVal = (s / 150.0);
    $('.img-blurred').css('opacity', opacityVal);
*/     
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

$(document).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
    	console.log("scrolltop >260");
        if(transparent) {
        	console.log("transparent");
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !transparent ) {
            transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});