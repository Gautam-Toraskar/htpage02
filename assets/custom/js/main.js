
(function(){

	var setBannerSize = function(event) {
    var screenHeight = window.innerHeight;
    console.log(screenHeight);
    var divHeight = $(".wrapperBanner").outerHeight();
    console.log(divHeight);
    if(screenHeight > divHeight){
      $(".wrapperBanner").outerHeight(screenHeight);
    }
  };
  $(window).load(setBannerSize);
  $(window).resize(setBannerSize);

  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });


  var $navbar = $("header"),
	    y_pos = $navbar.offset().top + 400,
	    height = $navbar.height(),
	    str = "";

	    y_pos = 400;
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > y_pos + height) {
      $navbar.removeClass('remove');
      str = "greater";
    } else if (scrollTop <= y_pos) {
      $navbar.addClass('remove');
      str = "lower";
    }
    $(".count").text(str + ": " + scrollTop);
  });


})();