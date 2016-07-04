jQuery(document).ready(function($) {
	//code here
	var elem = $(".aContent");
	$(".aTitle").on("click", function() {
		if ( $(this).hasClass("active")) {
			$(this).toggleClass("active").next(elem).toggle();
		} else {
			$(".aTitle.active").toggleClass("active").next(elem).toggle();
			$(this).toggleClass("active").next(elem).toggle();
		}
		
	});
});
