(function() {
  $(function() {
    var getRandomInt, num;
    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    num = getRandomInt(1, 9);
    $(".background.no-cover").css("background-image", "url(/assets/img/covers/cover-" + num + ".jpg)");
    $("article.post-link").on("click", function() {
      return window.location = $(this).data("link");
    });
    return $(".branding").on("click", function() {
      return window.location = $(this).data("link");
    });
  });

}).call(this);
