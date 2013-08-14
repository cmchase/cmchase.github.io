$ ->
	$("article.post-link").on("click", ->
		window.location = $(this).data("link");
	)
	$(".branding").on("click", ->
		window.location = $(this).data("link");
	)
	
