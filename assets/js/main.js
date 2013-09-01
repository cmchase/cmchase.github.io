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
    return $(".branding").on("click", function() {
      return window.location = $(this).data("link");
    });
  });

}).call(this);
