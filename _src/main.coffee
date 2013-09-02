$ ->
	getRandomInt = (min, max) ->
		Math.floor(Math.random() * (max - min + 1)) + min

	num = getRandomInt(1,9)
	$(".background.no-cover").css("background-image", "url(/assets/img/covers/cover-#{ num }.jpg)")

	$(".post-link, .panel-link").on("click", ->
		window.location = $(this).data("link")
	)
	$(".data-link").hide();
	$(".branding").on("click", ->
		window.location = $(this).data("link")
	)
	$(".works .preview-panels section").on("click", ->
		selector = $(".panels.details-panels." + $(this).data("workgroup"))

		selector.addClass("active-panels").removeClass("inactive-panels")
		alert(selector.height())
		window.scrollTo(0, $("aside.cover").height())
	)
	$("a.close").on("click", ->
		$(".active-panels").removeClass("active-panels").addClass("inactive-panels")
	)

	
