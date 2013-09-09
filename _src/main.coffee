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

		if ($(window).width() > 601)
			window.scrollTo(0)
		else
			window.scrollTo(0, $("aside.cover").height())


	)

	$("a.close").on("click", ->
		$(".active-panels").removeClass("active-panels").addClass("inactive-panels")
			.find("section").removeAttr("style")
	)

	resetWorksImages = () ->
		$("a.works-image-link").removeClass("active-thumb")
		$(".works-full-image").hide()

	$("a.works-image-link").each(() ->
		$(this).on("click", ->
			if $(this).hasClass("active-thumb")
				resetWorksImages()
			else
				resetWorksImages()
				$(this).addClass("active-thumb")
					.parent().find(".works-full-image").attr("src", $(this).attr("href")).show()
			return false
		)
	)

	$(".works-full-image").on("click", ->
		resetWorksImages()
		return false
	)
