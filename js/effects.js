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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var offset = (target.selector == '#profile' ? 100 : 70);
        $('html,body').animate({
          scrollTop: target.offset().top-offset
        }, 1000);
        return false;
      }
    }
  });
});