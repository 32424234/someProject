$(function(){
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $('html').width();
		if (htmlWidth <= 320) {
			$("html").css({
				"font-size" : "12px"
			});
		} else {
			$("html").css({
				"font-size" :  12 / 320 * htmlWidth + "px"
			});
		}
	}infinite();
});