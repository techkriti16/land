$(window).on('resize load',function(){
	setTimeout(function(){
		$('html').width($(window).outerWidth());
	},100);
});