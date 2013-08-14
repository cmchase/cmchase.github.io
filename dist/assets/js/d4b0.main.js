(function() {
  $(function() {
    $("article.post-link").on("click", function() {
      return window.location = $(this).data("link");
    });
    return $(".branding").on("click", function() {
      return window.location = $(this).data("link");
    });
  });

}).call(this);
