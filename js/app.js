$( document ).ready(function() {


	$("#mute-button").on("click",function(){
			var vid = document.getElementById("myVideo");
			vid.muted = true;
			$(this).hide();
			$("#volume-button").css('display', 'block');
	});

	$("#volume-button").on("click", function(){
		var vid = document.getElementById("myVideo");
			vid.muted = false;
			$(this).hide();
			$("#mute-button").css('display', 'block');
	})

	var mainbottom = $('#services-content').offset().top + $('#services-content').height();

// on scroll, 
	$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
    } else {
        $('.navbar').removeClass('past-main');
   	}
	});
});