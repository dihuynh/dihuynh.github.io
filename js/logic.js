
$(document).ready(function(){

  // ------------------------- SPLASH PAGE ------------------------- //
  $('.greeting').addClass('animated fadeInRight');

  // ------------------------- ABOUT PAGE ------------------------- //
  $('.next-arrow').click(function(){
    var options = {direction: 'right', easing:'linear'};
    var duration = 500;
    $('#social-media').toggle(options);
  });

});


