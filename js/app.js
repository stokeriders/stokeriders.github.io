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
	});

	var vid = document.getElementById("myVideo");
	vid.onended = function(){
		$(vid).hide();
		$("#logoimg").css('display', 'block');
		$("#logoimg").css('width', '100%');
		$("#mute-button").hide();
		$("#volume-button").hide();
		$(".navbar").addClass('after-video');
	}

	$(".serve").on("click", function(){
		$("#serivce-link").addClass("active")
	})

	var mainbottom = $('#services-content').offset().top + $('#services-content').height();

// on scroll, 
	$(window).on('scroll',function(){
		var vid = document.getElementById("myVideo");

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
    		$('.navbar').removeClass('after-video');
        $('.navbar').addClass('past-main');
    } else if (vid.paused) {
        $('.navbar').removeClass('past-main');
        $('.navbar').addClass('after-video');
   	} else {
   		$('.navbar').removeClass('past-main')
   		$('.navbar').removeClass('after-video')
   	}
	});
});