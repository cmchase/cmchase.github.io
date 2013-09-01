$ ->
	getRandomInt = (min, max) ->
		Math.floor(Math.random() * (max - min + 1)) + min

	num = getRandomInt(1,9)
	$(".background.no-cover").css("background-image", "url(/assets/img/covers/cover-#{ num }.jpg)")

	$(".post-link, .panel-link").on("click", ->
		window.location = $(this).data("link");
	)
	$(".data-link").hide();
	$(".branding").on("click", ->
		window.location = $(this).data("link");
	)

	
