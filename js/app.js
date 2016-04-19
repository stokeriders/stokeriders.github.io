$( document ).ready(function() {

	$(".serve").on("click", function(){
		$("#serivce-link").addClass("active")
	})

	$("#mute-button").on("click",function(event){
		event.preventDefault();
			var vid = document.getElementById("myVideo");
			vid.muted = true;
			$(this).toggle();
			$("#volume-button").css('display', 'block');
	});

	$("#volume-button").on("click", function(event){
		event.preventDefault();
		var vid = document.getElementById("myVideo");
			vid.muted = false;
			$(this).toggle();
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
		$("#play-again-button").css('display', 'block')
	}

	$("#play-again-button").on("click", function(event){
		event.preventDefault();
		var vid = document.getElementById("myVideo");
		$(".navbar").removeClass('after-video');
		$("#logoimg").css('display', 'none');
		$(vid).show();
		$(vid).load();	
		$(this).hide();
		$("#mute-button").show();
	});

	$("#play-again-button").on("mouseover", function(){
    $("#msg_div").css('display', 'inline-block')
	}).mouseleave(function() {
    $( "#msg_div" ).css('display', 'none')
  });

	var mainbottom = $('#services-content').offset().top + $('#services-content').height();
 
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