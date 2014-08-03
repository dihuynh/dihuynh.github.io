$(document).ready(function(){

	// ------------------------- SPLASH PAGE ------------------------- //
	$('.greeting').addClass('animated fadeInRight');


	// ------------------------- ABOUT PAGE ------------------------- //
	$('#slidemarginleft button').click(function() {
		var $marginLefty = $(this).next();
		$marginLefty.animate({
			marginLeft: parseInt($marginLefty.css('marginLeft'),10) 
									== 0 ? $marginLefty.outerWidth() :0
		});
	});

});