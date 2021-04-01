
(function($){
	"use strict";
	
	$(document).ready(function($){

		console.log("ready");
		if (jQuery("body").hasClass("page-id-189")||jQuery("body").hasClass("page-id-12175")){
			var hash = jQuery(location).attr('hash');
			hash = hash.slice(1);
			if (hash){
				var element = "."+hash;
				console.log(hash);
				$('html, body').delay( 800 ).animate({
					scrollTop: $(element).offset().top - 50
				}, 'slow');
			}
			
		}

		$('.menu-nav li').click(function (e) {
			e.preventDefault();
			var element = "."+this.id;
			console.log(element);
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 'slow');
		});
		$('.menu_btn a').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
		$('#menu_btn').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('.zoom-btn-sm').toggleClass('scale-out');
			if (!$('.zoom-card').hasClass('scale-out')) {
			  $('.zoom-card').toggleClass('scale-out');
			}
		  });
		  
		  $('.zoom-btn-sm').click(function() {
			var btn = $(this);
			var card = $('.zoom-card');
		  
			if ($('.zoom-card').hasClass('scale-out')) {
			  $('.zoom-card').toggleClass('scale-out');
			}
			
		  });
		  
	});	
		

})( jQuery );
