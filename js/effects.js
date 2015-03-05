var transparent = true;


$(window).scroll(function(e) {
   /*
 var s = $(window).scrollTop();
        opacityVal = (s / 150.0);
    $('.img-blurred').css('opacity', opacityVal);
*/     
    
    
    if($(window).scrollTop() <= $(document).height()/2) {
        oVal = ($(window).scrollTop() / 170);
    } else {
        oVal = ($(document).height() -
        $(window).scrollTop() -
        $(window).height()) / 170;
        
    }



    $(".blur").css("opacity", oVal);
    
    
});

$(document).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
        if(transparent) {
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