(function() {
  $(function() {
    var getRandomInt, num;
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
    $(".works .panels section").on("click", function() {
      var workgroup;
      workgroup = $(this).data("workgroup");
      $("#" + workgroup).addClass("active-panel");
      return window.scrollTo(0, $("aside.cover").height());
    });
    return $("a.close").on("click", function() {
      return $(this).parent().removeClass("active-panel");
    });
  });

}).call(this);
