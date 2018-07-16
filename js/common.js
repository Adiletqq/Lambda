$(function() {
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(document).ready( function(){
  $(".fine_img").animated("bounceInRight");
  $(".menu_wrap").animated("fadeInUp");
  $(".fine_box_wrap").animated("fadeInRight");
  $(".fine_box_wrap").animated("fadeInRight");
  $(".reserv_img_wrap").animated("fadeInLeft");
  $(".animated_reserv").animated("fadeInRight");

} );




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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
$(document).ready(function() {
    $(".anchor").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });


	$(".burger").click(function() {
		$(".top_mnu").slideToggle();

	});





	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
