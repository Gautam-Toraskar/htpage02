$(function(){
  $(window).resize(function(event) {
    var screenHeight = window.innerHeight;
    console.log(screenHeight);
    var divHeight = $(".wrapperBanner").outerHeight();
    console.log(divHeight);
    if(screenHeight > divHeight){
      $(".wrapperBanner").outerHeight(screenHeight);
    }
  });
})( jQuery, window, document );