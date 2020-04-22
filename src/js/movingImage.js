if (window.innerWidth > 1300) {
  $(document).ready(function() {
    var movementStrength = 50;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#movingImage").mousemove(function(e) {
      var pageX = e.pageX - $(window).width() / 3;
      var pageY = e.pageY - $(window).height() / 3;
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1;
      $("#movingImage").css(
        "background-position",
        newvalueX - 190 + "px     " + newvalueY + "px"
      );
    });
  });

  $(document).ready(function() {
    var movementStrength = 50;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#movingImage2").mousemove(function(e) {
      var pageX = e.pageX - $(window).width() / 2;
      var pageY = e.pageY - $(window).height() / 2;
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1;
      $("#movingImage2").css(
        "background-position",
        newvalueX - 190 + "px     " + newvalueY + "px"
      );
    });
  });

  $(document).ready(function() {
    var movementStrength = 50;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#movingImage3").mousemove(function(e) {
      var pageX = e.pageX - $(window).width() / 2;
      var pageY = e.pageY - $(window).height() / 2;
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1;
      $("#movingImage3").css(
        "background-position",
        newvalueX - 190 + "px     " + newvalueY + "px"
      );
    });
  });
}
