$ ->
	getRandomInt = (min, max) ->
		Math.floor(Math.random() * (max - min + 1)) + min

	num = getRandomInt(1,9)
	$(".background.no-bg").css("background-image", "url(/assets/img/covers/cover-#{ num }.jpg)")

	$("article.post-link").on("click", ->
		window.location = $(this).data("link");
	)
	$(".branding").on("click", ->
		window.location = $(this).data("link");
	)

	
