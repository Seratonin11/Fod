$(document).ready(function() {
    
    /* STICKY NAVIGATION */
    
       $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
          } else {
              $('nav').removeClass('sticky');
          }
       }, {
           offset: '60px;'
       });      
                  

        /* SCROLL ON BUTTONS */

       $('.js--scroll-to-plans').click(function() {
           $('html,body').animate({scrollTop: $('section-plans').offset().top}, 1000);
       });
    
        $('.js--scroll-to-start').click(function() {
           $('html,body').animate({scrollTop: $('features').offset().top}, 1000);
       });

        /* NAVIGATION SCROLL */
        
    
    
   /* neradi
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function()) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.lenght ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.lenght) {
                $('html.body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

*/
});




/*



var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})

*/




