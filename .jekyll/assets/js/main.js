(function() {
  $(function() {
    var getRandomInt, num, resetWorksImages;
    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    num = getRandomInt(1, 9);
    $(".background.no-cover").css("background-image", "url(/assets/img/covers/cover-" + num + ".jpg)");
    $(".post-link, .panel-link").on("click", function() {
      return window.location = $(this).data("link");
    });
    $(".data-link").hide();
    $(".branding").on("click", function() {
      return window.location = $(this).data("link");
    });
    $(".works .preview-panels section").on("click", function() {
      var selector;
      selector = $(".panels.details-panels." + $(this).data("workgroup"));
      selector.addClass("active-panels").removeClass("inactive-panels");
      if ($(window).width() > 601) {
        return window.scrollTo(0);
      } else {
        return window.scrollTo(0, $("aside.cover").height());
      }
    });
    $("a.close").on("click", function() {
      return $(".active-panels").removeClass("active-panels").addClass("inactive-panels").find("section").removeAttr("style");
    });
    resetWorksImages = function() {
      $("a.works-image-link").removeClass("active-thumb");
      return $(".works-full-image").hide();
    };
    $("a.works-image-link").each(function() {
      return $(this).on("click", function() {
        if ($(this).hasClass("active-thumb")) {
          resetWorksImages();
        } else {
          resetWorksImages();
          $(this).addClass("active-thumb").parent().find(".works-full-image").attr("src", $(this).attr("href")).show();
        }
        return false;
      });
    });
    return $(".works-full-image").on("click", function() {
      resetWorksImages();
      return false;
    });
  });

}).call(this);
