$( document ).ready(function() {
	'use strict';
	
	/*-----FIXED NAV PAST HEADER-----*/
	var yourNavigation = $("#nav-container");
    var stickyDiv = "sticky";
    var yourHeader = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > yourHeader ) {
		yourNavigation.addClass(stickyDiv);
		  $("#first-break").addClass("navSpaceFill");
	  } else {
		yourNavigation.removeClass(stickyDiv);
		  $("#first-break").removeClass("navSpaceFill");
	  }
	});
	
	/*-----GALLERY FUNCTIONALITY-----*/
	$(".gallery-item").hover(function() {
		$(this).children(".hover-cover").slideToggle();
	});
	
	$(".hover-cover").on("click", function(){
		$(this).parent().children(".gallery-content").show();
	});
	
	$(".close-content").on("click", function(){
		$(this).parent().hide();
	});
});