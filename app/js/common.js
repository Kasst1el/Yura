$(function() {
	

	$(document).ready(function(){
		$('a.call_back').click(function(event){
			event.preventDefault();
			$('#overlay').fadeIn(400,
				function(){
					$('#modal_form')
						.css('display','block')	
						.animate({opacity: 1, top: '50%'}, 200)
				});	
		});
		$('#modal_close, #overlay').click(function(){
			$('#modal_form')
				.animate({opacity: 0, top: '45%'}, 200,
					function(){
						$(this).css('display','none');
						$('#overlay').fadeOut(400);
					});
		});
	});

	$(".header_button_down").click(function() {
		$("html, body").animate({
			scrollTop : $(".advantages").offset().top
		}, 800);
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});